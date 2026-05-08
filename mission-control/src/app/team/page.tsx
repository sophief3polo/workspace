const missionStatement =
  "Help Simon Wilson and Urban Events move faster on sponsorship, marquee sales, premium positioning, and the systems that turn interest into revenue.";

const teamMembers = [
  {
    name: "Simon Wilson",
    role: "Managing Director",
    type: "Human operator",
    device: "Slack direct thread",
    status: "Primary principal",
    detail:
      "Commercial lead for Urban Events, focused on revenue, sponsorship, venues, and premium brand direction.",
  },
  {
    name: "Sophie",
    role: "Main agent",
    type: "Primary AI operator",
    device: "Sophie’s Mac mini",
    status: "Live",
    detail:
      "Main mission control agent, built to support sponsorship, systems, operational leverage, and commercial follow-through.",
  },
];

const subagentState = {
  count: 0,
  status: "No active subagents",
  detail:
    "There are currently no active or recent subagents attached to this thread, so this section is ready for future specialist agents as they are spawned.",
};

const runtimeCards = [
  { label: "Main runtime", value: "agent=main" },
  { label: "Primary host", value: "Sophie’s Mac mini" },
  { label: "Current surface", value: "Slack DM" },
  { label: "Subagents live", value: "0" },
];

export default function TeamPage() {
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
            <a href="/memory" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Memory</span>
            </a>
            <a href="/docs" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Docs</span>
            </a>
            <a href="/team" className="flex items-center justify-between rounded-xl bg-white/[0.09] px-3 py-2.5 text-white transition">
              <span>Team</span>
              <span className="h-2 w-2 rounded-full bg-[#B38E37]" />
            </a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Team view
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Team
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  Who is in the operating loop, what each member does, and where the active runtime is sitting.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(179,142,55,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="rounded-[24px] border border-white/8 bg-[#232b3a]/92 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Mission statement</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                    Keep the commercial engine moving.
                  </h2>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-[#d6dbea]">{missionStatement}</p>
                </div>

                <div className="mt-5 grid gap-4">
                  {teamMembers.map((member) => (
                    <article key={member.name} className="rounded-[24px] border border-white/8 bg-[#232b3a]/92 p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                            <span className="rounded-full border border-white/8 bg-white/[0.05] px-2.5 py-1 text-[11px] text-[#d6dbea]">
                              {member.type}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-[#a7afbf]">{member.role}</p>
                        </div>
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                          {member.status}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Running on</p>
                          <p className="mt-3 text-sm leading-6 text-[#d6dbea]">{member.device}</p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Role detail</p>
                          <p className="mt-3 text-sm leading-6 text-[#d6dbea]">{member.detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Runtime</p>
                  <div className="mt-5 grid gap-3">
                    {runtimeCards.map((card) => (
                      <div key={card.label} className="rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{card.label}</p>
                        <p className="mt-2 text-base font-medium text-white">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Subagents</p>
                  <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">{subagentState.status}</p>
                      <span className="rounded-full border border-white/8 bg-white/[0.05] px-2.5 py-1 text-[11px] text-[#d6dbea]">
                        {subagentState.count}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{subagentState.detail}</p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      This screen reflects the actual visible runtime state right now, not an imagined multi-agent org chart.
                    </p>
                    <p>
                      When subagents are spawned later, this is the right place to surface their names, specialist roles, and host context.
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
