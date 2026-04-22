import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";

const repoRoot = path.resolve(process.cwd(), "..");
const outputPath = path.resolve(process.cwd(), "src/generated/docs-bundle.ts");
const MAX_TABLE_ROWS = 50;
const MAX_SHEET_PREVIEW_COLUMNS = 12;

const docs = [
  { slug: "canonical-profile-debbie-and-urban-events", path: "canonical-profile-debbie-and-urban-events.md" },
  { slug: "retained-context-debbie-2026-04-21", path: "retained-context-debbie-2026-04-21.md" },
  { slug: "interview-gap-list-2026-04-21", path: "interview-gap-list-2026-04-21.md" },
  { slug: "legal-battle-gazecki-dossier", path: "legal-battle-gazecki-dossier.md" },
  { slug: "litigation-brief-f3-v-polo", path: "litigation_brief_f3_v_polo.md" },
  { slug: "brisbane-marquee-companies", path: "brisbane-marquee-companies.csv" },
  { slug: "brisbane-fencing-companies", path: "brisbane-fencing-companies.csv" },
  { slug: "brisbane-luxury-toilets", path: "brisbane-luxury-toilets.csv" },
  { slug: "brisbane-traffic-management-companies", path: "brisbane-traffic-management-companies.csv" },
  { slug: "brisbane-waste-management-companies", path: "brisbane-waste-management-companies.csv" },
  { slug: "portsea-contacts-merged", path: "output/portsea_contacts_merged.xlsx" },
  { slug: "key-contacts-suppliers-all-markets-merged", path: "output/Key Contacts + Suppliers All Markets - Portsea tab merged with cities, filters, and table.xlsx" },
  { slug: "paid-invoices-register", path: "output/paid_invoices_register.csv" },
  { slug: "memory-md", path: "MEMORY.md" },
  { slug: "memory-2026-04-20", path: "memory/2026-04-20.md" },
  { slug: "user-md", path: "USER.md" },
  { slug: "identity-md", path: "IDENTITY.md" },
  { slug: "soul-md", path: "SOUL.md" },
];

function normalizeCell(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function parseCsv(content) {
  return content
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split(","))
    .map((row) => row.map(normalizeCell));
}

function parseXlsx(buffer) {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  return workbook.SheetNames.map((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rawRows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      defval: "",
      raw: false,
      blankrows: false,
    });

    const rows = rawRows
      .slice(0, MAX_TABLE_ROWS + 1)
      .map((row) => row.slice(0, MAX_SHEET_PREVIEW_COLUMNS).map(normalizeCell));

    return { name: sheetName, rows };
  });
}

const bundle = {};

for (const doc of docs) {
  const absolutePath = path.resolve(repoRoot, doc.path);
  if (!fs.existsSync(absolutePath)) {
    bundle[doc.slug] = null;
    continue;
  }

  const ext = path.extname(doc.path).toLowerCase();
  if (ext === ".md") {
    bundle[doc.slug] = { kind: "markdown", content: fs.readFileSync(absolutePath, "utf8") };
  } else if (ext === ".csv") {
    bundle[doc.slug] = { kind: "csv", rows: parseCsv(fs.readFileSync(absolutePath, "utf8")) };
  } else if (ext === ".xlsx") {
    bundle[doc.slug] = { kind: "xlsx", sheets: parseXlsx(fs.readFileSync(absolutePath)) };
  } else {
    bundle[doc.slug] = { kind: "unsupported" };
  }
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `export const docsBundle = ${JSON.stringify(bundle, null, 2)} as const;\n`,
);

console.log(`Wrote docs bundle to ${outputPath}`);
