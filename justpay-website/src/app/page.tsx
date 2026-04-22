import Image from "next/image";

const products = [
  {
    title: "EFTPOS and in-store payments",
    detail:
      "Help merchants get matched to suitable in-store payment solutions through Fiserv's sales and onboarding process.",
  },
  {
    title: "Business payment acceptance",
    detail:
      "Support merchants looking to accept customer payments more efficiently, with product fit handled through the Fiserv process.",
  },
  {
    title: "Merchant payment solutions",
    detail:
      "Give businesses a clearer path to payment tools and services without the usual confusion around where to start.",
  },
  {
    title: "Referral-led merchant setup",
    detail:
      "Just Pay identifies the merchant opportunity, then Fiserv handles solutioning, paperwork, onboarding, and support.",
  },
];

const reasons = [
  "Simple referral pathway for merchants who want payments sorted properly",
  "Backed by Fiserv's downstream sales, onboarding, and support process",
  "Fast first-contact SLA with Fiserv targeting outreach within two business days",
  "Built for business owners who want clarity, not payments jargon",
];

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    detail: "Share a few basic details so we can understand your payment needs and whether you're a fit for referral.",
  },
  {
    number: "02",
    title: "We refer you through the right path",
    detail: "Just Pay submits the referral into the Fiserv partner process with the right merchant context.",
  },
  {
    number: "03",
    title: "Fiserv takes it from there",
    detail: "Fiserv handles solution matching, paperwork, onboarding, and the next stage of the sales process.",
  },
];

const faqs = [
  {
    question: "What does Just Pay actually do?",
    answer:
      "Just Pay helps identify and refer merchants into the Fiserv process. Fiserv then handles product fit, paperwork, onboarding, and support.",
  },
  {
    question: "Do you provide the payment product directly?",
    answer:
      "The downstream product and onboarding process is handled by Fiserv. Just Pay's role is getting the right merchants into that process cleanly.",
  },
  {
    question: "How quickly will someone contact me?",
    answer:
      "The partnership model includes a two-business-day SLA for first contact from Fiserv after referral submission.",
  },
  {
    question: "Can this work for businesses in New Zealand and Australia?",
    answer:
      "Yes, the site is being positioned for both justpay.co.nz and justpay.au, with the same lead-generation and referral intent.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050709] text-white">
      <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_24%),#050709]">
        <div className="mx-auto max-w-[1240px] px-5 py-6 sm:px-6 lg:px-8">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/justpay-logo.png"
                alt="Just Pay"
                width={210}
                height={68}
                className="h-auto w-[180px] sm:w-[220px]"
                priority
              />
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <p className="hidden text-sm text-[#9fb0bf] sm:block">Payment referral partner for growing merchants</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-[#33c6e8] px-5 py-3 text-sm font-semibold text-[#041014] transition hover:bg-[#57d1ed]"
              >
                Speak to us
              </a>
              <a
                href="#products"
                className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.03]"
              >
                Explore solutions
              </a>
            </div>
          </header>

          <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#33c6e8]/25 bg-[#33c6e8]/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#8de7fa]">
                New Zealand and Australia
                <span className="h-1.5 w-1.5 rounded-full bg-[#33c6e8]" />
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Smarter payment solutions, with a cleaner path for merchants.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#9fb0bf] sm:text-lg">
                Just Pay helps businesses get connected to suitable payment solutions through a Fiserv referral partnership. We cut through the noise, qualify the opportunity, and help merchants get into the right process fast.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#33c6e8] px-6 py-3.5 text-sm font-semibold text-[#041014] transition hover:bg-[#57d1ed]"
                >
                  Get started
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.03]"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">Why merchants use Just Pay</p>
              <div className="mt-6 space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="rounded-2xl border border-white/8 bg-[#0b1116] px-4 py-4 text-sm leading-7 text-[#dce7ef]">
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-white/8 bg-[#06090d]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">Products and solutions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              What Just Pay can help merchants access
            </h2>
            <p className="mt-4 text-base leading-8 text-[#9fb0bf]">
              Based on the current referral-partnership structure, Just Pay is positioned to help merchants get connected to business payment solutions through Fiserv.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.title} className="rounded-[28px] border border-white/8 bg-[#0b1116] p-6">
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0bf]">{product.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-white/8 bg-[#050709]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Simple, commercial, and built to move quickly.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="rounded-[28px] border border-white/8 bg-[#0b1116] p-6">
                <p className="text-sm font-semibold text-[#33c6e8]">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0bf]">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#06090d]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">For merchants</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Better for business owners who want clarity, not hassle.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#9fb0bf]">
              If you are reviewing payment acceptance, EFTPOS, or broader merchant payment needs, Just Pay gives you a cleaner starting point and helps get the process moving properly.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-[#0b1116] p-6">
            <p className="text-sm font-medium text-white">What happens after referral?</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#dce7ef]">
              <li>• Fiserv makes first merchant contact, targeted within two business days</li>
              <li>• Product fit and paperwork are handled inside the Fiserv sales process</li>
              <li>• Onboarding, assessment, training, and ongoing support sit with Fiserv</li>
              <li>• Just Pay stays focused on clean lead flow and commercial opportunity creation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#050709]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">FAQs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Questions merchants will ask
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[28px] border border-white/8 bg-[#0b1116] p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[#9fb0bf]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[radial-gradient(circle_at_top_right,rgba(51,198,232,0.14),transparent_28%),#050709]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[36px] border border-white/8 bg-[#0b1116] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8de7fa]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Ready to explore the right payment setup for your business?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#9fb0bf]">
                Talk to Just Pay and we will help direct you into the right referral pathway.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:text-right">
              <a
                href="mailto:hello@justpay.co.nz"
                className="inline-flex rounded-2xl bg-[#33c6e8] px-6 py-3.5 text-sm font-semibold text-[#041014] transition hover:bg-[#57d1ed]"
              >
                hello@justpay.co.nz
              </a>
              <p className="mt-4 text-sm text-[#7f93a5]">Also intended for justpay.au</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
