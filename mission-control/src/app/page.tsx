const tasks = [
  {
    title: "Australia major sponsor outreach",
    status: "In progress",
    owner: "Sophie",
    due: "Today",
    priority: "Critical",
  },
  {
    title: "Portsea marquee inventory clean-up",
    status: "Ready",
    owner: "Debbie",
    due: "Tomorrow",
    priority: "High",
  },
  {
    title: "Mission Control v1 build",
    status: "Shipping",
    owner: "Sophie",
    due: "This week",
    priority: "Critical",
  },
];

const pipeline = [
  {
    stage: "Ideas",
    count: 8,
    items: ["Sponsor case study reel", "Behind the scenes at Urban Polo"],
  },
  {
    stage: "Scripting",
    count: 3,
    items: ["Why premium hospitality converts", "F3Polo launch narrative"],
  },
  {
    stage: "Thumbnail",
    count: 2,
    items: ["Portsea hero image refresh", "Sponsor montage concept"],
  },
  {
    stage: "Filming",
    count: 1,
    items: ["Lexus Urban Polo premium positioning explainer"],
  },
];

const calendar = [
  { time: "08:30", item: "Inbox sweep and sponsor follow-up", type: "Recurring" },
  { time: "11:00", item: "Marquee pricing review", type: "Ops" },
  { time: "14:00", item: "Agent memory maintenance", type: "System" },
  { time: "16:30", item: "Content pipeline update", type: "Marketing" },
];

const memories = [
  {
    title: "Premium brand rule",
    body: "Protect premium positioning. Do not reach for discounting as the default tactic.",
    source: "MEMORY.md",
  },
  {
    title: "Debbie operating preference",
    body: "Automate repetitive operational work so more time goes toward outreach, systems, and sales.",
    source: "USER.md",
  },
  {
    title: "Current strategic pressure",
    body: "The Australia major sponsor matters disproportionately right now.",
    source: "MEMORY.md",
  },
];

const team = [
  {
    name: "Sophie",
    role: "Mission lead",
    focus: "Commercial ops, sponsor systems, proactive execution",
    status: "Working",
  },
  {
    name: "Developer Agent",
    role: "Builder",
    focus: "Apps, integrations, automation, UI",
    status: "Available",
  },
  {
    name: "Writer Agent",
    role: "Messaging",
    focus: "Outreach, proposals, scripts, sponsor copy",
    status: "Available",
  },
  {
    name: "Designer Agent",
    role: "Creative",
    focus: "Layouts, thumbnails, event collateral",
    status: "Available",
  },
];

const office = [
  { name: "Sophie", activity: "Building Mission Control", desk: "Command desk" },
  { name: "Developer", activity: "Preparing components", desk: "Product bay" },
  { name: "Writer", activity: "Waiting for brief", desk: "Copy room" },
  { name: "Designer", activity: "Waiting for brief", desk: "Creative studio" },
];

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:bg-white/10">
          Open
        </button>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_45%,#020617_100%)] text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-slate-900/80 to-fuchsia-500/10 p-8 shadow-[0_25px_120px_rgba(8,145,178,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
                Sophie Mission Control
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                One place to run tasks, memory, agents, and scheduled work.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Built for a proactive OpenClaw setup, with the operating surfaces that actually matter: tasks,
                content flow, calendar, memory, team structure, and a live office view.
              </p>
            </div>
            <div className="grid min-w-[280px] grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Active tasks</div>
                <div className="mt-2 text-3xl font-semibold text-white">12</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Agents online</div>
                <div className="mt-2 text-3xl font-semibold text-white">4</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Memories indexed</div>
                <div className="mt-2 text-3xl font-semibold text-white">186</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Next scheduled action</div>
                <div className="mt-2 text-sm font-medium text-cyan-200">16:30 content update</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <Section
            title="Tasks board"
            subtitle="Shared task visibility for Debbie and Sophie, with owner and status front and center."
          >
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 md:grid-cols-[1.6fr_repeat(4,minmax(0,1fr))]"
                >
                  <div>
                    <div className="font-medium text-white">{task.title}</div>
                    <div className="mt-1 text-sm text-slate-400">Revenue-driving work with visible ownership.</div>
                  </div>
                  <Stat label="Status" value={task.status} />
                  <Stat label="Owner" value={task.owner} />
                  <Stat label="Due" value={task.due} />
                  <Stat label="Priority" value={task.priority} accent />
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Calendar"
            subtitle="A visible schedule for recurring agent work, task runs, and operational checkpoints."
          >
            <div className="space-y-3">
              {calendar.map((entry) => (
                <div key={entry.time + entry.item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="min-w-16 rounded-xl bg-cyan-400/10 px-3 py-2 text-center text-sm font-semibold text-cyan-200">
                    {entry.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{entry.item}</div>
                    <div className="text-sm text-slate-400">{entry.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <Section
            title="Content pipeline"
            subtitle="A board for idea capture through scripting, thumbnail work, and filming handoff."
          >
            <div className="grid gap-3">
              {pipeline.map((column) => (
                <div key={column.stage} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-white">{column.stage}</div>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">{column.count}</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {column.items.map((item) => (
                      <div key={item} className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Memory"
            subtitle="Searchable memory cards so context is visible instead of hidden in markdown."
          >
            <div className="mb-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-400">
              Search memories, conversations, decisions, and operating rules.
            </div>
            <div className="space-y-3">
              {memories.map((memory) => (
                <article key={memory.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-medium text-cyan-200">{memory.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{memory.body}</p>
                  <div className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">{memory.source}</div>
                </article>
              ))}
            </div>
          </Section>

          <Section
            title="Team"
            subtitle="The digital org chart, with distinct roles so work can be delegated cleanly."
          >
            <div className="space-y-3">
              {team.map((member) => (
                <div key={member.name} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium text-white">{member.name}</div>
                      <div className="text-sm text-slate-400">{member.role}</div>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">{member.status}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{member.focus}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section
          title="Office"
          subtitle="A live visual-feeling layer for who is at work, where they are, and what they are doing."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {office.map((agent) => (
              <div
                key={agent.name}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(15,23,42,0.65))] p-5"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white">
                    {agent.name.slice(0, 1)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{agent.name}</div>
                    <div className="text-sm text-slate-400">{agent.desk}</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Current activity</div>
                  <div className="mt-2 text-sm leading-6 text-slate-200">{agent.activity}</div>
                </div>
                <div className="mt-4 h-24 rounded-[24px] border border-dashed border-white/10 bg-white/5" />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</div>
      <div className={`mt-2 text-sm font-medium ${accent ? "text-cyan-200" : "text-slate-200"}`}>{value}</div>
    </div>
  );
}
