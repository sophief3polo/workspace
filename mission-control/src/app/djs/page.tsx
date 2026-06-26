import Link from "next/link";
import type { ReactNode } from "react";

type DjRow = {
  dj: string;
  djName: string;
  timeslot: string;
  contactName: string;
  email: string;
  phone: string;
  booked: boolean;
  pending: boolean;
};

type CityGroup = {
  city: string;
  rows: DjRow[];
};

const navItems = [
  { label: "Overview", href: "/", active: false },
  { label: "Ticketing", href: "/ticketing", active: false },
  { label: "Teams & Umpire", href: "/sponsorship-teams-umpire", active: false },
  { label: "Pourage", href: "/sponsorship-pourage", active: false },
  { label: "Title & Others", href: "/sponsorship-others", active: false },
  { label: "Calendar", href: "/calendar", active: false },
  { label: "Projects", href: "/projects", active: false },
  { label: "DJs", href: "/djs", active: true },
  { label: "Instagram", href: "/instagram", active: false },
  { label: "Memory", href: "/memory", active: false },
  { label: "Docs", href: "/docs", active: false },
  { label: "Team", href: "/team", active: false },
  { label: "Office", href: "/office", active: false },
];

const cities = ["Brisbane 2026", "Sydney 2026", "Melbourne 2026", "Christchurch 2027", "Auckland 2027"];

const djGroups: CityGroup[] = cities.map((city) => ({
  city,
  rows: Array.from({ length: 4 }, (_, index) => ({
    dj: `DJ ${index + 1}`,
    djName: "",
    timeslot: "",
    contactName: "",
    email: "",
    phone: "",
    booked: false,
    pending: true,
  })),
}));

const totalRows = djGroups.reduce((total, group) => total + group.rows.length, 0);

export default function DjsPage() {
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
            <p className="text-xs uppercase tracking-[0.24em] text-[#E3C774]">Talent tracker</p>
            <p className="mt-2 text-sm font-medium text-white">Keep DJ booking clean.</p>
            <p className="mt-2 text-sm leading-6 text-[#b8c0cc]">
              One place for names, timeslots, contacts, and booking status across each city.
            </p>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Entertainment
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  DJ Register
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  DJ booking tracker for Brisbane 2026, Sydney 2026, Melbourne 2026, Christchurch 2027, and Auckland 2027.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex">
                <Metric label="Cities" value="5" />
                <Metric label="DJ rows" value={String(totalRows)} />
                <Metric label="Confirmed" value="0" />
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="space-y-5">
              {djGroups.map((group) => (
                <section key={group.city} className="overflow-hidden rounded-[28px] border border-white/8 bg-[#232b3a]">
                  <div className="border-b border-white/8 bg-[linear-gradient(90deg,rgba(179,142,55,0.18),rgba(255,255,255,0.03))] px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#D6B35C]">City</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{group.city}</h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                      <thead className="bg-white/[0.06] text-[11px] uppercase tracking-[0.18em] text-[#a9b2c2]">
                        <tr>
                          <Th>DJ</Th>
                          <Th>DJ name</Th>
                          <Th>Timeslot</Th>
                          <Th>Contact name</Th>
                          <Th>Email</Th>
                          <Th>Phone</Th>
                          <Th>Booked</Th>
                          <Th>Pending</Th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/8">
                        {group.rows.map((row) => (
                          <tr key={`${group.city}-${row.dj}`} className="transition hover:bg-white/[0.04]">
                            <Td strong>{row.dj}</Td>
                            <Td muted>{row.djName || "TBC"}</Td>
                            <Td muted>{row.timeslot || "TBC"}</Td>
                            <Td muted>{row.contactName || "TBC"}</Td>
                            <Td muted>{row.email || "TBC"}</Td>
                            <Td muted>{row.phone || "TBC"}</Td>
                            <Td>
                              <StatusPill active={row.booked} activeLabel="Booked" inactiveLabel="No" tone="emerald" />
                            </Td>
                            <Td>
                              <StatusPill active={row.pending} activeLabel="Pending" inactiveLabel="No" tone="amber" />
                            </Td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}
            </div>
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

function Th({ children }: { children: ReactNode }) {
  return <th className="px-4 py-3 font-medium">{children}</th>;
}

function Td({ children, strong = false, muted = false }: { children: ReactNode; strong?: boolean; muted?: boolean }) {
  return (
    <td className={`px-4 py-4 align-top ${strong ? "font-medium text-white" : muted ? "text-[#8f98aa]" : "text-[#d6dbea]"}`}>
      {children}
    </td>
  );
}

function StatusPill({
  active,
  activeLabel,
  inactiveLabel,
  tone,
}: {
  active: boolean;
  activeLabel: string;
  inactiveLabel: string;
  tone: "emerald" | "amber";
}) {
  const activeClass =
    tone === "emerald"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
      : "border-amber-400/20 bg-amber-400/10 text-amber-200";

  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${active ? activeClass : "border-white/8 bg-white/[0.05] text-[#98a2b3]"}`}>
      {active ? activeLabel : inactiveLabel}
    </span>
  );
}
