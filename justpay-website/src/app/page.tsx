"use client";

import { useState } from "react";
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

const navLinks = [
  { href: "#products", label: "Solutions" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact us" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#f6fbff] text-[#0f172a]">
      <section className="relative overflow-hidden border-b border-[#0f2f46] bg-[linear-gradient(180deg,#07141f_0%,#0b2233_58%,#10324a_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(51,221,255,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(10,132,255,0.18),transparent_28%),radial-gradient(circle_at_center_right,rgba(16,185,129,0.10),transparent_24%)]" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-6 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[#081723]/90 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                <Image
                  src="/justpay-logo.png"
                  alt="Just Pay"
                  width={220}
                  height={72}
                  className="h-auto w-[180px] sm:w-[230px]"
                  priority
                />
              </div>
              <div className="hidden h-8 w-px bg-white/12 sm:block" />
              <p className="hidden text-sm text-[#b7c9d8] sm:block">Payment referral partner for growing merchants</p>
            </div>

            <div className="hidden flex-wrap gap-3 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-3 text-sm transition ${
                    link.href === "#contact"
                      ? "bg-[#33ddff] font-semibold text-[#082032] hover:bg-[#1ec8ef]"
                      : "border border-white/14 bg-white/8 font-medium text-[#e6f6ff] hover:border-[#59dfff] hover:bg-white/12"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/14 bg-white/10 text-white shadow-sm transition hover:border-[#59dfff] hover:bg-white/14 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </header>

          {isMenuOpen ? (
            <div className="mt-4 rounded-[28px] border border-white/12 bg-[#0b1d2b]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      link.href === "#contact"
                        ? "bg-[#33ddff] font-semibold text-[#082032] hover:bg-[#1ec8ef]"
                        : "border border-white/12 bg-white/6 font-medium text-[#e6f6ff] hover:border-[#59dfff] hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ) : null}

          <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#1f526d] bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#8fe8ff] shadow-sm">
                New Zealand and Australia
                <span className="h-1.5 w-1.5 rounded-full bg-[#33ddff]" />
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Smarter payment solutions, with a cleaner path for merchants.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#b7c9d8] sm:text-lg">
                Just Pay helps businesses get connected to suitable payment solutions through a Fiserv referral partnership. We cut through the noise, qualify the opportunity, and help merchants get into the right process fast.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#33ddff] px-6 py-3.5 text-sm font-semibold text-[#082032] transition hover:bg-[#1ec8ef]"
                >
                  Get started
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-[#c7dceb] bg-white/80 px-6 py-3.5 text-sm font-medium text-[#163247] transition hover:border-[#9ac4dd] hover:bg-white"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/8 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8fe8ff]">Why merchants use Just Pay</p>
              <div className="mt-6 space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_100%)] px-4 py-4 text-sm leading-7 text-[#e6f6ff] shadow-sm">
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-[#d7e7f4] bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">Products and solutions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
              What Just Pay can help merchants access
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5a7183]">
              Based on the current referral-partnership structure, Just Pay is positioned to help merchants get connected to business payment solutions through Fiserv.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((product, index) => (
              <article
                key={product.title}
                className={`rounded-[30px] border p-6 shadow-sm ${
                  index % 2 === 0
                    ? "border-[#d9ecf6] bg-[linear-gradient(180deg,#ffffff_0%,#f5fbff_100%)]"
                    : "border-[#d8efe5] bg-[linear-gradient(180deg,#ffffff_0%,#f2fbf6_100%)]"
                }`}
              >
                <h3 className="text-xl font-semibold text-[#082032]">{product.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#587083]">{product.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b border-[#d7e7f4] bg-[linear-gradient(180deg,#f7fbff_0%,#eef8ff_100%)]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
              Simple, commercial, and built to move quickly.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`rounded-[30px] border p-6 shadow-sm ${
                  index === 1
                    ? "border-[#d8efe5] bg-[linear-gradient(180deg,#ffffff_0%,#f0fbf4_100%)]"
                    : "border-[#d9ecf6] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)]"
                }`}
              >
                <p className="text-sm font-semibold text-[#16a34a]">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#082032]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#587083]">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7e7f4] bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">For merchants</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
              Better for business owners who want clarity, not hassle.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#5a7183]">
              If you are reviewing payment acceptance, EFTPOS, or broader merchant payment needs, Just Pay gives you a cleaner starting point and helps get the process moving properly.
            </p>
          </div>

          <div className="rounded-[34px] border border-[#d8efe5] bg-[linear-gradient(180deg,#ffffff_0%,#f2fbf6_100%)] p-6 shadow-sm">
            <p className="text-sm font-medium text-[#082032]">What happens after referral?</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#29475c]">
              <li>• Fiserv makes first merchant contact, targeted within two business days</li>
              <li>• Product fit and paperwork are handled inside the Fiserv sales process</li>
              <li>• Onboarding, assessment, training, and ongoing support sit with Fiserv</li>
              <li>• Just Pay stays focused on clean lead flow and commercial opportunity creation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7e7f4] bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">FAQs</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
              Questions merchants will ask
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className={`rounded-[30px] border p-6 shadow-sm ${
                  index % 2 === 0
                    ? "border-[#d9ecf6] bg-[linear-gradient(180deg,#ffffff_0%,#f5fbff_100%)]"
                    : "border-[#d8efe5] bg-[linear-gradient(180deg,#ffffff_0%,#f2fbf6_100%)]"
                }`}
              >
                <h3 className="text-lg font-semibold text-[#082032]">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[#587083]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[linear-gradient(180deg,#e9f7ff_0%,#dff7ee_100%)]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[40px] border border-[#cfe6f2] bg-white/85 p-8 shadow-[0_24px_80px_rgba(34,84,122,0.12)] backdrop-blur sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
                Ready to explore the right payment setup for your business?
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5a7183]">
                Talk to Just Pay and we will help direct you into the right referral pathway.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:text-right">
              <a
                href="mailto:info@justpay.co.nz"
                className="inline-flex rounded-full bg-[#33ddff] px-6 py-3.5 text-sm font-semibold text-[#082032] transition hover:bg-[#1ec8ef]"
              >
                info@justpay.co.nz
              </a>
              <p className="mt-4 text-sm text-[#678198]">Also intended for justpay.au</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
