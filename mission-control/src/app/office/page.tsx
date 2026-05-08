const desks = [
  {
    name: "Sophie",
    role: "Main agent",
    state: "Working",
    device: "Sophie’s Mac mini",
    x: "left-10",
    y: "top-12",
    accent: "#7c8cff",
    note: "Building, organising, and shipping from the main runtime.",
    occupied: true,
  },
  {
    name: "Subagent desk 01",
    role: "Specialist agent slot",
    state: "Empty",
    device: "No active runtime",
    x: "right-28",
    y: "top-16",
    accent: "#4b5563",
    note: "Ready for a research, coding, or analysis subagent when one is spawned.",
    occupied: false,
  },
  {
    name: "Subagent desk 02",
    role: "Specialist agent slot",
    state: "Empty",
    device: "No active runtime",
    x: "left-20",
    y: "bottom-20",
    accent: "#4b5563",
    note: "Will light up when another specialist agent joins the floor.",
    occupied: false,
  },
  {
    name: "Subagent desk 03",
    role: "Specialist agent slot",
    state: "Empty",
    device: "No active runtime",
    x: "right-18",
    y: "bottom-18",
    accent: "#4b5563",
    note: "Open desk for future multi-agent work.",
    occupied: false,
  },
];

const workItems = [
  "Mission control buildout",
  "Project tracking",
  "Memory and docs visibility",
  "Commercial systems support",
];

export default function OfficePage() {
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
            <a href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Overview</span></a>
            <a href="/calendar" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Calendar</span></a>
            <a href="/projects" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Projects</span></a>
            <a href="/memory" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Memory</span></a>
            <a href="/docs" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Docs</span></a>
            <a href="/team" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white"><span>Team</span></a>
            <a href="/office" className="flex items-center justify-between rounded-xl bg-white/[0.09] px-3 py-2.5 text-white transition"><span>Office</span><span className="h-2 w-2 rounded-full bg-[#B38E37]" /></a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Pixel operations room
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Office
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A 2D pixel-art floor showing who is at a desk and who is currently active.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.28fr_0.72fr]">
              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-5">
                <div className="rounded-[24px] border border-white/8 bg-[#171a22] p-4">
                  <div className="relative h-[620px] overflow-hidden rounded-[20px] border-4 border-[#2c3242] bg-[linear-gradient(180deg,#2b3040_0%,#252a38_100%)]">
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

                    <div className="absolute left-1/2 top-0 h-full w-[10px] -translate-x-1/2 bg-[#202533]" />
                    <div className="absolute left-0 top-1/2 h-[10px] w-full -translate-y-1/2 bg-[#202533]" />

                    {desks.map((desk) => (
                      <div key={desk.name} className={`absolute ${desk.x} ${desk.y} w-[220px]`}>
                        <div className="relative">
                          <div className="absolute left-6 top-6 h-20 w-28 border-4 border-[#11151d] bg-[#7b5b3d] shadow-[0_6px_0_#4a3523]" />
                          <div className="absolute left-2 top-16 h-8 w-12 border-4 border-[#11151d] bg-[#6b7280]" />
                          <div className="absolute left-8 top-2 h-10 w-20 border-4 border-[#11151d] bg-[#232938]" />
                          <div className="absolute left-14 top-8 h-2 w-8 bg-[#8bd3ff]" />

                          {desk.occupied ? (
                            <div className="absolute left-10 top-20">
                              <div className="relative h-16 w-12">
                                <div className="absolute left-2 top-0 h-6 w-6 border-4 border-[#11151d] bg-[#f2caa0]" />
                                <div className="absolute left-0 top-5 h-7 w-10 border-4 border-[#11151d] bg-[#B38E37]" />
                                <div className="absolute left-0 top-10 h-5 w-4 border-4 border-[#11151d] bg-[#0f172a]" />
                                <div className="absolute left-6 top-10 h-5 w-4 border-4 border-[#11151d] bg-[#0f172a]" />
                              </div>
                            </div>
                          ) : (
                            <div className="absolute left-10 top-22 h-10 w-14 border-4 border-dashed border-[#495064] bg-[#2a3040]" />
                          )}
                        </div>

                        <div className="mt-32 rounded-2xl border border-white/8 bg-[#0d1016]/90 p-3">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-medium text-white">{desk.name}</p>
                            <span
                              className={`rounded-full border px-2.5 py-1 text-[11px] ${desk.occupied ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-white/8 bg-white/[0.05] text-[#b3bbca]"}`}
                            >
                              {desk.state}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-[#8f98a8]">{desk.role}</p>
                          <p className="mt-3 text-xs text-[#cfd6e4]">{desk.device}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Office status</p>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Active workers", "1"],
                      ["Open desks", "3"],
                      ["Subagents live", "0"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{label}</p>
                        <p className="mt-2 text-base font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Current work</p>
                  <ul className="mt-5 space-y-2 text-sm text-[#d6dbea]">
                    {workItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B38E37]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      This office is grounded in the actual current runtime state. Right now only the main agent is at a desk.
                    </p>
                    <p>
                      The empty desks are intentional. They are placeholders for subagents that can appear once specialist agents are spawned.
                    </p>
                    <p>
                      Best next upgrade: animate desk occupancy and have subagents automatically claim desks in real time.
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
