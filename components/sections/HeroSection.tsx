"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  LineChart, 
  Building2, 
  Droplet, 
  Activity, 
  Thermometer, 
  SunMedium,
  Sparkles
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 border-b border-emerald-950/80">
      
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-emerald-950/80 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25" 
        />
        {/* Technical grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b20_1px,transparent_1px),linear-gradient(to_bottom,#064e3b20_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Identity & CTAs */}
          <div className="lg:col-span-7">
            
            {/* NIT Durgapur Department Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm max-w-full"
            >
              <Building2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">
                NIT Durgapur • Department of Chemical Engineering
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight mb-6">
                Engineering Microbial Systems <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400">
                  for a Sustainable Future
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-normal">
                Exploring algae, bacteria, and chemical engineering transport phenomena to develop innovative bioprocess solutions for clean energy, industrial wastewater remediation, and environmental sustainability.
              </p>
            </motion.div>

            {/* Four Research Area Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8 text-[11px] sm:text-xs text-emerald-200"
            >
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 font-medium">
                🌱 Algal Biotechnology
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 font-medium">
                🦠 Bacterial Consortia
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 font-medium">
                ⚗ Bioprocess Scale-up & CFD
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 font-medium">
                💧 Industrial Phycoremediation
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
            >
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/25 border-0 font-bold text-center justify-center transition-all hover:scale-105" asChild>
                <Link href="/research">
                  <span>Explore Research</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-emerald-500/50 text-emerald-300 hover:bg-emerald-950/60 hover:text-white bg-slate-900/50 font-semibold text-center justify-center transition-all" asChild>
                <Link href="/about">
                  About Our Lab
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-slate-300 hover:text-white hover:bg-slate-900/40 text-sm font-medium text-center justify-center" asChild>
                <Link href="/facilities">
                  Lab Facilities →
                </Link>
              </Button>
            </motion.div>

          </div>

          {/* Right Column: Interactive Photobioreactor Sensor Telemetry Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-emerald-500/40 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Reactor Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      Photobioreactor Unit PBR-01
                    </h3>
                    <p className="text-[11px] text-emerald-400 font-mono">
                      Chlorella vulgaris & Bacillus Consortia
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              {/* Reactor Visual Representation */}
              <div className="h-36 rounded-2xl bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 p-4 border border-emerald-800/40 flex flex-col justify-between mb-5 relative overflow-hidden">
                <div className="flex justify-between items-start text-xs text-emerald-300">
                  <span className="font-semibold flex items-center gap-1">
                    <SunMedium className="h-4 w-4 text-amber-400" />
                    PAR: 150 µmol/m²/s
                  </span>
                  <span className="font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/30">
                    Day 08 / Continuous Mode
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>Photosynthetic Biomass Accumulation</span>
                    <span className="font-bold font-mono text-emerald-300">2.84 g/L (+14%)</span>
                  </div>
                  {/* Progress / Culture Density Indicator */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[78%] transition-all duration-1000" />
                  </div>
                </div>
              </div>

              {/* 4 Live Sensor Parameters Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <Droplet className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Medium pH</span>
                    <span className="text-base font-bold font-mono text-white">7.20</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <Thermometer className="h-5 w-5 text-teal-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Temperature</span>
                    <span className="text-base font-bold font-mono text-white">25.0 °C</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <Activity className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Optical Density</span>
                    <span className="text-base font-bold font-mono text-emerald-300">OD680: 1.35</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">CO₂ Capture</span>
                    <span className="text-base font-bold font-mono text-amber-300">1.45 g/L/d</span>
                  </div>
                </div>

              </div>

              {/* Button to Live Dashboard */}
              <Link
                href="/dashboard"
                className="w-full py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-700/20"
              >
                <LineChart className="h-4 w-4" />
                <span>Open Interactive Research Dashboard →</span>
              </Link>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
