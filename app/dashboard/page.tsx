"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Activity, Thermometer, Droplet, TestTube } from "lucide-react";

// Mock experimental data
const growthData = [
  { day: 0, biomass: 0.1, od: 0.05, ph: 7.0, nitrate: 50 },
  { day: 2, biomass: 0.4, od: 0.2, ph: 7.2, nitrate: 45 },
  { day: 4, biomass: 1.1, od: 0.6, ph: 7.5, nitrate: 35 },
  { day: 6, biomass: 2.0, od: 1.1, ph: 7.8, nitrate: 22 },
  { day: 8, biomass: 2.84, od: 1.35, ph: 8.2, nitrate: 12 },
  { day: 10, biomass: 3.1, od: 1.5, ph: 8.4, nitrate: 5 },
  { day: 12, biomass: 3.2, od: 1.55, ph: 8.5, nitrate: 2 },
];

const cards = [
  { title: "Current Biomass", value: "2.84 g/L", icon: Activity, color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-100/90 dark:bg-gradient-to-br dark:from-emerald-950 dark:to-[#04251d] border-emerald-300/80 dark:border-emerald-500/40 dark:shadow-[0_0_15px_rgba(16,185,129,0.25)]" },
  { title: "Optical Density (OD680)", value: "1.35", icon: TestTube, color: "text-blue-700 dark:text-blue-300", bg: "bg-blue-100/90 dark:bg-gradient-to-br dark:from-blue-950 dark:to-[#05172d] border-blue-300/80 dark:border-blue-500/40 dark:shadow-[0_0_15px_rgba(59,130,246,0.25)]" },
  { title: "pH Level", value: "7.2", icon: Droplet, color: "text-teal-700 dark:text-teal-300", bg: "bg-teal-100/90 dark:bg-gradient-to-br dark:from-teal-950 dark:to-[#042421] border-teal-300/80 dark:border-teal-500/40 dark:shadow-[0_0_15px_rgba(20,184,166,0.25)]" },
  { title: "Temperature", value: "25 °C", icon: Thermometer, color: "text-rose-700 dark:text-rose-300", bg: "bg-rose-100/90 dark:bg-gradient-to-br dark:from-rose-950 dark:to-[#290710] border-rose-300/80 dark:border-rose-500/40 dark:shadow-[0_0_15px_rgba(244,63,94,0.25)]" },
];

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 sm:mb-12">
          <SectionHeading title="Research Dashboard" subtitle="Experimental cultivation & reactor monitoring at the Biological & Environmental Research Laboratory, NIT Durgapur" className="mb-0" />
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-500/30 px-3 py-1.5 rounded-full shadow-xs shrink-0">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
            Live Monitoring Active
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {[
            { ...cards[0], cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 dark:from-emerald-950/30 dark:via-[#0e1726] dark:to-[#07131d]", cardBorder: "border-emerald-200/80 dark:border-emerald-500/30", valColor: "text-emerald-900 dark:text-emerald-300" },
            { ...cards[1], cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-sky-50/40 dark:from-blue-950/30 dark:via-[#0e1726] dark:to-[#07131d]", cardBorder: "border-blue-200/80 dark:border-blue-500/30", valColor: "text-blue-900 dark:text-blue-300" },
            { ...cards[2], cardBg: "bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/40 dark:from-teal-950/30 dark:via-[#0e1726] dark:to-[#07131d]", cardBorder: "border-teal-200/80 dark:border-teal-500/30", valColor: "text-teal-900 dark:text-teal-300" },
            { ...cards[3], cardBg: "bg-gradient-to-br from-rose-50/90 via-white to-amber-50/40 dark:from-rose-950/30 dark:via-[#0e1726] dark:to-[#07131d]", cardBorder: "border-rose-200/80 dark:border-rose-500/30", valColor: "text-rose-900 dark:text-rose-300" },
          ].map((card, i) => (
            <div key={i} className={`rounded-2xl p-3.5 sm:p-6 border ${card.cardBorder} ${card.cardBg} shadow-[0_6px_20px_-6px_rgba(6,78,59,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow glossy-sheen flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 transition-all duration-300`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border ${card.bg} ${card.color}`}>
                <card.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{card.title}</p>
                <p className={`text-xl sm:text-2xl font-black ${card.valColor} mt-0.5`}>{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Biomass vs Time */}
          <div className="glossy-card hover-glow rounded-3xl p-6 sm:p-7 transition-all">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Biomass & OD vs Time</h3>
            </div>
            <div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="day" label={{ value: 'Time (Days)', position: 'insideBottomRight', offset: -10 }} stroke="#94a3b8" />
                    <YAxis yAxisId="left" label={{ value: 'Biomass (g/L)', angle: -90, position: 'insideLeft' }} stroke="#94a3b8" />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'OD680', angle: 90, position: 'insideRight' }} stroke="#94a3b8" />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }} />
                    <Legend verticalAlign="top" height={36}/>
                    <Line yAxisId="left" type="monotone" dataKey="biomass" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Biomass" />
                    <Line yAxisId="right" type="monotone" dataKey="od" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Optical Density" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* pH and Nutrients vs Time */}
          <div className="glossy-card hover-glow rounded-3xl p-6 sm:p-7 transition-all">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">pH & Nutrient Consumption</h3>
            </div>
            <div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                    <XAxis dataKey="day" label={{ value: 'Time (Days)', position: 'insideBottomRight', offset: -10 }} stroke="#94a3b8" />
                    <YAxis yAxisId="left" domain={[6.5, 9]} label={{ value: 'pH', angle: -90, position: 'insideLeft' }} stroke="#94a3b8" />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Nitrate (mg/L)', angle: 90, position: 'insideRight' }} stroke="#94a3b8" />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }} />
                    <Legend verticalAlign="top" height={36}/>
                    <Line yAxisId="left" type="monotone" dataKey="ph" stroke="#2dd4bf" strokeWidth={3} dot={{ r: 4 }} name="pH Level" />
                    <Line yAxisId="right" type="monotone" dataKey="nitrate" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} name="Nitrate Conc." />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
