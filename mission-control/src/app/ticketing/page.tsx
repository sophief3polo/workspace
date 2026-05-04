import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/", active: false },
  { label: "Ticketing", href: "/ticketing", active: true },
  { label: "Calendar", href: "/calendar", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Instagram", href: "/instagram", active: false },
  { label: "Memory", href: "/memory", active: false },
  { label: "Docs", href: "/docs", active: false },
  { label: "Team", href: "/team", active: false },
  { label: "Office", href: "/office", active: false },
];

const cityCards = [
  {
    season: "2026",
    city: "Sydney",
    date: "14 Nov 2026",
    venue: "Mission Field, Centennial Parklands",
    ticketsSold: 31,
    faceValue: "$9,070.20",
    headline: "Early Sydney momentum is real.",
    detail: "Sportscraft Polo Lounge and VIP are already moving. Private marquees currently sit in holds rather than sold revenue.",
  },
  {
    season: "2026",
    city: "Brisbane",
    date: "31 Oct 2026",
    venue: "Dorrington Park (Kallindarbin), Ashgrove",
    ticketsSold: 0,
    faceValue: "$0",
    headline: "Set up and ready to track.",
    detail: "Brisbane is wired in with all four product lines so the board is ready as soon as sales start landing.",
  },
  {
    season: "2027",
    city: "Christchurch",
    date: "20 Feb 2027",
    venue: "Hagley Park, Christchurch",
    ticketsSold: 123,
    faceValue: "$56,674.00",
    headline: "Christchurch is already carrying weight.",
    detail: "Private marquees are doing the heavy lifting, with VIP also showing strong early traction.",
  },
  {
    season: "2027",
    city: "Auckland",
    date: "6 Mar 2027",
    venue: "Lexus Urban Polo - Auckland",
    ticketsSold: 265,
    faceValue: "$126,201.00",
    headline: "Auckland is the strongest board right now.",
    detail: "Private marquees are dominating revenue, with VIP and lawn sales adding early proof of demand.",
  },
];

const eventRows = [
  ["2026", "Sydney", "Heineken Polo Lawn", 13, "$1,320.00", "4,987", "Live"],
  ["2026", "Sydney", "VIP Champagne Terrace", 12, "$3,228.00", "140", "Live"],
  ["2026", "Sydney", "Private Marquees", 0, "$0.00", "Holds: 4 orders / 200 tickets", "Live"],
  ["2026", "Sydney", "Sportscraft Polo Lounge", 6, "$4,522.20", "144", "Live"],
  ["2026", "Brisbane", "Heineken Polo Lawn", 0, "$0.00", "5,000", "Live"],
  ["2026", "Brisbane", "VIP Champagne Terrace", 0, "$0.00", "140", "Live"],
  ["2026", "Brisbane", "Private Marquees", 0, "$0.00", "2,000", "Live"],
  ["2026", "Brisbane", "Sportscraft Polo Lounge", 0, "$0.00", "150", "Live"],
  ["2027", "Christchurch", "Peroni Polo Lawn GA", 3, "$207.00", "3,997", "Live"],
  ["2027", "Christchurch", "VIP Champagne Terrace", 20, "$5,460.00", "2,080", "Live"],
  ["2027", "Christchurch", "Private Marquees", 100, "$51,007.00", "4,600", "Live"],
  ["2027", "Christchurch", "Urban Polo Lounge", 0, "$0.00", "200", "Live"],
  ["2027", "Auckland", "Peroni Polo Lawn GA", 5, "$276.00", "3,995", "Live"],
  ["2027", "Auckland", "VIP Champagne Terrace", 10, "$3,360.00", "1,090", "Live"],
  ["2027", "Auckland", "Private Marquees", 250, "$122,565.00", "200", "Live"],
  ["2027", "Auckland", "Urban Polo Lounge", 0, "$0.00", "200", "Live"],
] as const;

const scoreboard = [
  { label: "Cities live", value: "4" },
  { label: "Event lines", value: "16" },
  { label: "Tickets sold", value: "419" },
  { label: "Face value tracked", value: "$191,945.20" },
];

const eventSheetLinks = [
  {
    label: "Sydney",
    href: "https://docs.google.com/spreadsheets/d/1Gkl14hPWw1IXaXk3At-1gzNXeajqI7OBVdobOOwoXBo/edit",
  },
  {
    label: "Brisbane",
    href: "https://docs.google.com/spreadsheets/d/1HU5TZMOo85phVNvvkvcesYRQ9ogqHKJsL1s-ItXiqRc/edit",
  },
  {
    label: "Christchurch",
    href: "https://docs.google.com/spreadsheets/d/1LUl31_WAyX0XAoh691AOrZs-g6jCLuKX2cjLCES4eIE/edit",
  },
  {
    label: "Auckland",
    href: "https://docs.google.com/spreadsheets/d/1CYKjQjuIH8X28w6uNI9xkPMq245rFgkq5IjjcjuiJbs/edit",
  },
] as const;

export default function TicketingPage() {
  return (
    <main className="min-h-screen bg-[#11141b] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#1c2230] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.05] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5e6ad2] text-sm font-semibold text-white">
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
                {item.active ? <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" /> : null}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(94,106,210,0.18),rgba(94,106,210,0.04))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c7d2fe]">Reporting layer</p>
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
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Premium event sales, cleaned up.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A polished operating view across Sydney, Brisbane, Christchurch, and Auckland, built from the live ticketing tracker.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://docs.google.com/spreadsheets/d/14ejB2pZZPs8gDt4qR9PZkG2prQg2DprfqdxiAkkpeF8/edit"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.09]"
                  >
                    Open raw sheet
                  </a>
                  <Link
                    href="/"
                    className="rounded-2xl bg-[#5e6ad2] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#6a76de]"
                  >
                    Back to Mission Control
                  </Link>
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#7f8797]">Event Ticketing Summaries</p>
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
            <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#aab4ff]">Snapshot</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                    The cities are no longer buried in tabs.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6cede]">
                    This view turns the Google Sheet into something board-ready: cleaner signal, faster readout, and much better optics.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {scoreboard.map((item) => (
                    <Metric key={item.label} label={item.label} value={item.value} />
                  ))}
                </div>
              </div>
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
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{card.headline}</h3>
                    </div>
                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#d6dbea]">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Stat label="Tickets sold" value={String(card.ticketsSold)} />
                    <Stat label="Face value" value={card.faceValue} />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#c6cede]">{card.detail}</p>
                  <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-4 text-sm text-[#98a2b3]">
                    <span className="text-white">{card.date}</span>
                    <span className="mx-2 text-[#5e6ad2]">•</span>
                    {card.venue}
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-5 rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Event lines</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">All tracked categories in one board</h2>
                </div>
                <p className="text-sm text-[#98a2b3]">Source labels are normalised where needed so Debbie sees clean commercial names.</p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-[0.18em] text-[#7f8797]">
                      <th className="px-4">Season</th>
                      <th className="px-4">City</th>
                      <th className="px-4">Category</th>
                      <th className="px-4">Sold</th>
                      <th className="px-4">Face value</th>
                      <th className="px-4">Available / note</th>
                      <th className="px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventRows.map((row) => (
                      <tr key={`${row[0]}-${row[1]}-${row[2]}`} className="rounded-2xl bg-white/[0.09] text-[#d7deea]">
                        <td className="rounded-l-2xl px-4 py-4 text-white">{row[0]}</td>
                        <td className="px-4 py-4">{row[1]}</td>
                        <td className="px-4 py-4">{row[2]}</td>
                        <td className="px-4 py-4 text-white">{row[3]}</td>
                        <td className="px-4 py-4">{row[4]}</td>
                        <td className="px-4 py-4">{row[5]}</td>
                        <td className="rounded-r-2xl px-4 py-4">
                          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                            {row[6]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8797]">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
    </div>
  );
}
