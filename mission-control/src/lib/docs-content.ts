import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";
import { allDocs, getDocBySlug } from "@/lib/docs";

const workspaceRoot = path.resolve(process.cwd(), "..");
const MAX_TABLE_ROWS = 50;
const MAX_SHEET_PREVIEW_COLUMNS = 12;

export type DocContent =
  | { kind: "markdown"; content: string }
  | { kind: "csv"; rows: string[][] }
  | { kind: "xlsx"; sheets: { name: string; rows: string[][] }[] }
  | { kind: "unsupported" };

function normalizeCell(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
}

function parseCsv(content: string) {
  return content
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split(","))
    .map((row) => row.map(normalizeCell));
}

function parseXlsx(buffer: Buffer) {
  const workbook = XLSX.read(buffer, { type: "buffer" });

  return workbook.SheetNames.map((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rawRows = XLSX.utils.sheet_to_json<(string | number | boolean | null)[]>(sheet, {
      header: 1,
      defval: "",
      raw: false,
      blankrows: false,
    });

    const rows = rawRows
      .slice(0, MAX_TABLE_ROWS + 1)
      .map((row) => row.slice(0, MAX_SHEET_PREVIEW_COLUMNS).map(normalizeCell));

    return {
      name: sheetName,
      rows,
    };
  });
}

export function getBundledDocContent(slug: string): DocContent | null {
  const doc = getDocBySlug(slug);

  if (!doc) {
    return null;
  }

  const absolutePath = path.join(workspaceRoot, doc.path);
  const extension = path.extname(doc.path).toLowerCase();

  if (!fs.existsSync(absolutePath)) {
    return null;
  }

  if (extension === ".md") {
    return { kind: "markdown", content: fs.readFileSync(absolutePath, "utf8") };
  }

  if (extension === ".csv") {
    return { kind: "csv", rows: parseCsv(fs.readFileSync(absolutePath, "utf8")) };
  }

  if (extension === ".xlsx") {
    return { kind: "xlsx", sheets: parseXlsx(fs.readFileSync(absolutePath)) };
  }

  return { kind: "unsupported" };
}

export const bundledDocContent = Object.fromEntries(
  allDocs.map((doc) => [doc.slug, getBundledDocContent(doc.slug)]),
) as Record<string, DocContent | null>;
