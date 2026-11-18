"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

const previewInstruments = [
  {
    name: "Automated Photobioreactors (PBR)",
    spec: "Flat-panel & Tubular systems with automated PAR dimming and CO2/pH dosing loops.",
    category: "Algal Cultivation",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Stirred-Tank Microbial Bioreactors",
    spec: "5L & 10L fermenters with mass transfer (kLa) evaluation and Rushton impellers.",
    category: "Bioprocess Engineering",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "HPLC & Analytical Suite",
    spec: "High-Performance Liquid Chromatography for organic acids, lipids, and metabolites.",
    category: "Analytical Instruments",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phase-Contrast & Fluorescence Microscopy",
    spec: "Morphological inspection of symbiotic consortia, cell viability, and Nile red lipid staining.",
    category: "Cellular Characterization",
    image: "https://images.unsplash.com/photo-1579380618032-41f22e8dbf14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export function FacilitiesPreview() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="h-3.5 w-3.5 text-emerald-700" />
              <span>NIT Durgapur Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Laboratory Facilities
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Our laboratories in the Department of Chemical Engineering house advanced photobioreactors, stirred-tank fermenters, and sophisticated analytical instruments (AAS, HPLC, TOC analyzer, fluorescence microscopy, and CFD workstations).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold" asChild>
              <Link href="/facilities">
                <span>View All Equipments</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold" asChild>
              <Link href="/members">
                <span>Meet the Team</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Instruments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewInstruments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all group flex flex-col"
            >
              <div className="h-44 overflow-hidden relative bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-emerald-300 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.spec}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Explore Specs</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}