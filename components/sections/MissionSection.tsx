"use client";

import { motion } from "framer-motion";
import { Sparkles, Recycle, Users, ArrowRight, Dna, Beaker, Leaf } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Dna,
    title: "1. Microbial Consortia & Syntrophy",
    subtitle: "Fundamental Microbiology & Cellular Kinetics",
    description: "Engineering robust microalgal-bacterial symbiotic consortia. Utilizing bacterial CO₂ and growth factors to accelerate algal photosynthetic efficiency and lipid productivity under environmental stress.",
    linkText: "Explore Consortia Research",
    href: "/research",
    color: "from-emerald-50 via-white to-slate-50 border-emerald-200 text-emerald-800",
    badge: "Microbiology",
  },
  {
    icon: Beaker,
    title: "2. Bioprocess Transport & Scale-Up",
    subtitle: "Chemical Engineering Core",
    description: "Designing high-rate tubular and flat-panel photobioreactors. Investigating gas-liquid volumetric mass transfer (kLa), bubble hydrodynamics, light attenuation modeling, and computational fluid dynamics (CFD).",
    linkText: "View Reactor Hydrodynamics",
    href: "/facilities",
    color: "from-teal-50 via-white to-slate-50 border-teal-200 text-teal-800",
    badge: "Chemical Engineering",
  },
  {
    icon: Recycle,
    title: "3. Phycoremediation & Bio-Valorization",
    subtitle: "Environmental Sustainability & Energy",
    description: "Translating microbial systems for industrial effluent treatment (textile, distillery, heavy metals) coupled with hydrothermal liquefaction (HTL) to produce sustainable bio-oil, biochar, and platform biochemicals.",
    linkText: "Discover Phycoremediation",
    href: "/projects",
    color: "from-cyan-50 via-white to-slate-50 border-cyan-200 text-cyan-800",
    badge: "Circular Bioeconomy",
  },
];

export function MissionSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Our Research Philosophy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Three Pillars of Our Laboratory
          </h2>
          <p className="text-slate-600 mt-2 text-base md:text-lg leading-relaxed">
            Uniting fundamental microbiology, rigorous chemical engineering transport kinetics, and real-world environmental sustainability at NIT Durgapur.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-7 rounded-2xl bg-gradient-to-br ${pillar.color} border shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
                    <pillar.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-emerald-700 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-900 hover:underline transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}