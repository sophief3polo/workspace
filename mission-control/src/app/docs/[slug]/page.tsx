import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as XLSX from "xlsx";
import { allDocs, getDocBySlug } from "@/lib/docs";

const workspaceRoot = path.resolve(process.cwd(), "..");
const MAX_TABLE_ROWS = 50;
const MAX_SHEET_PREVIEW_COLUMNS = 12;

type SheetPreview = {
  name: string;
  rows: string[][];
};

export async function generateStaticParams() {
  return allDocs.map((doc) => ({ slug: doc.slug }));
}

function normalizeCell(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
}

function renderTable(rows: string[][]) {
  if (!rows.length) {
    return (
      <div className="rounded-2xl border border-white/8 bg-[#0f1218] p-5 text-sm text-[#98a2b3]">
        No rows available to preview.
      </div>
    );
  }

  const [header, ...body] = rows;

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/8 bg-[#0f1218]">
      <table className="min-w-full divide-y divide-white/8 text-left text-sm text-[#d6dbea]">
        <thead className="bg-white/[0.03] text-xs uppercase tracking-[0.18em] text-[#8f98a8]">
          <tr>
            {header.map((cell, index) => (
              <th key={`${cell}-${index}`} className="px-4 py-3 font-medium">
                {cell || `Column ${index + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/6">
          {body.slice(0, MAX_TABLE_ROWS).map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row.join("-")}`}>
              {header.map((_, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top text-[#cfd6e4]">
                  {row[cellIndex] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderMarkdown(content: string) {
  return (
    <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/8 bg-[#0f1218] p-5 text-sm leading-7 text-[#d6dbea]">
      {content}
    </pre>
  );
}

function buildSheetPreview(buffer: Buffer) {
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

export default async function DocViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const absolutePath = path.join(workspaceRoot, doc.path);
  let content = "";
  let workbookPreview: SheetPreview[] = [];
  let loadError = "";

  const extension = path.extname(doc.path).toLowerCase();
  const isMarkdown = extension === ".md";
  const isCsv = extension === ".csv";
  const isXlsx = extension === ".xlsx";

  try {
    if (isXlsx) {
      const buffer = await fs.readFile(absolutePath);
      workbookPreview = buildSheetPreview(buffer);
    } else {
      content = await fs.readFile(absolutePath, "utf8");
    }
  } catch (error) {
    loadError = error instanceof Error ? error.message : "Unable to read document.";
  }

  return (
    <main className="min-h-screen bg-[#08090d] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#0d0f14] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5e6ad2] text-sm font-semibold text-white">
              MC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Urban Events internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            <Link href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Overview</span>
            </Link>
            <Link href="/docs" className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 text-white transition">
              <span>Docs</span>
              <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" />
            </Link>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#0b0d12] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Document viewer
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {doc.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  {doc.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs"
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white transition hover:bg-white/[0.06]"
                >
                  Back to docs
                </Link>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-5 rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                {loadError ? (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-sm text-red-200">
                    Could not load this document: {loadError}
                  </div>
                ) : isMarkdown ? (
                  renderMarkdown(content)
                ) : isCsv ? (
                  renderTable(
                    content
                      .trim()
                      .split(/\r?\n/)
                      .map((line) => line.split(","))
                      .map((row) => row.map(normalizeCell)),
                  )
                ) : isXlsx ? (
                  <div className="space-y-5">
                    {workbookPreview.map((sheet) => (
                      <div key={sheet.name} className="space-y-3 rounded-2xl border border-white/8 bg-[#0f1218] p-5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Worksheet</p>
                          <h2 className="mt-2 text-lg font-semibold text-white">{sheet.name}</h2>
                        </div>
                        {renderTable(sheet.rows)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/8 bg-[#0f1218] p-5 text-sm leading-7 text-[#d6dbea]">
                    This file type is tracked but not yet previewed inline.
                    <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-[#98a2b3]">
                      File path: {doc.path}
                    </div>
                  </div>
                )}
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Document details</p>
                  <div className="mt-5 space-y-3 text-sm text-[#d6dbea]">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">Category</p>
                      <p className="mt-2 text-white">{doc.category}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">Type</p>
                      <p className="mt-2 text-white">{doc.type}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">Updated</p>
                      <p className="mt-2 text-white">{doc.updated}</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">Workspace path</p>
                      <p className="mt-2 break-all text-white">{doc.path}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Viewer notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      Markdown files render as readable text blocks, CSV files render as inline tables, and XLSX files now preview worksheet data.
                    </p>
                    <p>
                      Spreadsheet previews are intentionally capped so the page stays fast and usable.
                    </p>
                    <p>
                      This viewer is backed by the actual workspace files, not placeholder copy.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
