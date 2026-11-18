"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Leaf, Dna, Beaker, Droplets, Zap, LineChart, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    title: "Algal Biotechnology",
    emoji: "🌱",
    subtitle: "Cultivation & Photobiology",
    description: "Algal cultivation, growth kinetics, biomass productivity, nutrient optimization and stress-based lipid induction in open and closed systems.",
    parameters: ["Specific Growth Rate (µ)", "Biomass Yield (g/L/d)", "Lipid Induction", "Light PAR Flux"],
    icon: Leaf,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    glowColor: "group-hover:border-emerald-400",
  },
  {
    title: "Bacterial Systems",
    emoji: "🦠",
    subtitle: "Microbial Consortia & Syntrophy",
    description: "Bacterial growth kinetics, metabolic biodegradation of refractory pollutants, quorum sensing, and symbiotic algal-bacterial consortia.",
    parameters: ["Monod Kinetics", "Consortia Symbiosis", "Bio-flocculation", "EPS Secretion"],
    icon: Dna,
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    glowColor: "group-hover:border-teal-400",
  },
  {
    title: "Bioprocess Engineering",
    emoji: "⚗",
    subtitle: "Bioreactor Design & Scale-up",
    description: "Bioreactor hydrodynamic design, scale-up criteria, volumetric mass transfer (kLa), process optimization, and continuous photobioreactor operation.",
    parameters: ["Volumetric kLa", "Gas Holdup", "Impeller Power (P/V)", "Mixing Time"],
    icon: Beaker,
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    glowColor: "group-hover:border-cyan-400",
  },
  {
    title: "Environmental Biotechnology",
    emoji: "💧",
    subtitle: "Industrial Phycoremediation",
    description: "Phycoremediation of complex industrial effluents, industrial wastewater treatment, heavy metal biosorption, and nutrient removal.",
    parameters: ["COD/BOD Reduction", "Nitrate & Phosphate", "Heavy Metal (Cr/Pb)", "Effluent Standards"],
    icon: Droplets,
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    glowColor: "group-hover:border-blue-400",
  },
  {
    title: "Bioproducts",
    emoji: "🌿",
    subtitle: "Valorization & Value Addition",
    description: "Biomass valorization, bio-oil extraction, biochemical platform chemicals, and value-added sustainable bioproducts.",
    parameters: ["Biochemical Platform", "High Value Metabolites", "Biomass Extraction", "Green Byproducts"],
    icon: Zap,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    glowColor: "group-hover:border-amber-400",
  },
  {
    title: "Emerging Pollutants",
    emoji: "💧",
    subtitle: "Micropollutant Abatement",
    description: "Degradation and mitigation of recalcitrant emerging contaminants, endocrine disruptors, pharmaceutical effluents, and industrial micropollutants.",
    parameters: ["Endocrine Disruptors", "Pharmaceutical Effluents", "Micropollutant Removal", "Advanced Remediation"],
    icon: LineChart,
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    glowColor: "group-hover:border-teal-400",
  },
];

export function ResearchAreas() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Centerpiece Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Research Areas
          </h2>
          <p className="text-slate-600 mt-2 text-base md:text-lg leading-relaxed">
            Interdisciplinary research domains at the frontier of biochemical engineering, microbial ecology, and environmental sustainability at NIT Durgapur.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Card className={`h-full flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 border border-slate-200 ${area.glowColor} shadow-xs hover:shadow-lg bg-white rounded-2xl group`}>
                <CardContent className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs bg-slate-50 border-slate-200 text-slate-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <area.icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl" aria-hidden="true">{area.emoji}</span>
                    </div>

                    <div className="mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                        {area.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>

                  {/* Chemical Engineering Parameters / Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {area.parameters.map((p, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono font-medium border border-slate-200">
                          {p}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/research"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors"
                    >
                      <span>Explore Publications & Ongoing Projects</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}