const locations = [
  {
    name: "Auckland",
    venue: "Auckland Domain",
    href: "#auckland",
    keywords: ["polo event auckland", "vip event tickets auckland", "luxury event auckland"],
    body:
      "A premium polo event in the heart of Auckland, with VIP hospitality, private marquees, fashion, food, music and client entertainment built into one day.",
  },
  {
    name: "Christchurch",
    venue: "Hagley Park",
    href: "#christchurch",
    keywords: ["polo event christchurch", "corporate hospitality christchurch", "private marquee christchurch"],
    body:
      "A polished Christchurch event experience designed for groups, corporate hosting, premium ticket buyers and guests looking for a luxury day out.",
  },
];

const marqueeBenefits = [
  "Private marquees for corporate hospitality and premium hosting",
  "VIP ticket options with champagne, canapés and premium viewing",
  "Auckland and Christchurch event information in one place",
  "Brand-safe language built around premium positioning, not discounting",
];

const faqs = [
  {
    question: "What is Lexus Urban Polo?",
    answer:
      "Lexus Urban Polo is a premium polo event experience combining polo, hospitality, fashion, food, music and corporate hosting in major city locations including Auckland and Christchurch.",
  },
  {
    question: "Who is this site for?",
    answer:
      "This site is designed for people searching for polo events, VIP tickets, private marquees, corporate hospitality and premium event experiences in Auckland and Christchurch.",
  },
  {
    question: "Why focus so heavily on marquees and VIP?",
    answer:
      "Because those are the highest-intent, highest-value search journeys. They match the most commercially important offers on the Urban Polo side of the business.",
  },
];

export default function Home() {
  return (
    <main className="bg-stone-950 text-stone-100">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.16),transparent_30%),linear-gradient(180deg,#1c1917_0%,#0c0a09_100%)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-amber-200/20 bg-amber-100/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-100">
              Premium polo event, VIP hospitality, private marquees
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lexus Urban Polo, the premium polo event in Auckland and Christchurch.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Discover VIP tickets, private marquees, corporate hospitality and a luxury day out built around polo,
              fashion, music, premium food and unforgettable client entertainment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-200">
              <a className="rounded-full bg-amber-200 px-5 py-3 font-medium text-stone-950 transition hover:bg-amber-100" href="#hospitality">
                Explore private marquees
              </a>
              <a className="rounded-full border border-white/15 px-5 py-3 font-medium transition hover:bg-white/5" href="#locations">
                View Auckland and Christchurch events
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Stat title="Primary search intent" body="Polo event Auckland, polo event Christchurch, VIP event tickets, private marquee hospitality." />
            <Stat title="Commercial focus" body="Corporate hospitality, client hosting, premium ticket buyers and luxury event demand." />
            <Stat title="Positioning" body="Premium lifestyle event, premium sporting spectacle, exceptional hospitality and prestige." />
          </div>
        </div>
      </section>

      <section id="hospitality" className="border-b border-white/10 bg-stone-900/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">Corporate hospitality</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Private marquees and VIP hospitality built for corporate hosting.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
              If you are searching for corporate hospitality in Auckland or Christchurch, Urban Polo is built for that exact
              moment. Private marquees give your business a premium hosting environment, while VIP options create a polished,
              lower-commitment entry point for guests, teams and clients.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {marqueeBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-stone-200">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">Target terms</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-200">
              <li>corporate hospitality auckland</li>
              <li>corporate hospitality christchurch</li>
              <li>private marquee auckland</li>
              <li>private marquee christchurch</li>
              <li>vip hospitality auckland</li>
              <li>vip hospitality christchurch</li>
              <li>premium event hospitality nz</li>
              <li>client entertainment auckland</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="locations" className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">Locations</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Rankable location content for Auckland and Christchurch.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <article key={location.name} id={location.name.toLowerCase()} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{location.name} Urban Polo</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-400">{location.venue}</p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-stone-300">{location.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {location.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-amber-200/20 bg-amber-100/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-amber-100">
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-stone-900/60">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">What this site should rank for</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Search terms that actually map to revenue.</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              This site is structured to target the terms that matter commercially: event discovery, VIP ticket demand,
              corporate hospitality, private marquee buying intent and location-led searches.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "polo event auckland",
              "polo event christchurch",
              "vip event tickets auckland",
              "vip event tickets christchurch",
              "luxury event auckland",
              "luxury event christchurch",
              "corporate hospitality auckland",
              "corporate hospitality christchurch",
              "private marquee auckland",
              "private marquee christchurch",
              "summer events auckland",
              "summer events christchurch",
            ].map((keyword) => (
              <div key={keyword} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-stone-200">
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">Why Urban Polo</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A premium event experience, not just another ticketed day out.</h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              Urban Polo sits in a stronger search position when it is described clearly as a premium lifestyle event,
              a premium sporting and entertainment spectacle, and a serious corporate hospitality product. That language
              gives Google clearer relevance signals and gives buyers clearer reasons to enquire.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ValueCard title="Premium sporting event" body="A city-based polo event with style, spectacle, food, music and social energy." />
            <ValueCard title="Corporate hosting" body="Private marquees and VIP formats that work for client entertainment, team hosting and brand hospitality." />
            <ValueCard title="Luxury day out" body="Auckland and Christchurch event pages aligned to real location and seasonal search behaviour." />
          </div>
        </div>
      </section>

      <section className="bg-stone-950">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Questions searchers are likely to ask.</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">Next SEO build steps</p>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-stone-200">
              <li>Create dedicated pages for Auckland, Christchurch, VIP tickets and private marquees.</li>
              <li>Add unique title tags and meta descriptions for each page.</li>
              <li>Write venue-specific copy around Auckland Domain and Hagley Park.</li>
              <li>Link through to ticketing and enquiry pages with clear conversion paths.</li>
              <li>Add FAQ schema and organisation/event schema once event details are locked.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-stone-300">{body}</p>
    </div>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-stone-300">{body}</p>
    </article>
  );
}
