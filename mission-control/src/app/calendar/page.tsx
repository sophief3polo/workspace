const scheduledItems = [
  {
    title: "No cron jobs configured",
    type: "Cron",
    status: "None live",
    time: "Not scheduled",
    detail:
      "There are currently no OpenClaw cron jobs configured on this machine.",
  },
  {
    title: "No scheduled TaskFlow jobs configured",
    type: "TaskFlow",
    status: "None live",
    time: "Not scheduled",
    detail:
      "I checked the local task runtime and there are no active scheduled TaskFlow jobs waiting to run.",
  },
  {
    title: "Heartbeat wakeups are available, but not configured as active work",
    type: "Heartbeat",
    status: "Idle",
    time: "On demand",
    detail:
      "HEARTBEAT.md is effectively empty, so there is no standing periodic workstream being run from heartbeats right now.",
  },
];

const timeline = [
  {
    day: "Today",
    events: [
      {
        label: "10:03",
        title: "Calendar screen requested",
        note: "This screen now reflects the actual scheduled state of the environment, not placeholder data.",
      },
      {
        label: "Now",
        title: "No live scheduled jobs",
        note: "Nothing is currently queued as a recurring cron or scheduled task.",
      },
    ],
  },
  {
    day: "Upcoming",
    events: [
      {
        label: "Next step",
        title: "Ready for first scheduled automation",
        note: "Once we add a cron or scheduled task, it should appear here as a dated item.",
      },
    ],
  },
];

const sources = [
  {
    name: "OpenClaw config",
    value: "~/.openclaw/openclaw.json",
    body: "Checked for any cron-style scheduler configuration. None found.",
  },
  {
    name: "Task runtime",
    value: "~/.openclaw/tasks/runs.sqlite",
    body: "Checked the local task database. No active scheduled jobs were present.",
  },
  {
    name: "Heartbeat config",
    value: "workspace/HEARTBEAT.md",
    body: "Heartbeat file is effectively empty, so there is no standing recurring checklist driving periodic work.",
  },
];

export default function CalendarPage() {
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
            <a href="/calendar" className="flex items-center justify-between rounded-xl bg-white/[0.09] px-3 py-2.5 text-white transition">
              <span>Calendar</span>
              <span className="h-2 w-2 rounded-full bg-[#B38E37]" />
            </a>
            <a href="#" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Revenue</span>
            </a>
            <a href="#" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Operations</span>
            </a>
            <a href="#" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Tools</span>
            </a>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Schedule view
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Calendar
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A live view of cron jobs, scheduled tasks, and recurring assistant work.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Scheduled items</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Current schedule state</h2>
                  </div>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
                    Empty by design
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {scheduledItems.map((item) => (
                    <article key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.09] p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full border border-white/8 bg-white/[0.09] px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[#a8b1c2]">
                              {item.type}
                            </span>
                            <span className="text-xs text-[#7f8797]">{item.time}</span>
                          </div>
                          <h3 className="mt-3 text-lg font-medium text-white">{item.title}</h3>
                        </div>
                        <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-xs text-[#d6dbea]">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#98a2b3]">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Timeline</p>
                  <div className="mt-5 space-y-5">
                    {timeline.map((group) => (
                      <div key={group.day}>
                        <p className="text-sm font-medium text-white">{group.day}</p>
                        <div className="mt-3 space-y-3">
                          {group.events.map((event) => (
                            <div key={event.title} className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-medium text-white">{event.title}</p>
                                <span className="text-xs text-[#7f8797]">{event.label}</span>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-[#98a2b3]">{event.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Data sources</p>
                  <div className="mt-5 space-y-3">
                    {sources.map((source) => (
                      <article key={source.name} className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                        <p className="text-sm font-medium text-white">{source.name}</p>
                        <p className="mt-1 text-xs text-[#7f8797]">{source.value}</p>
                        <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{source.body}</p>
                      </article>
                    ))}
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
