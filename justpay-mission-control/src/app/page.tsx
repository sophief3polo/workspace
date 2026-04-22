import Link from "next/link";

const workstreams = [
  {
    name: "Merchant referral pipeline",
    owner: "Simon",
    status: "Live",
    value: "28 target accounts",
    detail: "Track referred merchants, stage progression, and commercial next actions.",
    href: "/projects?slice=referrals",
  },
  {
    name: "Fiserv partner operations",
    owner: "Sophie",
    status: "Active",
    value: "2-day SLA",
    detail: "Keep submissions, first-contact timing, and follow-up visibility tight.",
    href: "/calendar?slice=sla",
  },
  {
    name: "Lead conversion engine",
    owner: "Team",
    status: "Building",
    value: "Higher close rate",
    detail: "Improve referral quality, handoff clarity, and conversion tracking.",
    href: "/office?slice=conversion",
  },
];

const toolCards = [
  {
    title: "Referrals",
    eyebrow: "Pipeline",
    description: "Run merchant lead flow from prospect identification through Fiserv handoff.",
    bullets: ["Merchant pipeline", "Referral status", "Next action prompts"],
    href: "/projects?slice=referrals",
  },
  {
    title: "Partner ops",
    eyebrow: "Execution",
    description: "See SLA windows, submission state, and where partner momentum is slowing.",
    bullets: ["Submission tracking", "Response timing", "Escalation points"],
    href: "/calendar?slice=partner-ops",
  },
  {
    title: "Growth tools",
    eyebrow: "Build layer",
    description: "A home for the systems we build to generate and convert more merchant referrals.",
    bullets: ["Lead scoring", "Outreach tools", "Performance dashboards"],
    href: "/docs?slice=growth-tools",
  },
];

const activity = [
  {
    time: "Now",
    title: "Just Pay mission control created",
    detail: "New dedicated workspace for merchant referrals, partner ops, and conversion.",
  },
  {
    time: "Queue",
    title: "Referral pipeline structure defined",
    detail: "The next layer is merchant tracking, referral status, and live commercial follow-up.",
  },
  {
    time: "Next",
    title: "Partner SLA monitoring ready",
    detail: "We can track Fiserv first-contact timing and identify stalled referrals quickly.",
  },
];

const launchQueue = [
  {
    label: "Merchant referral CRM",
    href: "/projects?slice=crm",
  },
  {
    label: "Lead qualification workspace",
    href: "/projects?slice=qualification",
  },
  {
    label: "Partner SLA tracker",
    href: "/calendar?slice=sla-tracker",
  },
  {
    label: "Referral performance dashboard",
    href: "/docs?slice=performance",
  },
];

const navItems = [
  { label: "Overview", href: "/", active: true },
  { label: "Calendar", href: "/calendar", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "Memory", href: "/memory", active: false },
  { label: "Docs", href: "/docs", active: false },
  { label: "Team", href: "/team", active: false },
  { label: "Office", href: "/office", active: false },
  { label: "Pipeline", href: "/projects?slice=pipeline", active: false },
  { label: "Partner Ops", href: "/calendar?slice=ops", active: false },
  { label: "Tools", href: "/docs?slice=tools", active: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08110f] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#0b1512] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1db38b] text-sm font-semibold text-white">
              JP
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Just Pay Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Merchant growth internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                  item.active
                    ? "bg-white/[0.06] text-white"
                    : "hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.active ? <span className="h-2 w-2 rounded-full bg-[#1db38b]" /> : null}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(29,179,139,0.18),rgba(29,179,139,0.04))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#baf3e5]">Build queue</p>
            <p className="mt-2 text-sm font-medium text-white">Merchant systems go here.</p>
            <p className="mt-2 text-sm leading-6 text-[#b8c0cc]">
              This is the front door for Just Pay lead generation, partner execution, and conversion infrastructure.
            </p>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#0a1210] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Private workspace
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Just Pay Mission Control
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A clean operating layer for merchant referrals, Fiserv partner flow, and the systems that turn leads into revenue.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-[#c7cedb]">
                  <span className="text-[#98a2b3]">Environment</span>
                  <span className="ml-2 font-medium text-white">Just Pay shell</span>
                </div>
                <a
                  href="#tools"
                  className="rounded-2xl bg-[#33ddff] px-4 py-3 text-sm font-medium text-[#082032] transition hover:bg-[#1ec8ef]"
                >
                  Open tool layer
                </a>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.55fr_0.95fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(51,221,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#9cf0d7]">Overview</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                        Built to move merchant referrals faster, not just store data.
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:flex">
                      <Metric label="Open streams" value="6" />
                      <Metric label="Priority tools" value="4" />
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-3">
                    {workstreams.map((stream) => (
                      <Link
                        key={stream.name}
                        href={stream.href}
                        className="rounded-[24px] border border-white/8 bg-[#0f1715]/90 p-4 transition hover:border-[#1db38b]/60 hover:bg-[#121d1a]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium text-white">{stream.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#7f8797]">
                              {stream.owner}
                            </p>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#d6dbea]">
                            {stream.status}
                          </span>
                        </div>
                        <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{stream.value}</p>
                        <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{stream.detail}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-[28px] border border-white/8 bg-[#0f1715] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Activity</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">Live pulse</h2>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    Synced
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  {activity.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <span className="text-xs text-[#7f8797]">{item.time}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#98a2b3]">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div id="tools" className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1.35fr]">
              <section className="rounded-[28px] border border-white/8 bg-[#0f1715] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Launchpad</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">What we can build into this next</h2>
                <div className="mt-6 space-y-3">
                  {launchQueue.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 transition hover:border-[#1db38b]/60 hover:bg-[#121d1a]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.05] text-sm text-[#c9d1e1]">
                          0{index + 1}
                        </span>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Queued</span>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="grid gap-5 md:grid-cols-3">
                {toolCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="rounded-[28px] border border-white/8 bg-[#0f1715] p-6 transition hover:border-[#1db38b]/60 hover:bg-[#121d1a]"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">{card.eyebrow}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{card.description}</p>
                    <ul className="mt-6 space-y-2 text-sm text-[#d4dae6]">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1db38b]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{label}</p>
      <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{value}</p>
    </div>
  );
}
