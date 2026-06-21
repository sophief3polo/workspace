import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const sheetIds = [
  "1Gkl14hPWw1IXaXk3At-1gzNXeajqI7OBVdobOOwoXBo",
  "1HU5TZMOo85phVNvvkvcesYRQ9ogqHKJsL1s-ItXiqRc",
  "1LUl31_WAyX0XAoh691AOrZs-g6jCLuKX2cjLCES4eIE",
  "1CYKjQjuIH8X28w6uNI9xkPMq245rFgkq5IjjcjuiJbs",
];

function loadRange(spreadsheetId) {
  const stdout = execFileSync(
    "gws",
    [
      "sheets",
      "spreadsheets",
      "values",
      "batchGet",
      "--params",
      JSON.stringify({
        spreadsheetId,
        ranges: ["Summary!A1:F20"],
      }),
      "--format",
      "json",
    ],
    {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  const payload = JSON.parse(stdout);
  return payload.valueRanges?.[0]?.values ?? [];
}

function buildSnapshot() {
  const city_summaries = Object.fromEntries(
    sheetIds.map((sheetId) => [sheetId, loadRange(sheetId)]),
  );

  return { city_summaries };
}

function writeSnapshot(snapshot) {
  const targets = [
    path.join(projectRoot, "src/lib/ticketing-sheet-updates.json"),
    path.resolve(projectRoot, "../ticketing_sheet_updates.json"),
  ];

  const formatted = `${JSON.stringify(snapshot, null, 2)}\n`;

  for (const target of targets) {
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, formatted, "utf8");
  }
}

if (process.env.VERCEL === "1") {
  console.log("Skipping ticketing sheet sync on Vercel build; using committed snapshot.");
  process.exit(0);
}

try {
  const snapshot = buildSnapshot();
  writeSnapshot(snapshot);
  console.log("Synced Mission Control ticketing sheet snapshot from Google Sheets.");
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(`Ticketing sheet sync skipped: ${message}`);
}
