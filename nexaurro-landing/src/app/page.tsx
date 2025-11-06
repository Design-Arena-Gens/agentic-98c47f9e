const services = [
  {
    title: "Digital Marketing",
    description:
      "Growth playbooks across SEO, paid media, and automation that compound measurable results.",
    icon: "📈",
  },
  {
    title: "Website Development",
    description:
      "High-performing web experiences engineered with conversion-first UX and future-proof tech.",
    icon: "🛠️",
  },
  {
    title: "UI/UX Design",
    description:
      "Strategic design systems that transform complexity into intuitive journeys and brand affinity.",
    icon: "🎨",
  },
  {
    title: "Business Solutions",
    description:
      "Automation, analytics, and CX frameworks that unlock operational clarity and scale.",
    icon: "🚀",
  },
];

const process = [
  {
    step: "Discover",
    text: "We dive into your goals, customer insights, and data to frame the most impactful opportunities.",
  },
  {
    step: "Design",
    text: "Our strategists and designers co-create bold yet pragmatic experiences aligned to your brand DNA.",
  },
  {
    step: "Build",
    text: "We deliver resilient digital products that perform beautifully across every device and platform.",
  },
  {
    step: "Accelerate",
    text: "Launch is just the beginning—we iterate with real-time intelligence to keep momentum accelerating.",
  },
];

const metrics = [
  { label: "Growth-focused clients", value: "140+" },
  { label: "Average ROI uplift", value: "212%" },
  { label: "Campaigns launched", value: "380" },
];

const testimonials = [
  {
    quote:
      "Nexaurro orchestrated our rebrand, site rebuild, and go-to-market launch under one integrated strategy—our pipeline doubled in a quarter.",
    name: "Sophia Bennett",
    role: "CMO, Vertex Labs",
  },
  {
    quote:
      "From UX research to performance marketing, their team ships with uncommon agility and clarity.",
    name: "Marcus Hill",
    role: "Founder, Statusline",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(192,132,252,0.18),_transparent_60%)]" />
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-lg font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
              N
            </div>
            <span className="text-xl font-semibold tracking-wide">Nexaurro</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="transition-colors hover:text-white" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-white" href="#process">
              Process
            </a>
            <a className="transition-colors hover:text-white" href="#proof">
              Proof
            </a>
            <a className="transition-colors hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-200 md:inline-flex"
            href="#contact"
          >
            Book a strategy call
          </a>
        </header>
        <main>
          <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-10 text-slate-100 md:flex-row md:items-center">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                Full-stack digital partner
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Build momentum for your next era of growth.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Nexaurro blends strategy, design, and engineering to craft digital experiences that convert, retain, and scale. We turn vision into measurable velocity.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
                  href="#contact"
                >
                  Start a project
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                  href="#services"
                >
                  Explore services
                </a>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-3xl font-semibold text-white">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">
                Trusted by ambitious teams
              </h2>
              <p className="text-sm text-slate-300">
                We partner with venture-backed startups, global brands, and category challengers to launch digital experiences that outperform benchmarks.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
                {[
                  "SaaS",
                  "E-commerce",
                  "Fintech",
                  "Healthcare",
                  "Professional Services",
                  "Enterprise",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 text-sm text-slate-200">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                  >
                    <p className="text-base text-slate-200">“{testimonial.quote}”</p>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {testimonial.name} · {testimonial.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-6xl px-6 pb-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Services engineered for outcomes
                </h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  A multidisciplinary team orchestrating strategy, design, and development to unlock repeatable growth across every touchpoint.
                </p>
              </div>
              <a
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-white"
                href="#process"
              >
                See how we work
              </a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-300/40"
                >
                  <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-bl from-cyan-400/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    Explore capability
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-7-7 7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="process" className="mx-auto max-w-6xl px-6 pb-24">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900/50 p-12">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  The Nexaurro method
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Integrated by design, optimized by data.
                </h2>
                <p className="mt-4 text-slate-300">
                  We align cross-functional teams within a unified framework that keeps strategy accountable to velocity and value.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-4">
                {process.map((stage, index) => (
                  <div key={stage.step} className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-lg font-semibold text-cyan-200 ring-1 ring-cyan-400/40">
                      {index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {stage.step}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {stage.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="proof" className="mx-auto max-w-6xl px-6 pb-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Outcomes
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Data-anchored campaigns and experiences.
                </h2>
                <ul className="mt-6 space-y-5 text-sm text-slate-300">
                  <li>
                    Conversion-led redesign for a B2B SaaS platform that lifted qualified demos by 190% within eight weeks.
                  </li>
                  <li>
                    Multichannel acquisition engine for an e-commerce brand, reducing CAC by 36% while tripling repeat purchases.
                  </li>
                  <li>
                    Global product launch hub with modular CMS architecture, enabling 12 localized rollouts in 60 days.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent p-10">
                <h3 className="text-2xl font-semibold text-white">What partners say</h3>
                <div className="mt-8 space-y-6">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                      <p className="text-base text-slate-200">“{testimonial.quote}”</p>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {testimonial.name} · {testimonial.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="relative mx-auto max-w-5xl px-6 pb-24">
            <div className="absolute inset-x-10 top-0 -z-10 h-52 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-cyan-500/20">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    Let’s build
                  </span>
                  <h2 className="mt-4 text-3xl font-semibold text-white">
                    Ready to unlock your next stage of digital growth?
                  </h2>
                  <p className="mt-4 text-slate-300">
                    Share your goals and we’ll craft a tailored roadmap within 48 hours.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-xs font-semibold text-cyan-200 uppercase tracking-wide">
                        Email
                      </span>
                      <p className="mt-1 text-base text-white">hello@nexaurro.com</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-xs font-semibold text-cyan-200 uppercase tracking-wide">
                        Offices
                      </span>
                      <p className="mt-1 text-base text-white">New York · London · Singapore</p>
                    </div>
                  </div>
                </div>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-white" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white" htmlFor="email">
                      Work email
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white" htmlFor="goal">
                      Primary goal
                    </label>
                    <select
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                      id="goal"
                      name="goal"
                      defaultValue="Growth marketing"
                    >
                      <option className="bg-slate-900" value="Growth marketing">
                        Growth marketing
                      </option>
                      <option className="bg-slate-900" value="Website redesign">
                        Website redesign
                      </option>
                      <option className="bg-slate-900" value="Product UI/UX">
                        Product UI/UX
                      </option>
                      <option className="bg-slate-900" value="Digital transformation">
                        Digital transformation
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white" htmlFor="message">
                      Tell us about your project
                    </label>
                    <textarea
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                      id="message"
                      name="message"
                      placeholder="Key objectives, timeline, budget range"
                      rows={4}
                    />
                  </div>
                  <button
                    className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
                    type="submit"
                  >
                    Request strategy blueprint
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xl font-semibold text-white">Nexaurro</span>
              <p className="mt-1">Integrated digital services for the leaders of tomorrow.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#process">
                Process
              </a>
              <a className="transition hover:text-white" href="#proof">
                Proof
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Nexaurro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
