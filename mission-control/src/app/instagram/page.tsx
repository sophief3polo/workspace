import Link from "next/link";

const summary = [
  { label: "Followers now", value: "1,425", change: "+18% est." },
  { label: "Posts live", value: "162", change: "+54 in year" },
  { label: "Following", value: "458", change: "Stable" },
  { label: "Campaign windows", value: "4", change: "Brisbane, Sydney, Melbourne, Portsea" },
];

const monthlyFollowerTrend = [
  { month: "May", value: 62 },
  { month: "Jun", value: 64 },
  { month: "Jul", value: 66 },
  { month: "Aug", value: 69 },
  { month: "Sep", value: 74 },
  { month: "Oct", value: 81 },
  { month: "Nov", value: 78 },
  { month: "Dec", value: 71 },
  { month: "Jan", value: 68 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 79 },
  { month: "Apr", value: 84 },
];

const monthlyContentMix = [
  { month: "May", feed: 7, reels: 3, stories: 5 },
  { month: "Jun", feed: 6, reels: 4, stories: 4 },
  { month: "Jul", feed: 8, reels: 5, stories: 6 },
  { month: "Aug", feed: 7, reels: 5, stories: 6 },
  { month: "Sep", feed: 9, reels: 6, stories: 8 },
  { month: "Oct", feed: 12, reels: 8, stories: 11 },
  { month: "Nov", feed: 10, reels: 7, stories: 10 },
  { month: "Dec", feed: 6, reels: 4, stories: 5 },
  { month: "Jan", feed: 5, reels: 3, stories: 4 },
  { month: "Feb", feed: 6, reels: 4, stories: 5 },
  { month: "Mar", feed: 8, reels: 5, stories: 7 },
  { month: "Apr", feed: 10, reels: 6, stories: 8 },
];

const engagementMoments = [
  {
    label: "Pre-event run-up",
    value: "Highest lift",
    detail: "Follower momentum and posting volume are strongest in the 4 to 6 weeks before event day.",
  },
  {
    label: "Event weekend",
    value: "Peak attention",
    detail: "Reels, crowd shots, celebrity moments, and sponsor activations create the sharpest spikes.",
  },
  {
    label: "Off-cycle months",
    value: "Softest period",
    detail: "Without a live event story, the page needs tighter lifestyle and sponsor content to avoid drift.",
  },
];

const posts = [
  { title: "Event atmosphere reels", score: 92, note: "Fastest attention capture and strongest share potential." },
  { title: "Fashion and crowd imagery", score: 84, note: "Protects the premium positioning and social pull." },
  { title: "Sponsor activation content", score: 76, note: "Commercially important, but needs better creative packaging." },
  { title: "Polo sport highlights", score: 69, note: "Useful for brand depth, but less sticky than lifestyle-led content." },
];

const nav = [
  { label: "Overview", href: "/" },
  { label: "Calendar", href: "/calendar" },
  { label: "Projects", href: "/projects" },
  { label: "Instagram", href: "/instagram", active: true },
  { label: "Memory", href: "/memory" },
  { label: "Docs", href: "/docs" },
  { label: "Team", href: "/team" },
  { label: "Office", href: "/office" },
];

export default function InstagramPage() {
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
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                  item.active ? "bg-white/[0.09] text-white" : "hover:bg-white/[0.09] hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.active ? <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" /> : null}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-[32px] border border-white/8 bg-[#171c25] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)]">
          <header className="border-b border-white/8 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#99a1b3]">
                  Social performance
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  @f3polo Instagram performance
                </h1>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#98a2b3] sm:text-base">
                  A past-year performance view designed for Mission Control. This version visualises profile-level signals and operating assumptions from the live account footprint, ready to be replaced with direct Meta Insights once connected.
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-5 sm:p-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summary.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/8 bg-[#232b3a] p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#7f8797]">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-[#9aa3b5]">{item.change}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#aab4ff]">Follower trend</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Past 12 months</h2>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-3 text-sm text-[#c7cedb]">
                    Estimated from visible account state
                  </div>
                </div>
                <div className="mt-8 flex h-[280px] items-end gap-3">
                  {monthlyFollowerTrend.map((point) => (
                    <div key={point.month} className="flex flex-1 flex-col items-center gap-3">
                      <div className="flex h-[220px] w-full items-end">
                        <div
                          className="w-full rounded-t-[18px] bg-[linear-gradient(180deg,rgba(142,160,255,0.95),rgba(94,106,210,0.4))]"
                          style={{ height: `${point.value}%` }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#d6dbea]">{point.month}</p>
                        <p className="mt-1 text-[11px] text-[#7f8797]">{point.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(94,106,210,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#aab4ff]">Commercial read</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">What the account is really doing</h2>
                <div className="mt-6 space-y-4">
                  {engagementMoments.map((item) => (
                    <article key={item.label} className="rounded-2xl border border-white/8 bg-[#232b3a]/80 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <span className="rounded-full border border-white/8 bg-white/[0.05] px-2.5 py-1 text-[11px] text-[#d6dbea]">
                          {item.value}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#98a2b3]">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1.15fr_0.7fr]">
              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Content cadence</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">Posting mix by month</h2>
                <div className="mt-6 space-y-4">
                  {monthlyContentMix.map((item) => {
                    const total = item.feed + item.reels + item.stories;
                    const feed = (item.feed / total) * 100;
                    const reels = (item.reels / total) * 100;
                    const stories = (item.stories / total) * 100;

                    return (
                      <div key={item.month}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white">{item.month}</span>
                          <span className="text-[#98a2b3]">{total} content units</span>
                        </div>
                        <div className="flex h-3 overflow-hidden rounded-full bg-white/[0.05]">
                          <div className="bg-[#5e6ad2]" style={{ width: `${feed}%` }} />
                          <div className="bg-[#8b5cf6]" style={{ width: `${reels}%` }} />
                          <div className="bg-[#ec4899]" style={{ width: `${stories}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#a5adbd]">
                  <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#5e6ad2]" />Feed</span>
                  <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />Reels</span>
                  <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#ec4899]" />Stories</span>
                </div>
              </section>

              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Format performance</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">What earns attention</h2>
                <div className="mt-6 space-y-4">
                  {posts.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-white">{item.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[#98a2b3]">{item.note}</p>
                        </div>
                        <div className="min-w-[56px] rounded-2xl border border-white/8 bg-white/[0.09] px-3 py-2 text-center">
                          <p className="text-lg font-semibold text-white">{item.score}</p>
                        </div>
                      </div>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.09]">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#5e6ad2_0%,#ec4899_100%)]"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-white/8 bg-[#232b3a] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#99a1b3]">Source note</p>
                <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
                  This screen is a strong visual operating layer, but it is not yet wired to Meta Insights API data. The current version uses visible profile state and realistic operating assumptions for a past-year view.
                </div>
                <div className="mt-5 space-y-3 text-sm text-[#cfd5e1]">
                  <p>Visible profile snapshot used:</p>
                  <ul className="space-y-2 text-[#98a2b3]">
                    <li>• 162 posts</li>
                    <li>• 1,425 followers</li>
                    <li>• 458 following</li>
                  </ul>
                </div>
                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.09] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7f8797]">Next upgrade</p>
                  <p className="mt-3 text-sm leading-6 text-[#d6dbea]">
                    Connect Meta Business / Instagram Insights and replace these estimates with actual reach, impressions, engagement, follower growth, top posts, and paid versus organic performance.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
