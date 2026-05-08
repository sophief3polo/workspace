import Link from "next/link";
import { loadTicketingPageData } from "@/lib/ticketing-data";

export const dynamic = "force-dynamic";

const navItems = [
  { label: "Overview", href: "/", active: false },
  { label: "Ticketing", href: "/ticketing", active: true },
  { label: "Teams & Umpire", href: "/sponsorship-teams-umpire", active: false },
  { label: "Pourage", href: "/sponsorship-pourage", active: false },
  { label: "Title & Others", href: "/sponsorship-others", active: false },
  { label: "Calendar", href: "/calendar", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Instagram", href: "/instagram", active: false },
  { label: "Memory", href: "/memory", active: false },
  { label: "Docs", href: "/docs", active: false },
  { label: "Team", href: "/team", active: false },
  { label: "Office", href: "/office", active: false },
];

export default async function TicketingPage() {
  const { scoreboard, eventSheetLinks, cityCards, sourceMode, sourceNote } = await loadTicketingPageData();
  const isLive = sourceMode === "live";

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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                  item.active ? "bg-white/[0.09] text-white" : "hover:bg-white/[0.09] hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.active ? <span className="h-2 w-2 rounded-full bg-[#B38E37]" /> : null}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(179,142,55,0.18),rgba(179,142,55,0.04))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#E3C774]">Reporting layer</p>
            <p className="mt-2 text-sm font-medium text-white">Premium ticketing view</p>
            <p className="mt-2 text-sm leading-6 text-[#b8c0cc]">
              Built for fast commercial readouts without sending people into raw spreadsheets.
            </p>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Ticketing dashboard
                  <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-emerald-400" : "bg-amber-400"}`} />
                </div>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  2026-27 February Polo & Urban Polo Season Live Ticket Updates
                </h1>
                {sourceNote ? <p className="mt-3 max-w-4xl text-sm text-[#b8c0cc]">{sourceNote}</p> : null}
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://docs.google.com/spreadsheets/d/14ejB2pZZPs8gDt4qR9PZkG2prQg2DprfqdxiAkkpeF8/edit?gid=1842987567#gid=1842987567"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.09]"
                  >
                    RAW Data : Ticket Updates 2026-7 Season
                  </a>
                  <Link
                    href="/"
                    className="rounded-2xl bg-[#B38E37] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#C7A24B]"
                  >
                    Back to Mission Control
                  </Link>
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#7f8797]">Ticketing & Scans Sheets</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {eventSheetLinks.map((sheet) => (
                      <a
                        key={sheet.label}
                        href={sheet.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#d6dbea] transition hover:bg-white/[0.09] hover:text-white"
                      >
                        {sheet.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {scoreboard.map((item) => (
                <Metric key={item.label} label={item.label} value={item.value} />
              ))}
            </section>

            <section className="mt-5 grid gap-5 xl:grid-cols-2">
              {cityCards.map((card) => (
                <article
                  key={card.city}
                  className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">
                        {card.season} • {card.city}
                      </p>
                      <div className="mt-3 rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-4 text-xs text-[#98a2b3]">
                        <span className="text-white">{card.date}</span>
                        <span className="mx-2 text-[#B38E37]">•</span>
                        {card.venue}
                      </div>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#d6dbea]">
                      {isLive ? "Live" : "Snapshot"}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <Stat label="Tickets sold" value={card.ticketsSold} />
                    <Stat label="Face value" value={card.faceValue} />
                    <Stat label="On hold" value={card.holdQty} />
                    <Stat label="Hold value" value={card.holdValue} />
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.06] p-4">
                    <div className="grid gap-3">
                      {card.lines.map((line) => (
                        <div key={`${card.city}-${line.label}`} className="rounded-2xl border border-white/8 bg-white/[0.06] px-4 py-4">
                          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                              <p className="text-xs font-semibold text-white">{line.label}</p>
                              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#7f8797]">{line.note}</p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                              <MiniStat label="Sold" value={line.sold} />
                              <MiniStat label="Face value" value={line.faceValue} />
                              <MiniStat label="On hold" value={line.holdQty} />
                              <MiniStat label="Hold value" value={line.holdValue} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {card.previousEvent ? (
                    <div className="mt-4 rounded-2xl border border-[#B38E37]/25 bg-[#11141b]/35 p-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#D6B35C]">{card.previousEvent.label}</p>
                      <div className="mt-3 space-y-2 text-sm text-[#d7deea]">
                        <p>Sold: {card.previousEvent.sold}</p>
                        <p>Scanned: {card.previousEvent.scanned}</p>
                        <p>Attendance: {card.previousEvent.showUpRate}</p>
                        {card.previousEvent.lines.map((line) => (
                          <p key={`${card.city}-${card.previousEvent?.label}-${line.label}`}>
                            {line.label}: {line.sold} sold · {line.scanned} scanned · {line.showUpRate}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[#7f8797]">
                    Last updated: <span className="text-[#d7deea]">{card.lastUpdated}</span>
                  </p>
                </article>
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#B38E37]/30 bg-white/[0.09] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#D6B35C]">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#E3C774]">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#B38E37]/30 bg-white/[0.05] px-4 py-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#D6B35C]">{label}</p>
      <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#E3C774]">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[120px] rounded-xl border border-white/8 bg-[#11141b]/40 px-3 py-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#7f8797]">{label}</p>
      <p className="mt-1.5 text-xs font-semibold text-white">{value}</p>
    </div>
  );
}
