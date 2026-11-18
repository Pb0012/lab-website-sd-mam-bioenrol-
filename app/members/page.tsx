"use client";

import { useState } from "react";
import { Search, BookOpen, ExternalLink, Mail, GraduationCap, Users, Sparkles, Filter, ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface Member {
  name: string;
  role: string;
  category: "postdoc" | "phd" | "alumni";
  degree: string;
  topic: string;
  status: "Ongoing" | "Awarded" | "Postdoctoral Fellow";
  fellowship?: string;
  image?: string;
  imagePosition?: string;
  email?: string;
  scholar?: string;
  linkedin?: string;
  current?: string;
  year?: string;
}

const membersData: Member[] = [
  // Postdoctoral Fellow (1)
  {
    name: "Dr. Abhijit Mahana",
    role: "Post Doctoral Fellow",
    category: "postdoc",
    degree: "National Postdoctoral Fellowship (NPDF), ANRF",
    topic: "Advanced Environmental Biotechnology & Biochemical Reaction Engineering",
    status: "Postdoctoral Fellow",
    fellowship: "NPDF (ANRF)",
    image: "/images/members/abhijit-mahana.jpg",
    imagePosition: "object-[center_12%]",
  },

  // Ongoing PhD Scholars (6)
  {
    name: "Riya Chakraborty",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "DST INSPIRE Fellow • Ph.D. Scholar",
    topic: "Biochemical Reaction Engineering, Industrial Wastewater Decontamination & Phycoremediation",
    status: "Ongoing",
    fellowship: "DST INSPIRE Fellow",
    image: "/images/members/riya-chakraborty.png",
    imagePosition: "object-[center_14%]",
  },
  {
    name: "Surajit Karmakar",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "Ph.D. Scholar • Chemical Engineering",
    topic: "Wastewater Treatment, Bioprocess Engineering & Biochemical Systems Optimization",
    status: "Ongoing",
    image: "/images/members/surajit-karmakar.png",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Niharika Kumari",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "Ph.D. Scholar • Chemical Engineering",
    topic: "Environmental Biotechnology, Effluent Remediation & Bio-separation Processes",
    status: "Ongoing",
    image: "/images/members/niharika-kumari.jpg",
    imagePosition: "object-[center_10%]",
  },
  {
    name: "Anshu Kumari",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "Ph.D. Scholar • Chemical Engineering",
    topic: "Industrial Wastewater Remediation & Biochemical Reaction Engineering",
    status: "Ongoing",
    image: "/images/members/anshu-kumari.jpg",
    imagePosition: "object-[center_8%]",
  },
  {
    name: "Arnab Sau",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "Ph.D. Scholar • Chemical Engineering",
    topic: "Bioprocess Modeling, Mass Transfer in Fixed Bed Systems & Environmental Engineering",
    status: "Ongoing",
    image: "/images/members/arnab-sau.jpg",
    imagePosition: "object-[center_7%]",
  },
  {
    name: "Sumit Kumar Khan",
    role: "Ph.D. Scholar (Ongoing)",
    category: "phd",
    degree: "Ph.D. Scholar • Chemical Engineering",
    topic: "Biochemical Separation Technologies & Industrial Effluent Remediation",
    status: "Ongoing",
    image: "/images/members/sumit-kumar-khan.jpg",
    imagePosition: "object-[center_15%]",
  },

  // Awarded PhD Scholars / Alumni (16)
  {
    name: "Dr. Padma Seragadam",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Bioremoval of Heavy Metals from Industrial Effluent Using Algae and Cyanobacteria",
    status: "Awarded",
    image: "/images/members/padma-seragadam.jpg",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. Bulti Kandar",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Bacterial-Microalgal Consortia for Industrial Wastewater Remediation",
    status: "Awarded",
    image: "/images/members/bulti-kandar.jpg",
    imagePosition: "object-[center_8%]",
  },
  {
    name: "Dr. Biswajit Sarkar",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Heavy Metal Removal, Modeling, Optimization, Phycoremediation, and Bioremediation",
    status: "Awarded",
  },
  {
    name: "Dr. Aparupa Bhattacharyya",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Liquid-Phase Adsorption of Mercury(II) Using Immobilized Enzymes",
    status: "Awarded",
    image: "/images/members/aparupa-bhattacharyya.jpg",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. M. Geetha Devi",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Preparation and Characterization of Naturally Degradable Nano- and Micro-Capsules Using Layer-by-Layer Technique",
    status: "Awarded",
  },
  {
    name: "Dr. Ganta Upendar",
    role: "Project Scholar (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Phycoremediation of Cyanide and CO₂ Sequestration Using Algae: An Integrated Approach",
    status: "Awarded",
    image: "/images/members/ganta-upendar.jpg",
    imagePosition: "object-center",
  },
  {
    name: "Dr. Sabyasachi Pramanik",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Treatment of Coke-Oven Wastewater Using Hybrid Technology",
    status: "Awarded",
    image: "/images/members/sabyasachi-pramanik.png",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. Sushovan Sen",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Phycoremediation of Heavy Metals from Industrial Wastewater",
    status: "Awarded",
    image: "/images/members/sushovan-sen.jpg",
    imagePosition: "object-center",
  },
  {
    name: "Dr. Soumasree Chatterjee",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Removal of Lead(II) by Immobilized Cysteine Proteases",
    status: "Awarded",
  },
  {
    name: "Dr. Debabrata Mukhopadhyay",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Preliminary Processing of Municipal Solid Waste and Modeling of Landfills",
    status: "Awarded",
  },
  {
    name: "Dr. Gargi Biswas",
    role: "Project Scholar (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Abatement of Fluoride from Groundwater and Wastewater",
    status: "Awarded",
  },
  {
    name: "Dr. Abhilasha Rai",
    role: "Project Scholar (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Bioremediation of Pollutants from Coke-Oven Wastewater",
    status: "Awarded",
    image: "/images/members/abhilasha-rai.jpg",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. K. P. Anjali",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Phycoremediation of Pollutants from Wastewater Using Marine Algae",
    status: "Awarded",
  },
  {
    name: "Dr. B.M. Sangeetha",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Treatment of Industrial Wastewater Using Nanomaterials",
    status: "Awarded",
  },
  {
    name: "Dr. Bhaskar Bishayee",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Removal of Fluoride from Groundwater Using Naturally Available Low-Cost Materials",
    status: "Awarded",
    image: "/images/members/bhaskar-bishayee.jpg",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. M. J. Varghese",
    role: "Ph.D. (Awarded)",
    category: "alumni",
    degree: "Ph.D. in Chemical Engineering",
    topic: "Treatment of Saline Water Pollutants by Solar Nano-Photocatalysis",
    status: "Awarded",
    image: "/images/members/mj-varghese.jpg",
    imagePosition: "object-center",
  },
];

function getInitials(name: string) {
  const parts = name.replace(/^Dr\.\s*|^Mr\.\s*|^Ms\.\s*/i, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMembers = membersData.filter((member) => {
    const matchesCategory =
      activeTab === "all" ||
      (activeTab === "postdoc" && member.category === "postdoc") ||
      (activeTab === "phd" && member.category === "phd") ||
      (activeTab === "alumni" && member.category === "alumni");

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      member.name.toLowerCase().includes(query) ||
      member.topic.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.degree.toLowerCase().includes(query) ||
      (member.fellowship && member.fellowship.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const postdocCount = membersData.filter((m) => m.category === "postdoc").length;
  const phdOngoingCount = membersData.filter((m) => m.category === "phd").length;
  const alumniCount = membersData.filter((m) => m.category === "alumni").length;

  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-16 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60 dark:border-emerald-500/30">
            <Users className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Research Personnel & Scholars</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-4">
            Laboratory <span className="text-gradient-emerald">Members</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            Meet the postdoctoral fellows, doctoral scholars, and alumni conducting research in biochemical reaction engineering, phycoremediation, environmental biotechnology, and low-cost adsorbents under <strong>Prof. Susmita Dutta</strong> at the Department of Chemical Engineering, National Institute of Technology Durgapur.
          </p>
        </div>

        {/* Principal Investigator Section */}
        <div className="mb-12 rounded-3xl glossy-card glossy-sheen glossy-glow glossy-sweep-container p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[220px_1fr] gap-8 items-start">
            <div className="aspect-square w-full max-w-[220px] mx-auto overflow-hidden rounded-2xl border-2 border-white/95 dark:border-emerald-500/40 bg-slate-100 dark:bg-slate-800 shadow-[0_10px_28px_-6px_rgba(6,78,59,0.25)] relative group">
              <img
                src="/images/susmita-dutta.jpg"
                alt="Prof. Susmita Dutta"
                className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/40 dark:ring-white/10 rounded-2xl pointer-events-none" />
            </div>
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-200/90 dark:border-emerald-500/30 shadow-xs">
                  <Sparkles className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  Principal Investigator & Lab Head
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Prof. (Dr.) Susmita Dutta
                </h2>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                  Professor, Department of Chemical Engineering, National Institute of Technology Durgapur
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ph.D. in Engineering (Jadavpur University) • M.Tech (IIT Kharagpur) • B.Tech (Univ. of Calcutta) • B.Sc. (Bethune College)
                </p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Prof. Susmita Dutta heads BIOENROL (Biological & Environmental Research Laboratory) at NIT Durgapur. Her research program spans biochemical reaction engineering, industrial wastewater phycoremediation (steel plant, petroleum refinery, coke-oven wastewaters), low-cost adsorbent matrices for heavy metal and fluoride decontamination, and pilot-scale integrated carbon capture platforms.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                <a
                  href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1"
                  target="_blank"
                  rel="noreferrer"
                  className="glossy-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold transition"
                >
                  Official Faculty Portal <ExternalLink size={12} />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Gg0h7z0AAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="glossy-pill inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-emerald-900 dark:text-emerald-300 font-semibold hover:border-emerald-300 dark:hover:bg-emerald-900/40 transition"
                >
                  Google Scholar Profile <BookOpen size={12} />
                </a>
                <a 
                  href="mailto:sdutta.che@nitdgp.ac.in" 
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 font-medium transition break-all"
                >
                  <Mail size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>sdutta.che@nitdgp.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Cohort Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          
          {/* Card 1: Total Researchers */}
          <div className="rounded-2xl border border-emerald-200/90 dark:border-emerald-500/30 bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 dark:from-emerald-950/40 dark:via-[#0e1726] dark:to-[#09111e] p-3.5 sm:p-5 shadow-[0_6px_22px_-6px_rgba(6,78,59,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-emerald-100/90 dark:bg-gradient-to-br dark:from-emerald-950/90 dark:via-emerald-900/60 dark:to-[#04281f] text-emerald-800 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(16,185,129,0.25)]">
                  <Users size={16} />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-100/80 dark:bg-emerald-950/90 text-emerald-900 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-500/30">
                  Total
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-900 dark:text-emerald-300 mt-1">
                23
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 mt-1">
                Total Researchers
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-emerald-100 dark:border-emerald-950/60">
              Mentored by Prof. Dutta
            </div>
          </div>

          {/* Card 2: Postdoctoral Fellow */}
          <div className="rounded-2xl border border-purple-200/80 dark:border-purple-500/30 bg-gradient-to-br from-purple-50/90 via-white to-indigo-50/30 dark:from-purple-950/30 dark:via-[#0e1726] dark:to-[#09111e] p-3.5 sm:p-5 shadow-[0_6px_22px_-6px_rgba(147,51,234,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-purple-100/90 dark:bg-gradient-to-br dark:from-purple-950/90 dark:via-purple-900/60 dark:to-[#1e0735] text-purple-900 dark:text-purple-300 border border-purple-300/80 dark:border-purple-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(168,85,247,0.25)]">
                  <Sparkles size={16} />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-purple-100/80 dark:bg-purple-950/90 text-purple-900 dark:text-purple-300 border border-purple-300/50 dark:border-purple-500/30">
                  NPDF
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-tight text-purple-900 dark:text-purple-300 mt-1">
                {postdocCount}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 mt-1">
                Postdoctoral Fellow
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-purple-800 dark:text-purple-400 font-semibold mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-purple-100 dark:border-purple-950/60">
              National Fellow (ANRF)
            </div>
          </div>

          {/* Card 3: Ongoing PhD Scholars */}
          <div className="rounded-2xl border border-teal-200/80 dark:border-teal-500/30 bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/30 dark:from-teal-950/30 dark:via-[#0e1726] dark:to-[#09111e] p-3.5 sm:p-5 shadow-[0_6px_22px_-6px_rgba(13,148,136,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-teal-100/90 dark:bg-gradient-to-br dark:from-teal-950/90 dark:via-teal-900/60 dark:to-[#04221f] text-teal-900 dark:text-teal-300 border border-teal-300/80 dark:border-teal-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(20,184,166,0.25)]">
                  <GraduationCap size={16} />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-teal-100/80 dark:bg-teal-950/90 text-teal-900 dark:text-teal-300 border border-teal-300/50 dark:border-teal-500/30">
                  Active PhD
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-tight text-teal-900 dark:text-teal-300 mt-1">
                {phdOngoingCount}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 mt-1">
                Ongoing Ph.D. Scholars
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-teal-800 dark:text-teal-400 font-semibold mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-teal-100 dark:border-teal-950/60">
              Active Doctoral Research
            </div>
          </div>

          {/* Card 4: Awarded PhD Alumni */}
          <div className="rounded-2xl border border-blue-200/80 dark:border-blue-500/30 bg-gradient-to-br from-blue-50/90 via-white to-sky-50/30 dark:from-blue-950/30 dark:via-[#0e1726] dark:to-[#09111e] p-3.5 sm:p-5 shadow-[0_6px_22px_-6px_rgba(37,99,235,0.1),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-blue-100/90 dark:bg-gradient-to-br dark:from-blue-950/90 dark:via-blue-900/60 dark:to-[#071936] text-blue-900 dark:text-blue-300 border border-blue-300/80 dark:border-blue-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(59,130,246,0.25)]">
                  <Award size={16} />
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-blue-100/80 dark:bg-blue-950/90 text-blue-900 dark:text-blue-300 border border-blue-300/50 dark:border-blue-500/30">
                  Awarded
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-black tracking-tight text-blue-900 dark:text-blue-300 mt-1">
                {alumniCount}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 mt-1">
                Awarded Ph.D. Alumni
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-blue-800 dark:text-blue-400 font-semibold mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-blue-100 dark:border-blue-950/60">
              In Academia & Industry
            </div>
          </div>

        </div>

        {/* Filters & Search Controls */}
        <div className="glossy-subsurface p-4 sm:p-5 rounded-2xl mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 w-full lg:w-auto pb-2 sm:pb-0 scrollbar-none shrink-0">
            {[
              { id: "all", label: `All Members (${membersData.length})` },
              { id: "postdoc", label: `Postdoctoral Fellows (${postdocCount})` },
              { id: "phd", label: `Ph.D. Scholars (${phdOngoingCount})` },
              { id: "alumni", label: `Doctoral Alumni (${alumniCount})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "glossy-btn text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search scholar, topic, or fellowship..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-white/80 dark:border-slate-700 bg-white/70 dark:bg-[#131b2e] text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
            />
          </div>

        </div>

        {/* Members Grid */}
        {filteredMembers.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredMembers.map((member, idx) => (
              <div
                key={idx}
                className="glossy-card hover-glow rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Photo or Monogram Graphic Header */}
                  {member.image ? (
                    <div className="h-72 sm:h-80 w-full bg-slate-950/5 dark:bg-[#070b12] overflow-hidden relative group-hover:shadow-inner transition-all flex items-center justify-center">
                      {/* Ambient background blur for studio depth */}
                      <img
                        src={member.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-35 dark:opacity-25 pointer-events-none"
                      />
                      {/* Crisp photo positioned so full head/face is completely clear */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`relative z-10 w-full h-full object-cover ${member.imagePosition || "object-[center_12%]"} group-hover:scale-[1.03] transition-transform duration-500 ease-out`}
                        loading="lazy"
                      />
                      {/* Hairline bottom border */}
                      <div className="absolute inset-0 pointer-events-none border-b border-white/60 dark:border-white/10 z-15" />

                      {/* Bottom gradient scrim with role & status badges (leaving entire face/forehead completely clear!) */}
                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pt-12 pb-3.5 px-3.5 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-400/25 shadow-xs truncate max-w-[170px]">
                          {member.role}
                        </span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs shrink-0 ${
                          member.category === 'postdoc'
                            ? "bg-purple-600/90 text-white border border-purple-400/30"
                            : member.category === 'phd'
                            ? "bg-emerald-600/90 text-white border border-emerald-400/30"
                            : "bg-blue-600/90 text-white border border-blue-400/30"
                        }`}>
                          {member.status}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-56 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 dark:from-[#081f18] dark:via-[#092b21] dark:to-[#0e1726] p-5 flex flex-col justify-between border-b border-emerald-100/60 dark:border-slate-800 relative">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-white/90 dark:bg-[#0e1726]/90 shadow-xs px-2.5 py-1 rounded-md border border-white dark:border-emerald-500/20">
                          {member.role}
                        </div>
                        <div className="h-12 w-12 rounded-full glossy-avatar-ring text-emerald-800 dark:text-emerald-300 font-extrabold flex items-center justify-center text-sm shadow-sm">
                          <span className="bg-white dark:bg-[#0e1726] rounded-full h-full w-full flex items-center justify-center">
                            {getInitials(member.name)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-[170px]">{member.degree}</span>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          member.category === 'alumni'
                            ? "bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30"
                            : "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30"
                        }`}>
                          {member.status}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Body Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                        {member.name}
                      </h3>
                    </div>

                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2.5">
                      {member.degree}
                    </p>

                    {member.fellowship && (
                      <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300/40 dark:border-amber-500/30 text-[11px] font-semibold">
                        <Award className="h-3 w-3 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>{member.fellowship}</span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong className="text-slate-800 dark:text-slate-200 block mb-0.5 font-semibold">
                        {member.category === "alumni" ? "Doctoral Thesis / Research Topic:" : "Research Focus:"}
                      </strong>
                      {member.topic}
                    </p>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Dept. of Chemical Engg.
                    </span>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                      NIT Durgapur
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-[#0e1726] rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 mb-16">
            <p className="text-slate-600 dark:text-slate-300 font-semibold mb-2">No members match your search criteria.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Join CTA banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 dark:bg-[#070b12] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 dark:border-emerald-500/20">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block mb-1">
              Interested in Research Training?
            </span>
            <h2 className="text-2xl font-bold mb-2">Summer Research Internship at BIOENROL</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              We welcome applications from motivated B.Tech, M.Tech, and M.Sc. students for 6-8 weeks hands-on Summer Research Internships in biochemical reaction engineering, microalgae culturing, and industrial wastewater phycoremediation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs" asChild>
              <Link href="/open-positions">
                <span>Summer Internships</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 text-xs" asChild>
              <Link href="/contact">
                <span>Contact Lab</span>
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
