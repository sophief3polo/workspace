const longTermSections = [
  {
    title: "Just Pay and Fiserv partnership model",
    points: [
      "Just Pay operates as a reseller through a Fiserv Referral Partnership.",
      "Just Pay identifies and submits merchant leads, then Fiserv's sales team handles product fit, paperwork, and conversion.",
      "Revenue only lands when a referred merchant actually buys a Fiserv product or service.",
    ],
  },
  {
    title: "Operating rules",
    points: [
      "Fiserv has a two-business-day SLA for first merchant contact after referral submission.",
      "Fiserv copies partners into shared merchant communication and provides status updates through the connection cycle.",
      "The commercial weakness is obvious: if lead quality and tracking are messy, the model underperforms fast.",
    ],
  },
  {
    title: "Lead flow and conversion priorities",
    points: [
      "This business needs repeatable lead generation, not random one-off referrals.",
      "The most important things to track are merchant source, referral date, first contact, status, product interest, and conversion outcome.",
      "The mission control should eventually show referral volume, conversion rate, stalled merchants, and partner follow-up risk.",
    ],
  },
  {
    title: "Submission path",
    points: [
      "Lead submission currently goes through the dedicated Fiserv partner referral form for Just Pay.",
      "The canonical submission URL is https://merchants.fiserv.com/en-au/lp/partner-referral/?partner_id=JustPay.",
      "Any future tooling should reduce friction before that form and preserve clean handoff context.",
    ],
  },
];

const dailyMemories = [
  {
    day: "2026-04-20",
    title: "Just Pay x Fiserv commercial context retained",
    summary:
      "Long-term commercial structure captured so the Just Pay mission control can be built around how the referral model actually works.",
    entries: [
      "Just Pay is paid only on successful merchant purchases, not on referral submission.",
      "Fiserv owns downstream sales motion, onboarding, credit assessment, and support.",
      "The real operational job for Just Pay is finding qualified merchants and keeping referral flow visible.",
      "A strong mission control for this business should expose pipeline, conversion, and SLA risk clearly.",
    ],
  },
];

const memoryStats = [
  { label: "Daily memory files", value: "1" },
  { label: "Long-term sections", value: "4" },
  { label: "Stored focus", value: "Referral model" },
];

export default function MemoryPage() {
  return (
    <main className="min-h-screen bg-[#08110f] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#0b1512] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1db38b] text-sm font-semibold text-white">
              MC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Just Pay internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            <a href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Overview</span>
            </a>
            <a href="/calendar" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Calendar</span>
            </a>
            <a href="/projects" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Projects</span>
            </a>
            <a href="/memory" className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 text-white transition">
              <span>Memory</span>
              <span className="h-2 w-2 rounded-full bg-[#1db38b]" />
            </a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#0a1210] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Memory view
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Just Pay memory
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  The retained operating memory for Just Pay, focused on the Fiserv referral model, lead flow, and where commercial execution can break.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(29,179,139,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#9cf0d7]">Daily memory</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                        Commercial memory organised by day.
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {memoryStats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{item.label}</p>
                          <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {dailyMemories.map((memory) => (
                      <article key={memory.day} className="rounded-[24px] border border-white/8 bg-[#0f1715]/92 p-5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">{memory.day}</p>
                            <h3 className="mt-2 text-lg font-semibold text-white">{memory.title}</h3>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-[#d6dbea]">
                            Daily file
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[#98a2b3]">{memory.summary}</p>
                        <ul className="mt-5 space-y-2 text-sm text-[#d6dbea]">
                          {memory.entries.map((entry) => (
                            <li key={entry} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1db38b]" />
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
                <div className="rounded-[28px] border border-white/8 bg-[#0f1715] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Long-term memory</p>
                  <div className="mt-5 space-y-4">
                    {longTermSections.map((section) => (
                      <article key={section.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                        <h3 className="text-sm font-medium text-white">{section.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-[#d6dbea]">
                          {section.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1db38b]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#0f1715] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      This screen is now the right home for Just Pay x Fiserv retained context, not the F3Polo mission control.
                    </p>
                    <p>
                      The point is not just recall. It is making the referral business easier to operate, easier to track, and harder to let drift.
                    </p>
                    <p>
                      Best next upgrade: make this page read directly from Just Pay-specific memory sources instead of a coded snapshot.
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
