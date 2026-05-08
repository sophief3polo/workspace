const longTermSections = [
  {
    title: "Simon Wilson and Urban Events context",
    points: [
      "Urban Events runs premium polo brands across New Zealand and Australia, with US expansion ambition.",
      "Core revenue comes from sponsorship, private marquees, VIP, and then general admission.",
      "The most important immediate strategic risk is not securing a major sponsor in Australia.",
    ],
  },
  {
    title: "Commercial model and priorities",
    points: [
      "Sponsorship is the best-margin line and underwrites event economics.",
      "Simon cares most about revenue, sponsorship, and venues.",
      "The biggest current opportunity is strong Australian sponsorship plus six US venues.",
    ],
  },
  {
    title: "Debbie operating preferences and judgments",
    points: [
      "Debbie wants less admin, more systems, and more time spent on outreach and sales.",
      "She wants deployment executed without unnecessary permission-seeking when it is the obvious next step.",
      "She values brand protection, premium positioning, and review of drafted emails and reports before use.",
    ],
  },

];

const dailyMemories = [
  {
    day: "2026-04-20",
    title: "Canonical business context interview with Debbie",
    summary:
      "Deep operating and strategic context captured for the events business, Debbie's role, growth goals, bottlenecks, and execution preferences.",
    entries: [
      "Debbie handles marquee sales, customer liaison, ticketing admin, invoicing, sponsorship admin, and supplier coordination.",
      "The business wants stronger systems across enquiries, bookings, invoicing, sponsor renewals, and supplier sourcing.",
      "Next 90-day priorities include sponsor renewals, contract drafting, sponsor onboarding assets, private marquee sales, and reducing Debbie's admin burden.",
      "Debbie explicitly asked for this interview to be saved to long-term memory.",
      "Operating preference update: if deployment is the obvious next action, just do it.",
    ],
  },
];

const memoryStats = [
  { label: "Daily memory files", value: "1" },
  { label: "Long-term sections", value: "3" },
  { label: "Stored focus", value: "Business-heavy" },
];

export default function MemoryPage() {
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
            <a href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Overview</span>
            </a>
            <a href="/calendar" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Calendar</span>
            </a>
            <a href="/projects" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Projects</span>
            </a>
            <a href="/memory" className="flex items-center justify-between rounded-xl bg-white/[0.09] px-3 py-2.5 text-white transition">
              <span>Memory</span>
              <span className="h-2 w-2 rounded-full bg-[#B38E37]" />
            </a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Memory view
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Memory
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A readable view of stored day-by-day memory plus the most important long-term retained context.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(179,142,55,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#D6B35C]">Daily memory</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                        Memory entries organised by day.
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {memoryStats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-3">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{item.label}</p>
                          <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {dailyMemories.map((memory) => (
                      <article key={memory.day} className="rounded-[24px] border border-white/8 bg-[#232b3a]/92 p-5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">{memory.day}</p>
                            <h3 className="mt-2 text-lg font-semibold text-white">{memory.title}</h3>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-xs text-[#d6dbea]">
                            Daily file
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[#98a2b3]">{memory.summary}</p>
                        <ul className="mt-5 space-y-2 text-sm text-[#d6dbea]">
                          {memory.entries.map((entry) => (
                            <li key={entry} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B38E37]" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Long-term memory</p>
                  <div className="mt-5 space-y-4">
                    {longTermSections.map((section) => (
                      <article key={section.title} className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                        <h3 className="text-sm font-medium text-white">{section.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-[#d6dbea]">
                          {section.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B38E37]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      This screen is built from the actual memory files currently stored in the workspace.
                    </p>
                    <p>
                      Right now there is one dated daily memory file and one long-term memory file with curated strategic context.
                    </p>
                    <p>
                      Best next upgrade: render the files dynamically so new memory entries appear automatically without needing a code update.
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
