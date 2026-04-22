import Link from "next/link";

const categories = [
  {
    name: "Profiles and retained context",
    count: 3,
    docs: [
      {
        title: "Canonical Profile, Debbie and Urban Events",
        path: "canonical-profile-debbie-and-urban-events.md",
        type: "Profile",
        updated: "2026-04-21",
        summary: "Working profile for future strategy, drafting, and operational support.",
        href: "/memory?slice=profile",
      },
      {
        title: "Retained Context, Debbie",
        path: "retained-context-debbie-2026-04-21.md",
        type: "Retained context",
        updated: "2026-04-21",
        summary: "Captured context intended to preserve important business and operator detail.",
        href: "/memory?slice=retained-context",
      },
      {
        title: "Interview Gap List",
        path: "interview-gap-list-2026-04-21.md",
        type: "Research",
        updated: "2026-04-21",
        summary: "Identifies missing source material and context gaps from the Debbie interview process.",
        href: "/docs?slice=research",
      },
    ],
  },
  {
    name: "Legal and dispute work",
    count: 2,
    docs: [
      {
        title: "Janek Gazecki / John Christopher Gazecki Research Dossier",
        path: "legal-battle-gazecki-dossier.md",
        type: "Legal dossier",
        updated: "2026-04-21",
        summary: "Public-source starter dossier for litigation and related dispute monitoring.",
        href: "/docs?slice=legal",
      },
      {
        title: "Litigation Brief, F3 v Polo",
        path: "litigation_brief_f3_v_polo.md",
        type: "Legal brief",
        updated: "2026-04-20",
        summary: "Working brief tied to the F3 Polo legal matter.",
        href: "/docs?slice=legal",
      },
    ],
  },
  {
    name: "Supplier and operations data",
    count: 8,
    docs: [
      {
        title: "Brisbane marquee companies",
        path: "brisbane-marquee-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Supplier comparison source list for marquee infrastructure in Brisbane.",
        href: "/office?slice=suppliers",
      },
      {
        title: "Brisbane fencing companies",
        path: "brisbane-fencing-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Fencing supplier market scan for Brisbane event planning.",
        href: "/office?slice=suppliers",
      },
      {
        title: "Brisbane luxury toilets",
        path: "brisbane-luxury-toilets.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Premium amenities supplier list for Brisbane event infrastructure.",
        href: "/office?slice=suppliers",
      },
      {
        title: "Brisbane traffic management companies",
        path: "brisbane-traffic-management-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Traffic management options for Brisbane event delivery.",
        href: "/office?slice=operations",
      },
      {
        title: "Brisbane waste management companies",
        path: "brisbane-waste-management-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Waste management supplier scan for Brisbane operations.",
        href: "/office?slice=operations",
      },
      {
        title: "Portsea contacts merged",
        path: "output/portsea_contacts_merged.xlsx",
        type: "Spreadsheet",
        updated: "2026-04-20",
        summary: "Merged contact workbook for Portsea-related supplier and contact data.",
        href: "/office?slice=contacts",
      },
      {
        title: "Key Contacts + Suppliers All Markets, merged",
        path: "output/Key Contacts + Suppliers All Markets - Portsea tab merged with cities, filters, and table.xlsx",
        type: "Spreadsheet",
        updated: "2026-04-20",
        summary: "Expanded operations workbook with merged city tabs, filters, and structured table view.",
        href: "/office?slice=comparison",
      },
      {
        title: "Paid invoices register",
        path: "output/paid_invoices_register.csv",
        type: "Finance data",
        updated: "2026-04-20",
        summary: "Register view of paid invoice data for tracking and reconciliation.",
        href: "/office?slice=finance",
      },
    ],
  },
  {
    name: "System and memory docs",
    count: 5,
    docs: [
      {
        title: "Long-term memory",
        path: "MEMORY.md",
        type: "Memory",
        updated: "2026-04-20",
        summary: "Curated long-term memory for business context, preferences, and retained strategic guidance.",
        href: "/memory",
      },
      {
        title: "Daily memory, 2026-04-20",
        path: "memory/2026-04-20.md",
        type: "Daily memory",
        updated: "2026-04-20",
        summary: "Day-based memory log including the canonical Debbie business context interview.",
        href: "/memory?slice=daily",
      },
      {
        title: "USER.md",
        path: "USER.md",
        type: "System doc",
        updated: "2026-04-20",
        summary: "User and stakeholder context for Debbie, Simon, and Sam.",
        href: "/team",
      },
      {
        title: "IDENTITY.md",
        path: "IDENTITY.md",
        type: "System doc",
        updated: "2026-04-21",
        summary: "Assistant identity, role, and commercial positioning.",
        href: "/team?slice=identity",
      },
      {
        title: "SOUL.md",
        path: "SOUL.md",
        type: "System doc",
        updated: "2026-04-20",
        summary: "Core behavioural guidance shaping how the assistant works.",
        href: "/team?slice=soul",
      },
    ],
  },
];

const searchTokens = [
  "sponsorship",
  "legal",
  "Debbie",
  "Portsea",
  "supplier",
  "memory",
  "profile",
  "invoice",
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#08090d] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#0d0f14] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5e6ad2] text-sm font-semibold text-white">
              MC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Urban Events internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            <Link href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Overview</span>
            </Link>
            <Link href="/calendar" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Calendar</span>
            </Link>
            <Link href="/projects" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Projects</span>
            </Link>
            <Link href="/memory" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.04] hover:text-white">
              <span>Memory</span>
            </Link>
            <Link href="/docs" className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 text-white transition">
              <span>Docs</span>
              <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" />
            </Link>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#0b0d12] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Document library
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Docs
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A clean document library for the files I&apos;ve created and maintained in this workspace, organised by type and ready to search.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-6">
                  <div className="rounded-[24px] border border-white/8 bg-[#0f1218]/92 p-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Search</p>
                        <div className="mt-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-[#8f98a8]">
                          Search docs by title, path, type, or topic, for example: sponsorship, legal, supplier, memory...
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchTokens.map((token) => (
                          <span key={token} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-[#d6dbea]">
                            {token}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {categories.map((category) => (
                      <section key={category.name} className="rounded-[24px] border border-white/8 bg-[#0f1218]/92 p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Category</p>
                            <h2 className="mt-2 text-xl font-semibold text-white">{category.name}</h2>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-[#d6dbea]">
                            {category.count} docs
                          </span>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {category.docs.map((doc) => (
                            <Link
                              key={doc.path}
                              href={doc.href}
                              className="block rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-[#5e6ad2]/60 hover:bg-[#121622]"
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-sm font-medium text-white">{doc.title}</h3>
                                    <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#cfd6e4]">
                                      {doc.type}
                                    </span>
                                  </div>
                                  <p className="mt-2 text-xs text-[#7f8797]">{doc.path}</p>
                                </div>
                                <span className="text-xs text-[#7f8797]">Updated {doc.updated}</span>
                              </div>
                              <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{doc.summary}</p>
                              <div className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[#aab4ff]">
                                Open
                              </div>
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Library stats</p>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Tracked categories", "4"],
                      ["Visible docs", "18"],
                      ["Primary file types", "Markdown, CSV, XLSX"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{label}</p>
                        <p className="mt-2 text-base font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#0f1218] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      This first version is a curated docs browser built from the real files currently in the workspace.
                    </p>
                    <p>
                      The search UI is present and framed for use, but the actual filtering is not yet wired dynamically.
                    </p>
                    <p>
                      Best next upgrade: make this read the file system live, auto-categorise new docs, and open full document previews inside mission control.
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
