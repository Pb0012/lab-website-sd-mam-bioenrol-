import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building2, Award, Users, BookOpen, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Our Lab | BIOENROL · Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Vision, mission, and research philosophy of BIOENROL (Biological & Environmental Research Laboratory), Department of Chemical Engineering, National Institute of Technology Durgapur, headed by Prof. Susmita Dutta.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-16 sm:py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs backdrop-blur-md">
            <Building2 className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>NIT Durgapur • Department of Chemical Engineering</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-2 leading-tight">
            BIOENROL · <span className="text-gradient-emerald font-black">Bio</span>logical &amp; <span className="text-gradient-emerald font-black">En</span>vi<span className="text-gradient-emerald font-black">ro</span>nmental Research <span className="text-gradient-emerald font-black">L</span>aboratory
          </h1>
          <div className="mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm font-bold tracking-wide uppercase text-emerald-800 dark:text-emerald-400">
            <span>Science & Technology</span>
            <span className="text-emerald-400 dark:text-emerald-600">·</span>
            <span>Innovation</span>
            <span className="text-emerald-400 dark:text-emerald-600">·</span>
            <span>Sustainability</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            Headed by <strong>Prof. Susmita Dutta</strong>, BIOENROL (Biological & Environmental Research Laboratory) at NIT Durgapur combines biochemical reaction engineering, microalgae-bacterial consortia, adsorption technology, and transport phenomena to solve environmental and industrial challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
            
            {/* Vision & Mission */}
            <div className="glossy-card glossy-sheen hover-glow p-7 sm:p-9 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Vision & Mission</span>
              </h2>
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                To be a premier center of excellence in <strong>biochemical reaction engineering, environmental biotechnology, and separation science</strong>. Grounded in the rigorous foundations of chemical engineering, our mission is to address pressing global and regional sustainability challenges in industrial wastewater treatment, circular economy, and green technologies.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our active research mandates focus on developing scalable phycoremediation processes for complex effluents (steel plant, coke-oven, and petroleum refinery wastewaters), designing cost-effective adsorbent materials from agricultural/industrial byproducts, and evaluating integrated carbon capture and algal biofuel systems.
              </p>
            </div>

            {/* Research Philosophy */}
            <div className="glossy-card hover-glow p-7 sm:p-9 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                <span>Our Research Philosophy</span>
              </h2>
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                We believe that conquering industrial pollution and resource depletion requires an interdisciplinary approach that bridges fundamental biology with rigorous chemical engineering design:
              </p>
              <ul className="grid sm:grid-cols-3 gap-3 my-5 text-xs">
                <li className="p-3.5 rounded-xl bg-white/70 dark:bg-emerald-950/40 border border-white/80 dark:border-emerald-500/20 text-emerald-950 dark:text-emerald-200 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1)]">
                  <strong className="block font-bold mb-1">Biological Systems:</strong>
                  Microalgal strains (e.g. <em>Graesiella emersonii</em> sp. NITD 23, <em>Chlorella</em>), bacterial consortia syntrophy, and enzymatic kinetics.
                </li>
                <li className="p-3.5 rounded-xl bg-white/70 dark:bg-teal-950/40 border border-white/80 dark:border-teal-500/20 text-teal-950 dark:text-teal-200 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1)]">
                  <strong className="block font-bold mb-1">Chemical Engineering:</strong>
                  Mass transfer, bioreactor hydrodynamics, liquid-phase adsorption equilibria, and membrane contactors.
                </li>
                <li className="p-3.5 rounded-xl bg-white/70 dark:bg-[#131b2e] border border-white/80 dark:border-slate-700 text-slate-900 dark:text-slate-200 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1)]">
                  <strong className="block font-bold mb-1">Environmental Impact:</strong>
                  Heavy metal abatement, dye degradation, effluent standard compliance, and pilot-scale process validation.
                </li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed">
                This philosophy ensures our scientific discoveries translate from shake flasks and bench-scale experiments into viable, pilot-tested methodologies with industrial partners.
              </p>
            </div>

            {/* Laboratory History */}
            <div className="glossy-card hover-glow p-7 sm:p-9 rounded-2xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-slate-400" />
                <span>Laboratory History & Leadership</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Established within the Department of Chemical Engineering at NIT Durgapur following Prof. Susmita Dutta's appointment in 2007, the laboratory has grown into one of eastern India’s foremost centers for environmental bioprocessing. Prof. Dutta served as the <strong>Head of the Department (HOD) of Chemical Engineering from July 2017 to July 2019</strong>, and has guided 22 doctoral dissertations (16 awarded, 6 ongoing) alongside post-doctoral and master's scholars.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                The laboratory has secured competitive sponsored research grants from national agencies including the <strong>Department of Biotechnology (DBT)</strong>, the <strong>Ministry of Education (IMPRINT scheme)</strong>, the <strong>Science and Engineering Research Board (SERB-DST)</strong>, the <strong>Indian Institute of Chemical Engineers (IIChE)</strong>, and the <strong>Department of Science and Technology, Government of West Bengal</strong>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Prof. Dutta’s international scholarly engagements include serving as a <strong>Visiting Research Fellow at University of Massachusetts Dartmouth (USA)</strong>, advanced biofuel training at the <strong>University of Alberta (Canada)</strong>, and delivering chemical engineering modules as Guest Faculty at <strong>Caledonian College of Engineering (Sultanate of Oman)</strong>.
              </p>
            </div>

          </div>

          {/* Right Column: PI & Collaborations */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* PI Snapshot */}
            <div className="glossy-card glossy-sheen hover-glow p-6 sm:p-8 rounded-2xl">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl mb-5 overflow-hidden border-2 border-white/90 dark:border-slate-700 shadow-[0_8px_20px_-6px_rgba(6,78,59,0.15)] relative">
                <Image
                  src="/images/susmita-dutta.jpg"
                  alt="Prof. Susmita Dutta - Principal Investigator"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Prof. (Dr.) Susmita Dutta</h3>
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2">Professor & Principal Investigator</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Ph.D. (Jadavpur) • M.Tech (IIT Kharagpur) • B.Tech (Calcutta)</span>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Head of the Biological & Environmental Research Laboratory at NIT Durgapur. Specializing in biochemical reaction engineering, industrial wastewater phycoremediation, and low-cost adsorption matrices.
              </p>
              <div className="space-y-2 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                <a
                  href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300"
                >
                  <span>Official Faculty Profile at NIT DGP</span>
                  <ExternalLink size={12} />
                </a>
                <div>
                  <Link
                    href="/members"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    <span>View Research Scholars & Team →</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Key Institutional Collaborations */}
            <div className="bg-slate-900 dark:bg-[#0b121e] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-800 dark:border-emerald-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-400" />
                <span>Collaborations & Sponsors</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>Ministry of Education (MoE) — IMPRINT Scheme, Govt. of India</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>Science and Engineering Research Board (SERB), DST, Govt. of India</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>Steel Authority of India Limited (SAIL) & Durgapur Steel Plant</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>Department of Science & Technology (DST), Govt. of West Bengal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>CSIR-CMERI Durgapur, University of Calcutta & IIT Kharagpur</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-5 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-xs block transition-colors"
                >
                  Partner With Our Laboratory
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}