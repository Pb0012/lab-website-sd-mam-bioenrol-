"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Activity,
  Thermometer,
  Droplet,
  SunMedium,
  Sparkles,
  Layers
} from "lucide-react";

const pipelineSteps = [
  { name: "Industrial Wastewater", desc: "Effluent collection & preliminary screening" },
  { name: "Wastewater Characterization", desc: "COD, BOD, Nitrate, Phosphate & Heavy Metals" },
  { name: "Algal / Bacterial Cultivation", desc: "Inoculation of Chlorella & Bacillus consortia" },
  { name: "Growth & Kinetic Analysis", desc: "Monod kinetics & daily OD680 tracking" },
  { name: "Pollutant Removal", desc: ">92% COD reduction & heavy metal biosorption" },
  { name: "Biomass Recovery", desc: "Bio-flocculation & high-speed centrifugation" },
  { name: "Biomass Valorization", desc: "Hydrothermal liquefaction (HTL) into bio-oil" },
  { name: "Process & Economic Analysis", desc: "Techno-economic & life-cycle assessment (LCA)" }
];

export function FeaturedProject() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Flagship Research Initiative</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Phycoremediation of Industrial Wastewater
          </h2>
          <p className="text-slate-600 mt-2 text-base md:text-lg leading-relaxed">
            Real-world environmental bioprocessing: Translating microbial consortia to treat complex industrial effluents while recovering sustainable bioenergy at NIT Durgapur.
          </p>
        </div>

        <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 lg:flex items-stretch">
          
          {/* Left Visual Column */}
          <div className="lg:w-5/12 relative min-h-[320px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574689049597-7e6f47385d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl text-xs text-slate-300">
              <span className="font-bold text-emerald-400 block mb-1">NIT Durgapur Pilot Scale:</span>
              <span>50L Closed Loop Photobioreactor evaluating continuous textile & steel plant effluent treatment.</span>
            </div>
          </div>
          
          {/* Right Content Column */}
          <div className="lg:w-7/12 p-5 sm:p-8 lg:p-12 relative z-20 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  Funded Research Project
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  TRL 4–5 (Pilot Testing)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Phycoremediation & Closed-Loop Bio-Valorization
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                A sustainable closed-loop bioprocess utilizing synergistic microalgal-bacterial consortia to sequester dissolved nitrates, phosphates, and heavy metals from industrial effluents while synthesizing lipid-rich biomass for bio-oil.
              </p>

              {/* 8-Stage Interactive Process Pipeline */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Layers className="h-4 w-4" />
                    <span>8-Stage Methodology Pipeline:</span>
                  </h4>
                  <span className="text-[11px] text-slate-500 font-mono">Process Flow</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {pipelineSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">
                          Stage {idx + 1}
                        </span>
                        <ChevronRight className="h-3 w-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div className="mt-2">
                        <span className="text-xs text-white font-bold block leading-snug">
                          {step.name}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 leading-tight">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monitored Parameters Readout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 mb-8 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Droplet className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">pH Range</span>
                    <span className="font-bold text-white font-mono">7.2 – 8.5</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Thermometer className="h-4 w-4 text-teal-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Temperature</span>
                    <span className="font-bold text-white font-mono">25 ± 2 °C</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <SunMedium className="h-4 w-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">PAR Light Flux</span>
                    <span className="font-bold text-white font-mono">120 µmol/m²/s</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Activity className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">COD Removal</span>
                    <span className="font-bold text-emerald-400 font-mono">&gt; 92%</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold" asChild>
                  <Link href="/projects/phycoremediation">
                    <span>Full Project Specifications</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/projects"
                  className="text-xs text-slate-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Explore All Ongoing & Completed Projects →
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}