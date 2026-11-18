import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Leaf, Microscope, FlaskConical, Droplets,
  Dna, Sprout, ChartNoAxesCombined, BookOpen, Users, Building2,
  Recycle, Beaker, GraduationCap, Network, Waves
} from "lucide-react";
import PISpotlight from "@/components/sections/PISpotlight";

const research = [
  {
    n: "01", title: "Algal Biotechnology",
    desc: "Algal cultivation, growth kinetics, biomass productivity, photobiology and nutrient optimization.",
    icon: Sprout, href: "/research",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "02", title: "Bacterial Systems",
    desc: "Bacterial growth, microbial metabolism, biodegradation and algal–bacterial interactions.",
    icon: Dna, href: "/research",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "03", title: "Bioprocess Engineering",
    desc: "Bioreactor design, mass transfer, process development, optimization and scale-up.",
    icon: FlaskConical, href: "/research",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "04", title: "Environmental Biotechnology",
    desc: "Phycoremediation, wastewater treatment, nutrient recovery and pollutant removal.",
    icon: Droplets, href: "/research",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "05", title: "Bioproducts",
    desc: "Biomass valorization, biochemical extraction, and the development of value-added green bioproducts.",
    icon: Leaf, href: "/research",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85",
  },
  {
    n: "06", title: "Emerging Pollutants",
    desc: "Degradation and mitigation of recalcitrant emerging contaminants, micropollutants, and toxic industrial effluents.",
    icon: Waves, href: "/research",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=900&q=85",
  },
];

const updates = [
  "New publications in Process Safety and Environmental Protection & Water Science and Technology",
  "Completed flagship IMPRINT project on steel industry wastewater phycoremediation alongside active DBT investigations",
  "Ph.D. and postgraduate research opportunities at Department of Chemical Engineering, NIT Durgapur",
];

const missionPillars = [
  {
    icon: Leaf, title: "Understand",
    text: "Investigate microbial kinetics, algal-bacterial interactions, and biochemical reaction mechanisms.",
  },
  {
    icon: FlaskConical, title: "Engineer",
    text: "Design robust bioreactors, novel adsorption matrices, and pilot-scale separation systems.",
  },
  {
    icon: Recycle, title: "Sustain",
    text: "Pioneer industrial wastewater reclamation, carbon capture, and clean environmental solutions.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white dark:bg-[#090e17] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* HERO */}
      <section className="relative isolate bg-[#f2f8f4] dark:bg-[#071318] overflow-hidden">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[36rem] w-[36rem] rounded-full bg-emerald-200/50 dark:bg-emerald-950/40 blur-3xl animate-aurora" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-teal-200/40 dark:bg-teal-950/30 blur-3xl animate-aurora" style={{ animationDelay: '-7s' }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/90 dark:border-emerald-500/30 bg-white/80 dark:bg-[#0e1b1f]/90 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 dark:text-emerald-300 shadow-[0_2px_10px_rgba(7,61,50,0.06),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              BIOENROL · NIT Durgapur
            </div>
            <h1 className="max-w-[720px] text-[1.85rem] xs:text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-[#103d32] dark:text-white">
              <span className="block font-black tracking-wider text-gradient-emerald text-3xl xs:text-4xl sm:text-6xl lg:text-[4rem] font-serif mb-2 sm:mb-3">
                BIOENROL
              </span>
              <span className="block leading-[1.18]">
                <span className="text-gradient-emerald font-black">Bio</span>logical &amp; <span className="text-gradient-emerald font-black">En</span>vi<span className="text-gradient-emerald font-black">ro</span>nmental
              </span>
              <span className="block leading-[1.18]">
                Research <span className="text-gradient-emerald font-black">L</span>aboratory
              </span>
            </h1>
            <div className="mt-3 sm:mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm font-bold tracking-wide uppercase text-emerald-800 dark:text-emerald-400">
              <span>Science & Technology</span>
              <span className="text-emerald-400 dark:text-emerald-600">·</span>
              <span>Innovation</span>
              <span className="text-emerald-400 dark:text-emerald-600">·</span>
              <span>Sustainability</span>
            </div>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm leading-relaxed sm:text-base sm:leading-7 lg:text-lg lg:leading-8 text-slate-600 dark:text-slate-300">
              Led by <strong>Prof. Susmita Dutta</strong> at the Department of Chemical Engineering, National Institute of Technology Durgapur, BIOENROL focuses on developing sustainable bioprocesses and innovative treatment strategies for industrial wastewater, exploring phycoremediation, biochemical reaction engineering, adsorption, CO₂ capture, and environmental biotechnology to address critical challenges in pollution control and resource recovery.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
              <Link href="/research" className="w-full xs:w-auto justify-center group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#09875f] to-[#065e42] hover:from-[#0aa373] hover:to-[#07704f] dark:from-emerald-600 dark:to-teal-700 px-5 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(8,118,83,0.32),inset_0_1px_1.5px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 active:scale-95 text-center">
                Explore our research <ArrowRight size={16} className="transition group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link href="/about" className="w-full xs:w-auto justify-center inline-flex items-center gap-2 rounded-xl border border-white/90 dark:border-emerald-500/30 bg-white/75 dark:bg-[#0e1b1f]/80 px-5 py-3 sm:py-3.5 text-sm font-semibold text-[#164b3d] dark:text-emerald-300 shadow-[0_2px_8px_rgba(7,61,50,0.06),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-xl transition hover:border-emerald-400 hover:bg-white dark:hover:bg-[#132328] hover:-translate-y-0.5 text-center">
                About the laboratory
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-x-3 sm:gap-y-2.5 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-emerald-200">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/70 dark:bg-emerald-950/50 border border-emerald-900/10 dark:border-emerald-500/30 shadow-xs dark:shadow-[0_0_12px_rgba(16,185,129,0.12)]"><Sprout size={14} className="text-emerald-700 dark:text-emerald-400 shrink-0" /> Biochemical engineering</span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/70 dark:bg-emerald-950/50 border border-emerald-900/10 dark:border-emerald-500/30 shadow-xs dark:shadow-[0_0_12px_rgba(16,185,129,0.12)]"><Beaker size={14} className="text-emerald-700 dark:text-emerald-400 shrink-0" /> Phycoremediation & Adsorption</span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/70 dark:bg-emerald-950/50 border border-emerald-900/10 dark:border-emerald-500/30 shadow-xs dark:shadow-[0_0_12px_rgba(16,185,129,0.12)]"><Waves size={14} className="text-emerald-700 dark:text-emerald-400 shrink-0" /> Environmental solutions</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/50 via-teal-200/30 to-emerald-400/20 dark:from-emerald-950/40 dark:via-transparent dark:to-teal-950/30 blur-xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-[1.85rem] glossy-card glossy-sheen glossy-glow p-3 backdrop-blur-2xl">
              <div className="relative h-[300px] overflow-hidden rounded-[1.4rem] sm:h-[390px] lg:h-[440px]">
                <img
                  src="/images/algal-photobioreactor-hero.png"
                  alt="Biological & Environmental Research Laboratory photobioreactor and cultivation setup"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#052d24]/75 via-[#052d24]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Research in focus</p>
                    <p className="mt-1 max-w-xs text-xl font-semibold leading-tight sm:text-2xl">From biological kinetics to engineered environmental solutions.</p>
                  </div>
                  <span className="hidden rounded-full border border-white/40 bg-white/20 px-3.5 py-2 text-[10px] font-semibold backdrop-blur-md shadow-sm sm:inline-flex">BIOENROL · NIT Durgapur</span>
                </div>
              </div>
            </div>
            
            {/* Floating Metric 1 */}
            <div className="absolute -right-3 -top-4 hidden sm:block animate-float-gentle z-20">
              <div className="glossy-card glossy-sheen rounded-2xl p-3.5 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#164b3d] dark:text-emerald-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span>117+ Publications</span>
                </div>
                <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">Peer-reviewed SCI/SCIE Archive</p>
              </div>
            </div>

            {/* Floating Metric 2 */}
            <div className="absolute -left-4 -bottom-4 hidden sm:block z-20">
              <div className="glossy-card glossy-sheen rounded-2xl p-3.5 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  <span>IMPRINT & SERB Sponsored</span>
                </div>
                <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">Ministry of Education / DST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAB HIGHLIGHTS */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/90 dark:border-slate-800 bg-white/80 dark:bg-[#0e1726]/90 shadow-[0_16px_45px_-20px_rgba(4,62,46,0.12),inset_0_1px_2px_rgba(255,255,255,1)] dark:shadow-[0_16px_45px_-30px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:grid-cols-4">
          {[
            { icon: BookOpen, title: "Research projects", detail: "Explore our work", href: "/projects" },
            { icon: Microscope, title: "Research facilities", detail: "Capabilities", href: "/facilities" },
            { icon: Users, title: "Research team", detail: "Our people", href: "/members" },
            { icon: Building2, title: "Collaborations", detail: "Academic & industry", href: "/about" },
          ].map(({ icon: Icon, title, detail, href }, index) => (
            <Link key={title} href={href} className={`flex items-center gap-2.5 sm:gap-3.5 px-3 py-4 sm:px-6 sm:py-5 hover:bg-white/80 dark:hover:bg-emerald-950/20 transition-all group ${index % 2 === 0 ? "border-r border-emerald-950/8 dark:border-slate-800" : ""} ${index < 2 ? "border-b border-emerald-950/8 dark:border-slate-800 md:border-b-0" : ""} ${index === 1 ? "md:border-r" : ""} ${index === 2 ? "md:border-r" : ""}`}>
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl dark-icon-badge group-hover:scale-110 transition-all duration-300"><Icon size={18} className="sm:hidden" /><Icon size={21} className="hidden sm:block" /></span>
              <span className="min-w-0"><span className="block text-xs sm:text-sm font-semibold text-[#173f35] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors truncate">{title}</span><span className="mt-0.5 block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">{detail}</span></span>
            </Link>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-emerald-100/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400"><span className="h-px w-7 bg-emerald-600 dark:bg-emerald-400" /> Our mission</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#123d32] dark:text-white sm:text-4xl">
              Advancing biological & environmental engineering at NIT Durgapur.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Headed by Prof. Susmita Dutta, our mission is to understand microbial and microalgal reaction kinetics and engineer efficient, scalable bioprocesses and adsorption systems for heavy industry and clean water.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              By uniting chemical engineering transport phenomena with environmental biotechnology, we deliver real-world solutions for complex industrial effluents (steel, coke-oven, refinery), CO₂ sequestration, and resource recovery.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 group">Discover the laboratory <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {missionPillars.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="group rounded-2xl border border-white/90 dark:border-slate-800 bg-gradient-to-br from-white/95 via-white/80 to-emerald-50/40 dark:from-[#0e1726] dark:via-[#0e1726] dark:to-[#09111e] p-6 shadow-[0_12px_30px_-15px_rgba(4,62,46,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] dark:shadow-[0_12px_35px_-28px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover-glow">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl dark-icon-badge group-hover:scale-110 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300"><Icon size={24} /></span>
                <h3 className="mt-5 text-base font-semibold text-[#123d32] dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL INVESTIGATOR */}
      <PISpotlight />

      {/* RESEARCH */}
      <section className="bg-[#f4f8f5] dark:bg-[#070e17] py-16 sm:py-20 transition-colors duration-200 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-emerald-100/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">What we work on</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#123d32] dark:text-white sm:text-4xl">Research areas</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">Core specializations under Prof. Susmita Dutta at NIT Durgapur.</p>
            </div>
            <Link href="/research" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 group">View all research <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {research.map((r) => (
              <Link
                href={r.href}
                key={r.n}
                className="group overflow-hidden rounded-2xl border border-emerald-950/10 dark:border-emerald-500/25 bg-gradient-to-b from-white/95 via-white/85 to-emerald-50/30 dark:from-[#0d1624] dark:via-[#0e1b2d] dark:to-[#08121f] shadow-[0_12px_30px_-15px_rgba(4,62,46,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] dark:shadow-[0_12px_35px_-20px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-300 hover-glow dark:hover:border-emerald-400/50 dark:hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.22)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08121f]/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/90 dark:border-emerald-500/40 bg-white/90 dark:bg-[#071318]/90 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-emerald-900 dark:text-emerald-300 backdrop-blur-md shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_0_10px_rgba(16,185,129,0.25)]">
                    {r.n}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#103d32] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {r.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl dark-icon-badge group-hover:scale-110 transition-transform">
                      <r.icon size={19} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 font-normal">
                    {r.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Explore area <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-[1.75rem] glossy-card glossy-sheen glossy-glow hover-glow backdrop-blur-2xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[260px] overflow-hidden bg-emerald-900">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=85" alt="Bioprocess research equipment" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062f25]/60 to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-sm">IMPRINT Completed Project</span>
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">Featured Research Project</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#123d32] dark:text-white sm:text-3xl">Reclamation of Steel Industry Wastewater via Microalgal Phycoremediation</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Sponsored under the prestigious IMPRINT scheme (Ministry of Education / DST-SERB, Govt. of India) and headed by Prof. Susmita Dutta, this successfully completed flagship project developed whole-cell microalgal and bacterial-algal consortium frameworks for industrial effluent remediation and evaluated residual algal biomass for biofuel production.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#09875f] to-[#065e42] hover:from-[#0aa373] hover:to-[#07704f] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(8,118,83,0.32),inset_0_1px_1px_rgba(255,255,255,0.45)] transition">Explore projects <ArrowRight size={16} /></Link>
                <Link href="/publications" className="inline-flex items-center gap-2 rounded-xl border border-white/90 dark:border-slate-700 bg-white/80 dark:bg-[#131b2e] px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-[0_2px_8px_rgba(7,61,50,0.06),inset_0_1px_1px_rgba(255,255,255,1)] backdrop-blur-md transition hover:border-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-300">Related publications</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATES & FACILITIES */}
      <section className="bg-[#f4f8f5] dark:bg-[#070e17] py-16 sm:py-20 transition-colors duration-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">From the laboratory</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#123d32] dark:text-white sm:text-3xl">Updates & announcements</h2>
            <div className="mt-6 divide-y divide-emerald-100 dark:divide-slate-800">
              {updates.map((u, i) => <div key={u} className="flex gap-4 py-4"><span className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">0{i + 1}</span><p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{u}</p></div>)}
            </div>
            <Link href="/achievements" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300">View all updates <ArrowRight size={15} /></Link>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-400">Research infrastructure</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#123d32] dark:text-white sm:text-3xl">Laboratory facilities</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">Discover the advanced photobioreactors, analytical instrumentation, and computational modeling resources that empower the laboratory’s cutting-edge environmental bioprocess research.</p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white dark:border-slate-800 shadow-lg">
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=85" alt="Research laboratory interior" className="h-48 w-full object-cover" />
            </div>
            <Link href="/facilities" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300">Explore facilities <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#073d32] via-[#075640] to-[#0b7655] px-7 py-10 text-white shadow-[0_25px_70px_-35px_rgba(4,62,46,0.55)] sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-200">Opportunities & collaboration</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Interested in working with us?</h2>
              <p className="mt-4 leading-7 text-white/75">We welcome research discussions, student projects and academic or industry collaborations in microbial biotechnology and chemical engineering.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/open-positions" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#073d32] transition hover:bg-emerald-50">Join our team <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
