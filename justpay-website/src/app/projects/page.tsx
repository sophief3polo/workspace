const projectSummary = [
  { label: "Major projects", value: "6" },
  { label: "In execution", value: "4" },
  { label: "At risk", value: "2" },
];

const projects = [
  {
    name: "Australia major sponsor",
    owner: "Simon",
    progress: 42,
    phase: "Active pursuit",
    health: "Critical",
    target: "Secure a major underwriting sponsor for Australia.",
    detail:
      "This is the most important commercial priority. Without it, event underwriting risk stays too high.",
    next: ["Refine target account list", "Push senior outreach", "Track live objections and follow-ups"],
  },
  {
    name: "USA venue expansion",
    owner: "Simon",
    progress: 28,
    phase: "Discovery",
    health: "Important",
    target: "Find and qualify event sites for US expansion.",
    detail:
      "The upside is large, but venue access is still early-stage and needs disciplined qualification.",
    next: ["Build venue longlist", "Compare city fit", "Mark local blockers early"],
  },
  {
    name: "Private marquee sales system",
    owner: "Debbie",
    progress: 63,
    phase: "Buildout",
    health: "Strong",
    target: "Create a lower-friction system to convert marquee demand faster.",
    detail:
      "This directly supports premium revenue and helps move Debbie out of repetitive admin.",
    next: ["Centralise quote status", "Tighten follow-up flow", "Add buyer-ready info packs"],
  },
  {
    name: "Sponsor operations and renewals",
    owner: "Fran",
    progress: 56,
    phase: "Operational",
    health: "Steady",
    target: "Systemise sponsor onboarding, admin, and renewal visibility.",
    detail:
      "Good structure here protects sponsor experience and makes renewals easier to win.",
    next: ["Track sponsor deliverables", "Map renewal timings", "Surface admin gaps early"],
  },
  {
    name: "Mission Control tool stack",
    owner: "Sophie",
    progress: 34,
    phase: "Foundation",
    health: "Building",
    target: "Create one internal operating layer for projects, schedules, revenue, and custom tools.",
    detail:
      "This replaces scattered workflows with a cleaner command centre Simon can actually use.",
    next: ["Add projects board", "Add live data hooks", "Launch first working internal tools"],
  },
  {
    name: "Just Pay x Fiserv referral engine",
    owner: "Simon",
    progress: 31,
    phase: "Commercial setup",
    health: "Emerging",
    target: "Build a repeatable merchant referral flow that produces qualified leads for Fiserv.",
    detail:
      "The structure exists, but it needs clearer lead flow, tracking, and commercial rhythm.",
    next: ["Define lead capture path", "Track referral volume", "Measure conversion to opportunity"],
  },
];

function healthTone(health: string) {
  switch (health) {
    case "Critical":
      return "text-rose-300 bg-rose-400/10 border-rose-400/20";
    case "Important":
      return "text-amber-300 bg-amber-400/10 border-amber-400/20";
    case "Strong":
      return "text-emerald-300 bg-emerald-400/10 border-emerald-400/20";
    case "Steady":
      return "text-sky-300 bg-sky-400/10 border-sky-400/20";
    default:
      return "text-violet-300 bg-violet-400/10 border-violet-400/20";
  }
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#08090d] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#0d0f14] p-4 lg:flex">
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
            <a href="/projects" className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 text-white transition">
              <span>Projects</span>
              <span className="h-2 w-2 rounded-full bg-[#1db38b]" />
            </a>
            <a href="#" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Revenue</span>
            </a>
            <a href="#" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Operations</span>
            </a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#0b0d12] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Portfolio view
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Projects
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A live-looking view of Simon&apos;s major projects, with progress, ownership, and what matters next.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#aab4ff]">Major initiatives</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                        Every important workstream in one place.
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {projectSummary.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{item.label}</p>
                          <p className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {projects.map((project) => (
                      <article key={project.name} className="rounded-[24px] border border-white/8 bg-[#0f1218]/92 p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                              <span className={`rounded-full border px-2.5 py-1 text-[11px] ${healthTone(project.health)}`}>
                                {project.health}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-[#a7afbf]">
                              {project.owner} · {project.phase}
                            </p>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#98a2b3]">{project.detail}</p>
                          </div>
                          <div className="min-w-[180px] rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">Progress</p>
                            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{project.progress}%</p>
                          </div>
                        </div>

                        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#5e6ad2_0%,#8ea0ff_100%)]"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>

                        <div className="mt-5 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Target</p>
                            <p className="mt-3 text-sm leading-6 text-[#d6dbea]">{project.target}</p>
                          </div>
                          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Next moves</p>
                            <ul className="mt-3 space-y-2 text-sm text-[#d6dbea]">
                              {project.next.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1db38b]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Focus order</p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Australia major sponsor",
                      "USA venue expansion",
                      "Private marquee sales system",
                      "Mission Control tool stack",
                    ].map((item, index) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.05] text-sm text-[#c9d1e1]">
                            0{index + 1}
                          </span>
                          <p className="text-sm font-medium text-white">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      Progress is currently a strategic operating estimate, not yet pulled from a live backend.
                    </p>
                    <p>
                      This is enough to make the screen useful now, but the right next step is wiring these projects to real underlying data.
                    </p>
                    <p>
                      Best upgrade path: connect each project to tasks, owners, deadlines, and blockers so this becomes a real operating system.
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
