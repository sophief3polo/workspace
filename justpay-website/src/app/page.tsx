"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
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
  { href: "#contact", label: "Get a quote" },
];

type FormState = {
  legalBusinessName: string;
  tradingName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  country: string;
  businessAddress: string;
  website: string;
  abnOrNzbn: string;
  industryType: string;
  monthlyCardTurnover: string;
  averageTransactionValue: string;
  settlementBank: string;
  paymentNeeds: string[];
  notes: string;
  consent: boolean;
};

const paymentNeedOptions = [
  "EFTPOS or countertop terminals",
  "Portable or mobile payments",
  "Online payments or eCommerce",
  "Integrated point of sale",
  "Multi-location merchant setup",
];

const initialFormState: FormState = {
  legalBusinessName: "",
  tradingName: "",
  contactName: "",
  jobTitle: "",
  email: "",
  phone: "",
  country: "New Zealand",
  businessAddress: "",
  website: "",
  abnOrNzbn: "",
  industryType: "",
  monthlyCardTurnover: "",
  averageTransactionValue: "",
  settlementBank: "",
  paymentNeeds: [],
  notes: "",
  consent: false,
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 640);
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const requiredFieldsComplete = useMemo(() => {
    return [
      formState.legalBusinessName,
      formState.contactName,
      formState.email,
      formState.phone,
      formState.country,
      formState.businessAddress,
      formState.abnOrNzbn,
      formState.industryType,
      formState.monthlyCardTurnover,
    ].every((value) => value.trim().length > 0) && formState.consent;
  }, [formState]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && name === "consent") {
      const target = event.target as HTMLInputElement;
      setFormState((current) => ({ ...current, consent: target.checked }));
      return;
    }

    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handlePaymentNeedChange = (option: string) => {
    setFormState((current) => {
      const exists = current.paymentNeeds.includes(option);
      return {
        ...current,
        paymentNeeds: exists
          ? current.paymentNeeds.filter((item) => item !== option)
          : [...current.paymentNeeds, option],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!requiredFieldsComplete) return;

    setSubmitState("submitting");

    window.setTimeout(() => {
      setSubmitState("success");
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#f6fbff] text-[#0f172a]">
      <section className="relative overflow-hidden border-b border-[#0f2f46] bg-[linear-gradient(180deg,#06111a_0%,#0a2030_52%,#10324a_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(51,221,255,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(10,132,255,0.18),transparent_28%),radial-gradient(circle_at_center_right,rgba(16,185,129,0.10),transparent_24%)]" />
        <div className="absolute inset-0 opacity-70" style={{ transform: "translateY(-8%) scale(1.08)", willChange: "transform" }}>
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#33ddff]/12 blur-3xl" />
          <div className="absolute right-[-4rem] top-28 h-72 w-72 rounded-full bg-[#0ea5e9]/14 blur-3xl" />
          <div className="absolute left-[28%] top-[34%] h-40 w-40 rounded-full bg-white/8 blur-3xl" />
        </div>
        <div className="absolute inset-x-0 top-[22%] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" style={{ transform: "translateY(-18px)" }} />
        <div className="absolute inset-x-0 bottom-16 hidden lg:block" style={{ transform: "translateY(28px)" }}>
          <div className="mx-auto h-24 max-w-[1120px] rounded-full border border-white/8 bg-white/[0.03] blur-2xl" />
        </div>
        <div className={`sticky top-0 z-40 border-b border-white/10 bg-[#07141f]/78 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "shadow-[0_18px_44px_rgba(0,0,0,0.26)]" : ""
        }`}>
          <header className={`mx-auto flex max-w-[1240px] items-end justify-between gap-4 px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
            isScrolled ? "py-2.5" : "py-4"
          }`}>
            <div className="flex min-w-0 flex-1 items-end gap-3 sm:gap-4">
              <div className={`rounded-[20px] border border-white/10 bg-[#081723]/90 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 ${
                isScrolled ? "px-2.5 py-2 sm:px-3 sm:py-2.5" : "px-3 py-2.5 sm:px-4 sm:py-3"
              }`}>
                <Image
                  src="/justpay-logo.png"
                  alt="Just Pay"
                  width={220}
                  height={72}
                  className={`h-auto transition-all duration-300 ${isScrolled ? "w-[112px] sm:w-[190px]" : "w-[132px] sm:w-[230px]"}`}
                  priority
                />
              </div>
              <div className="min-w-0 flex flex-1 flex-col justify-end self-stretch">
                <div className="hidden h-8 w-px bg-white/12 sm:block" />
                <div className={`mt-auto flex flex-col gap-2 transition-all duration-300 sm:flex-row sm:items-end sm:gap-3 ${
                  isScrolled ? "sm:gap-2" : ""
                }`}>
                  {!isMobile ? (
                    <p className={`text-[#b7c9d8] transition-all duration-300 ${isScrolled ? "text-[11px] leading-4 sm:text-xs" : "text-xs leading-5 sm:text-sm"}`}>
                      Payment referral partner for growing merchants
                    </p>
                  ) : null}
                  <div className={`inline-flex w-fit items-center rounded-full border border-[#f97316]/20 bg-white shadow-sm transition-all duration-300 ${
                    isScrolled ? "gap-1 px-2 py-0.5" : "gap-1.5 px-2.5 py-1"
                  }`}>
                    <span className={`font-semibold uppercase text-[#9a5a28] transition-all duration-300 ${isScrolled ? "text-[8px] tracking-[0.12em]" : "text-[9px] tracking-[0.16em]"}`}>Powered by</span>
                    <Image
                      src="/fiserv-logo-orange-ff6600.svg"
                      alt="Fiserv"
                      width={48}
                      height={24}
                      className={`h-auto transition-all duration-300 ${isScrolled ? "w-[40px]" : "w-[48px]"}`}
                    />
                  </div>
                </div>
              </div>
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
              className={`mt-1 inline-flex shrink-0 items-center justify-center rounded-2xl border border-white/14 bg-white/10 text-white shadow-sm transition-all hover:border-[#59dfff] hover:bg-white/14 md:hidden ${
                isScrolled ? "h-10 w-10" : "h-11 w-11"
              }`}
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
            <div className="mx-auto max-w-[1240px] px-5 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-[28px] border border-white/12 bg-[#0b1d2b]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
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
            </div>
          ) : null}
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 py-10 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
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
                  Get a quote
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
          <div className="grid gap-8 rounded-[40px] border border-[#cfe6f2] bg-white/90 p-8 shadow-[0_24px_80px_rgba(34,84,122,0.12)] backdrop-blur lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#0f7abf]">Get a quote</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082032] sm:text-4xl">
                Start your merchant application with the right details upfront.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5a7183]">
                This form is built around the key merchant agreement application details Fiserv typically needs to assess a business properly. The stronger the detail, the cleaner the referral.
              </p>

              <div className="mt-8 rounded-[28px] border border-[#d9ecf6] bg-[linear-gradient(180deg,#ffffff_0%,#f5fbff_100%)] p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#082032]">Required merchant details</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#29475c]">
                  <li>• Legal business name and trading name</li>
                  <li>• Primary contact details</li>
                  <li>• Business address and country</li>
                  <li>• ABN, NZBN, or company registration number</li>
                  <li>• Industry type and estimated card turnover</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[32px] border border-[#d9ecf6] bg-white p-6 shadow-sm sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247] sm:col-span-2">
                  Legal business name *
                  <input name="legalBusinessName" value={formState.legalBusinessName} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247] sm:col-span-2">
                  Trading name
                  <input name="tradingName" value={formState.tradingName} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Contact name *
                  <input name="contactName" value={formState.contactName} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Job title
                  <input name="jobTitle" value={formState.jobTitle} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Email address *
                  <input type="email" name="email" value={formState.email} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Phone number *
                  <input name="phone" value={formState.phone} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Country *
                  <select name="country" value={formState.country} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]">
                    <option>New Zealand</option>
                    <option>Australia</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  ABN / NZBN / Company number *
                  <input name="abnOrNzbn" value={formState.abnOrNzbn} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247] sm:col-span-2">
                  Business address *
                  <input name="businessAddress" value={formState.businessAddress} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Website
                  <input name="website" value={formState.website} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Industry type *
                  <input name="industryType" value={formState.industryType} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Estimated monthly card turnover *
                  <input name="monthlyCardTurnover" value={formState.monthlyCardTurnover} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247]">
                  Average transaction value
                  <input name="averageTransactionValue" value={formState.averageTransactionValue} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247] sm:col-span-2">
                  Settlement bank
                  <input name="settlementBank" value={formState.settlementBank} onChange={handleChange} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>

                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-medium text-[#163247]">Payment needs</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {paymentNeedOptions.map((option) => (
                      <label key={option} className="flex items-start gap-3 rounded-2xl border border-[#d9ecf6] bg-[#f9fcff] px-4 py-3 text-sm text-[#29475c]">
                        <input
                          type="checkbox"
                          checked={formState.paymentNeeds.includes(option)}
                          onChange={() => handlePaymentNeedChange(option)}
                          className="mt-1 h-4 w-4 rounded border-[#9ec7dc] text-[#0f7abf]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="flex flex-col gap-2 text-sm font-medium text-[#163247] sm:col-span-2">
                  Notes about your business
                  <textarea name="notes" value={formState.notes} onChange={handleChange} rows={5} className="rounded-2xl border border-[#cfe0ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#082032] outline-none transition focus:border-[#33ddff]" />
                </label>
              </div>

              <label className="mt-6 flex items-start gap-3 rounded-2xl border border-[#d9ecf6] bg-[#f9fcff] px-4 py-4 text-sm leading-6 text-[#29475c]">
                <input type="checkbox" name="consent" checked={formState.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded border-[#9ec7dc] text-[#0f7abf]" />
                <span>
                  I confirm these business details are accurate and I consent to Just Pay using them to prepare and submit a referral into the Fiserv process. *
                </span>
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-[#082032]">Button label: Get a quote</p>
                  <p className="mt-1 text-sm text-[#678198]">Required fields are aligned to merchant application qualification, not just a generic contact form.</p>
                </div>

                <button
                  type="submit"
                  disabled={!requiredFieldsComplete || submitState === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-[#33ddff] px-6 py-3.5 text-sm font-semibold text-[#082032] transition hover:bg-[#1ec8ef] disabled:cursor-not-allowed disabled:bg-[#a9edf8]"
                >
                  {submitState === "submitting" ? "Submitting..." : submitState === "success" ? "Quote request received" : "Get a quote"}
                </button>
              </div>

              {submitState === "success" ? (
                <p className="mt-4 text-sm text-[#0f7a45]">
                  Thanks, your merchant details are ready for the next referral step. The next move is wiring this form to a live submission endpoint or CRM.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
