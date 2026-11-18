"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Beaker, BookOpen, Users, Building2 } from "lucide-react";

const stats = [
  { id: 1, name: "Research Projects", value: "6+", icon: Beaker, desc: "IMPRINT, DST & MoE Initiatives" },
  { id: 2, name: "Publications & Books", value: "125+", icon: BookOpen, desc: "31 Journals • 72 Conferences • 22 Books" },
  { id: 3, name: "Doctoral & Postdoc Scholars", value: "23", icon: Users, desc: "1 Postdoc • 7 Ongoing • 15 Awarded" },
  { id: 4, name: "Analytical & Lab Facilities", value: "5+", icon: Building2, desc: "AAS, HPLC, TOC & Bioreactors" },
];

export function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-white dark:bg-[#090e17] border-b border-slate-200 dark:border-slate-800 py-12 sm:py-16 relative transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-[#0e1726] border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(16,185,129,0.12)] transition-all text-center flex flex-col items-center justify-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-1 leading-snug">
                {stat.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}