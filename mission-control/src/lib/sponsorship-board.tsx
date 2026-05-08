import Link from "next/link";
import * as XLSX from "xlsx";

export type SponsorRow = {
  slot: string;
  sponsor: string;
  deal: string;
  status: string;
  owner: string;
};

type EventSection = {
  event: string;
  rows: SponsorRow[];
};

type SectionSpec = {
  headerRow: number;
  rowStart: number;
  rowEnd: number;
  colStart: number;
};

type SponsorshipBoardProps = {
  title: string;
  description: string;
  activeNav: "teams" | "pourage" | "others";
  sourceSheetNameCandidates: string[];
  fallbackSections?: EventSection[];
};

const navItems = [
  { label: "Overview", href: "/", active: false },
  { label: "Ticketing", href: "/ticketing", active: false },
  { label: "Teams & Umpire", href: "/sponsorship-teams-umpire", key: "teams" },
  { label: "Pourage", href: "/sponsorship-pourage", key: "pourage" },
  { label: "Title & Others", href: "/sponsorship-others", key: "others" },
  { label: "Calendar", href: "/calendar", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Instagram", href: "/instagram", active: false },
  { label: "Memory", href: "/memory", active: false },
  { label: "Docs", href: "/docs", active: false },
  { label: "Team", href: "/team", active: false },
  { label: "Office", href: "/office", active: false },
] as const;

const sourceLink =
  "https://docs.google.com/spreadsheets/d/1RTDc3MLN4JuM1ODeL696T3Yp15irW81x/edit?usp=sharing&ouid=110701776464595426680&rtpof=true&sd=true";
const exportLink =
  "https://docs.google.com/spreadsheets/d/1RTDc3MLN4JuM1ODeL696T3Yp15irW81x/export?format=xlsx";

function buildSectionSpecs(maxHeaderRow = 160) {
  const specs: SectionSpec[] = [];

  for (let headerRow = 7; headerRow <= maxHeaderRow; headerRow += 19) {
    for (const colStart of [1, 7]) {
      specs.push({
        headerRow,
        rowStart: headerRow + 1,
        rowEnd: headerRow + 17,
        colStart,
      });
    }
  }

  return specs;
}

const fallbackEvents = [
  "Brisbane 2026",
  "Sydney 2026",
  "Melbourne 2027",
  "Christchurch 2027",
  "Auckland 2027",
];

const emptyFallbackSections: EventSection[] = fallbackEvents.map((event) => ({ event, rows: [] }));

const isConfirmed = (status: string) => status.trim().toUpperCase() === "CONFIRMED";
const isLeadRow = (slot: string) => slot.trim().toUpperCase().startsWith("LEAD");
const isBlankRow = (row: SponsorRow) => row.sponsor === "—" && row.deal === "—" && row.status === "---";
const getVisibleRows = (rows: SponsorRow[]) => rows.filter((row) => !(isLeadRow(row.slot) && isBlankRow(row)));

function normalizeText(value: unknown, fallback = "—") {
  const text = String(value ?? "").trim();
  return text || fallback;
}

function formatEventName(value: string) {
  const upper = value.trim().toUpperCase();
  const map: Record<string, string> = {
    "BRISBANE 2026": "Brisbane 2026",
    "MELB 2027": "Melbourne 2027",
    "SYDNEY 2026": "Sydney 2026",
    "CHRISTCHURCH 2027": "Christchurch 2027",
    "AUCKLAND 2027": "Auckland 2027",
  };

  return map[upper] ?? value;
}

function formatOwner(value: string) {
  const upper = value.trim().toUpperCase();
  const map: Record<string, string> = {
    DEB: "Deb",
    SAM: "Sam",
    SIMON: "Simon",
    SMON: "Simon",
  };

  return map[upper] ?? normalizeText(value);
}

function formatStatus(value: string) {
  const upper = value.trim().toUpperCase();

  if (upper === "CONFIRMED") return "Confirmed";
  if (upper === "ACTION REQUIRED") return "Action Required";
  if (upper === "PROPOSAL SENT") return "Proposal Sent";

  return normalizeText(value, "---");
}

function parseSection(rows: unknown[][], spec: SectionSpec): EventSection | null {
  const event = formatEventName(normalizeText(rows[spec.headerRow - 1]?.[spec.colStart], ""));
  if (!event) return null;

  const parsedRows: SponsorRow[] = [];

  for (let rowIndex = spec.rowStart; rowIndex <= spec.rowEnd; rowIndex += 1) {
    const row = rows[rowIndex - 1] ?? [];
    const slot = normalizeText(row[spec.colStart], "");
    if (!slot) continue;

    parsedRows.push({
      slot,
      sponsor: normalizeText(row[spec.colStart + 1]),
      deal: normalizeText(row[spec.colStart + 2]),
      status: formatStatus(normalizeText(row[spec.colStart + 3], "---")),
      owner: formatOwner(normalizeText(row[spec.colStart + 4])),
    });
  }

  return { event, rows: parsedRows };
}

function findSheetName(workbook: XLSX.WorkBook, candidates: string[]) {
  const normalizedCandidates = candidates.map((name) => name.trim().toUpperCase());
  return workbook.SheetNames.find((name) => normalizedCandidates.includes(name.trim().toUpperCase())) ?? null;
}

export async function loadSponsorshipSections(sheetNameCandidates: string[], fallbackSections = emptyFallbackSections) {
  try {
    const response = await fetch(exportLink, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch sponsorship sheet: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(Buffer.from(arrayBuffer), { type: "buffer" });
    const sheetName = findSheetName(workbook, sheetNameCandidates);
    if (!sheetName) {
      throw new Error(`Sheet not found: ${sheetNameCandidates.join(", ")}`);
    }

    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" }) as unknown[][];
    const parsedSections = buildSectionSpecs(rows.length + 5)
      .map((spec) => parseSection(rows, spec))
      .filter((section): section is EventSection => Boolean(section));

    const dedupedSections = parsedSections.filter(
      (section, index, allSections) => allSections.findIndex((candidate) => candidate.event === section.event) === index,
    );

    return dedupedSections.length ? dedupedSections : fallbackSections;
  } catch {
    return fallbackSections;
  }
}

export async function SponsorshipBoardPage({
  title,
  description,
  activeNav,
  sourceSheetNameCandidates,
  fallbackSections,
}: SponsorshipBoardProps) {
  const eventSections = await loadSponsorshipSections(sourceSheetNameCandidates, fallbackSections);
  const visibleSections = eventSections.map((section) => ({
    ...section,
    rows: getVisibleRows(section.rows),
  }));

  const allRows = eventSections.flatMap((section) => section.rows);
  const sponsorRows = allRows.filter((row) => !isLeadRow(row.slot));
  const leadRows = allRows.filter((row) => isLeadRow(row.slot));
  const confirmedCount = sponsorRows.filter((row) => isConfirmed(row.status)).length;
  const openCount = sponsorRows.length - confirmedCount;
  const activeLeadCount = leadRows.filter((row) => !isBlankRow(row)).length;

  return (
    <main className="min-h-screen bg-[#11141b] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#1c2230] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.05] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#B38E37] text-sm font-semibold text-white">
              MC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Urban Events internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            {navItems.map((item) => {
              const active = "key" in item ? item.key === activeNav : item.active;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                    active ? "bg-white/[0.09] text-white" : "hover:bg-white/[0.09] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {active ? <span className="h-2 w-2 rounded-full bg-[#B38E37]" /> : null}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(179,142,55,0.18),rgba(179,142,55,0.04))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#E3C774]">Sponsorship board</p>
            <p className="mt-2 text-sm font-medium text-white">Live sheet-driven tracking</p>
            <p className="mt-2 text-sm leading-6 text-[#b8c0cc]">
              Same Mission Control structure, just focused on a different sponsorship category.
            </p>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Sponsorship tracker
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">{description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.09]"
                >
                  Open source sheet
                </a>
                <Link
                  href="/"
                  className="rounded-2xl bg-[#B38E37] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#C7A24B]"
                >
                  Back to Mission Control
                </Link>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <Metric label="Events" value={String(visibleSections.length)} />
              <Metric label="Sponsor slots" value={String(sponsorRows.length)} />
              <Metric label="Confirmed" value={String(confirmedCount)} />
              <Metric label="Open" value={String(openCount)} />
              <Metric label="Active leads" value={String(activeLeadCount)} />
            </div>

            <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-3 text-sm text-[#d6dbea]">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <span className="font-medium text-white">Deal Key:</span>
                <span>$ = Cash</span>
                <span>C = Contra</span>
                <span>$ + C = Part cash, part contra</span>
              </div>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-2">
              {visibleSections.map((section) => (
                <section key={section.event} className="rounded-[24px] border border-white/8 bg-[#232b3a] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Event board</p>
                      <h2 className="mt-1 text-xl font-semibold text-white">{section.event}</h2>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#cdd4e2]">
                      {section.rows.filter((row) => isConfirmed(row.status)).length} confirmed
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[20px] border border-white/8">
                    <div className="grid grid-cols-[1fr_1.35fr_0.6fr_0.95fr_0.6fr] gap-3 border-b border-white/8 bg-white/[0.05] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#8f98aa]">
                      <span>Slot</span>
                      <span>Sponsor</span>
                      <span>Deal</span>
                      <span>Status</span>
                      <span>Owner</span>
                    </div>

                    <div>
                      {section.rows.length ? (
                        section.rows.map((row) => {
                          const confirmed = isConfirmed(row.status);
                          const tone = confirmed ? "text-emerald-300" : "text-rose-300";

                          return (
                            <div
                              key={`${section.event}-${row.slot}`}
                              className="grid grid-cols-[1fr_1.35fr_0.6fr_0.95fr_0.6fr] gap-3 border-b border-white/8 px-3 py-1.5 text-[13px] last:border-b-0"
                            >
                              <span className={`${tone} font-medium`}>{row.slot}</span>
                              <span className={tone}>{row.sponsor}</span>
                              <span className={tone}>{row.deal}</span>
                              <span className={`${tone} font-medium`}>{row.status}</span>
                              <span className={tone}>{row.owner}</span>
                            </div>
                          );
                        })
                      ) : (
                        <div className="px-3 py-4 text-sm text-[#98a2b3]">No rows available from this tab yet.</div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[112px] rounded-[14px] border border-[#B38E37]/50 bg-[linear-gradient(180deg,rgba(179,142,55,0.28),rgba(179,142,55,0.12))] px-2.5 py-2 shadow-[0_8px_24px_rgba(179,142,55,0.12)]">
      <p className="text-[9px] uppercase tracking-[0.18em] text-[#F0D58B]">{label}</p>
      <p className="mt-0.5 text-base font-semibold tracking-[-0.04em] text-white">{value}</p>
    </div>
  );
}
