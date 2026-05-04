import Link from "next/link";
import { docCategories, getDocDownloadHref } from "@/lib/docs";

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
  const visibleDocs = docCategories.reduce((total, category) => total + category.docs.length, 0);

  return (
    <main className="min-h-screen bg-[#11141b] text-[#f5f7fb]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] gap-6 px-4 py-4 lg:px-6 lg:py-6">
        <aside className="hidden w-[248px] shrink-0 flex-col rounded-[28px] border border-white/8 bg-[#1c2230] p-4 lg:flex">
          <div className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.05] px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#5e6ad2] text-sm font-semibold text-white">
              MC
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mission Control</p>
              <p className="text-xs text-[#98a2b3]">Urban Events internal</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1 text-sm text-[#98a2b3]">
            <Link href="/" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Overview</span>
            </Link>
            <Link href="/calendar" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Calendar</span>
            </Link>
            <Link href="/projects" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Projects</span>
            </Link>
            <Link href="/memory" className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/[0.09] hover:text-white">
              <span>Memory</span>
            </Link>
            <Link href="/docs" className="flex items-center justify-between rounded-xl bg-white/[0.09] px-3 py-2.5 text-white transition">
              <span>Docs</span>
              <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" />
            </Link>
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Document library
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Docs
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A real document viewer for the files currently tracked in this workspace.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="flex flex-col gap-6">
                  <div className="rounded-[24px] border border-white/8 bg-[#232b3a]/92 p-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Search</p>
                        <div className="mt-3 rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-3 text-sm text-[#8f98a8]">
                          Search UI is still staged, but every document below now opens in a proper viewer.
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchTokens.map((token) => (
                          <span key={token} className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-xs text-[#d6dbea]">
                            {token}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {docCategories.map((category) => (
                      <section key={category.name} className="rounded-[24px] border border-white/8 bg-[#232b3a]/92 p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Category</p>
                            <h2 className="mt-2 text-xl font-semibold text-white">{category.name}</h2>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-xs text-[#d6dbea]">
                            {category.count} docs
                          </span>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {category.docs.map((doc) => (
                            <div
                              key={doc.slug}
                              className="rounded-2xl border border-white/8 bg-white/[0.09] p-4 transition hover:border-[#5e6ad2]/60 hover:bg-[#2a3446]"
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-sm font-medium text-white">{doc.title}</h3>
                                    <span className="rounded-full border border-white/8 bg-white/[0.05] px-2.5 py-1 text-[11px] text-[#cfd6e4]">
                                      {doc.type}
                                    </span>
                                  </div>
                                  <p className="mt-2 text-xs text-[#7f8797]">{doc.path}</p>
                                </div>
                                <span className="text-xs text-[#7f8797]">Updated {doc.updated}</span>
                              </div>
                              <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{doc.summary}</p>
                              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.18em]">
                                <Link href={`/docs/${doc.slug}`} className="text-[#aab4ff] transition hover:text-white">
                                  Open document
                                </Link>
                                <a
                                  href={getDocDownloadHref(doc)}
                                  download
                                  className="text-[#8f98a8] transition hover:text-white"
                                >
                                  Download file
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </section>

              <section className="space-y-5">
                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Library stats</p>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Tracked categories", String(docCategories.length)],
                      ["Visible docs", String(visibleDocs)],
                      ["Primary file types", "Markdown, CSV, XLSX"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.09] px-4 py-4">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{label}</p>
                        <p className="mt-2 text-base font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Notes</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[#98a2b3]">
                    <p>
                      The docs library now opens real document routes instead of redirecting to nearby placeholder pages.
                    </p>
                    <p>
                      Markdown and CSV files render inline. Spreadsheet files are listed in the viewer with guidance because they are not rendered natively yet.
                    </p>
                    <p>
                      Best next upgrade: live file-system indexing plus native spreadsheet preview.
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
