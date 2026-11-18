"use client";

import { useEffect, useState } from "react";
import { Award, Sparkles, ChevronRight, Bell } from "lucide-react";
import Link from "next/link";

const announcements = [
  {
    tag: "Completed National Grant",
    title: "IMPRINT (MoE / SERB-DST) Steel Wastewater Project Completed",
    description: "Prof. Susmita Dutta has successfully completed the flagship research on steel industry wastewater phycoremediation and algal biofuel production at NIT Durgapur.",
    href: "/projects",
  },
  {
    tag: "Recent Publication (2025)",
    title: "Published in Process Safety & Environmental Protection",
    description: "Research paper on bacterial-algal consortium for tertiary treatment of refinery wastewater by Dr. Bulti Kandar and Prof. Susmita Dutta.",
    href: "/publications",
  },
  {
    tag: "Strain Innovation",
    title: "Phycodesalination with Graesiella emersonii sp. NITD 23",
    description: "Published in Journal of Environmental Engineering evaluating microalgae for synthetic seawater and industrial effluents.",
    href: "/publications",
  },
  {
    tag: "Internship Notice",
    title: "Summer Research Internships (B.Tech / M.Tech / M.Sc.)",
    description: "BIOENROL (Biological & Environmental Research Laboratory) at NIT Durgapur welcomes applications for hands-on summer research training.",
    href: "/open-positions",
  },
];

export function AnnouncementsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = announcements[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#031711] via-[#092e24] to-[#031711] text-white border-b border-[#1b735c]/30 py-2.5 px-3 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#38b493]/30 to-transparent pointer-events-none" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center gap-2.5 w-full md:w-auto min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#0d3d30] to-[#1b735c] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shrink-0 border border-[#38b493]/35">
            <Bell className="h-3.5 w-3.5 animate-bounce text-[#62d2b5]" />
            <span>NITDGP Bulletin</span>
          </div>
          
          <div className="flex items-center gap-2 overflow-hidden text-xs text-slate-200 min-w-0 flex-1">
            <span className="font-bold text-[#62d2b5] shrink-0 hidden sm:inline">
              [{active.tag}]:
            </span>
            <span className="font-semibold text-white truncate">
              {active.title} —
            </span>
            <span className="text-slate-300 truncate hidden lg:inline">
              {active.description}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-xs">
          <div className="flex gap-1">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i ? "w-6 bg-[#62d2b5]" : "w-1.5 bg-[#0d3d30]"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <Link
            href="/achievements"
            className="inline-flex items-center gap-1 text-[#a8e6d5] hover:text-white font-bold transition-colors"
          >
            <span>All Achievements</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}