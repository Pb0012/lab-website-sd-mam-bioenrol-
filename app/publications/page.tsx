"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { 
  Search, 
  ExternalLink, 
  FileText, 
  BookOpen, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronDown,
  Award,
  GraduationCap
} from "lucide-react";
import { allPublications, Publication } from "@/data/publicationsData";

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState<"all" | "highlight" | "journal" | "book" | "conference">("all");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedArea, setSelectedArea] = useState("All");
  const [visibleCount, setVisibleCount] = useState(25);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Available unique years
  const years = useMemo(() => {
    const set = new Set<string>();
    allPublications.forEach(p => set.add(p.year.toString()));
    return ["All", ...Array.from(set).sort((a, b) => parseInt(b) - parseInt(a))];
  }, []);

  const areas = [
    "All",
    "Phycoremediation & Microalgae",
    "Wastewater & Industrial Effluents",
    "Adsorption & Low-Cost Materials",
    "Heavy Metal & Fluoride Removal",
    "Process Modeling & Optimization"
  ];

  // Filtering logic
  const filteredPublications = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();

    return allPublications.filter((pub) => {
      // Tab filter
      if (selectedTab === "highlight" && !pub.highlight) return false;
      if (selectedTab === "journal" && pub.type !== "journal") return false;
      if (selectedTab === "book" && pub.type !== "book") return false;
      if (selectedTab === "conference" && pub.type !== "conference") return false;

      // Year filter
      if (selectedYear !== "All" && pub.year.toString() !== selectedYear) return false;

      // Area filter
      if (selectedArea !== "All" && pub.area !== selectedArea) return false;

      // Search term
      if (q) {
        const matchesTitle = pub.title.toLowerCase().includes(q);
        const matchesAuthors = pub.authors.toLowerCase().includes(q);
        const matchesJournal = pub.journal.toLowerCase().includes(q);
        const matchesDoi = pub.doi ? pub.doi.toLowerCase().includes(q) : false;
        if (!matchesTitle && !matchesAuthors && !matchesJournal && !matchesDoi) {
          return false;
        }
      }

      return true;
    });
  }, [selectedTab, selectedYear, selectedArea, searchTerm]);

  const displayedPublications = useMemo(() => {
    return filteredPublications.slice(0, visibleCount);
  }, [filteredPublications, visibleCount]);

  const copyCitation = (pub: Publication) => {
    const citation = `${pub.authors} (${pub.year}). "${pub.title}". ${pub.journal}.${pub.doi ? ` DOI: https://doi.org/${pub.doi}` : ""}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const journalCount = allPublications.filter(p => p.type === "journal").length;
  const bookCount = allPublications.filter(p => p.type === "book").length;
  const conferenceCount = allPublications.filter(p => p.type === "conference").length;
  const highlightCount = allPublications.filter(p => p.highlight).length;

  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-12 sm:py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Background ambient aurora light blobs */}
      <div className="pointer-events-none absolute -left-36 top-20 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-36 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-7s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs backdrop-blur-md">
            <BookOpen className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Research Output & Scholarly Archive</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-4">
            Publications &{" "}
            <span className="text-gradient-emerald">Scholarly Impact</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            Complete catalogue of peer-reviewed international journals, authored books, book chapters, and conference proceedings from <strong>BIOENROL (Biological & Environmental Research Laboratory)</strong>, headed by <strong>Prof. Susmita Dutta</strong> at the Department of Chemical Engineering, National Institute of Technology Durgapur.
          </p>
        </div>

        {/* Real-time Metrics & Scholar Link */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          
          {/* Box 1: Journal Articles - Emerald Jewel */}
          <div className="rounded-2xl border border-emerald-300/80 dark:border-emerald-500/40 bg-gradient-to-br from-[#ebf8f2] via-[#e1f5eb] to-[#d3f0e2] dark:from-[#0a231b] dark:via-[#0b1924] dark:to-[#061210] p-5 shadow-[0_6px_22px_-6px_rgba(6,78,59,0.12),inset_0_1px_1.5px_rgba(255,255,255,0.9)] dark:shadow-[0_6px_24px_-6px_rgba(0,0,0,0.8),0_0_14px_rgba(16,185,129,0.12)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 dark:bg-gradient-to-br dark:from-emerald-950/90 dark:via-emerald-900/60 dark:to-[#04281f] text-white dark:text-emerald-300 border border-emerald-700/30 dark:border-emerald-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(16,185,129,0.25)]">
                  <FileText size={17} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-200/90 dark:bg-emerald-950/90 text-emerald-900 dark:text-emerald-300 border border-emerald-400/60 dark:border-emerald-500/30">
                  SCI / SCIE
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-emerald-950 dark:text-emerald-300 mt-1">
                {journalCount}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-1">
                Journal Articles
              </div>
            </div>
            <div className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold mt-3 pt-2.5 border-t border-emerald-300/40 dark:border-emerald-950/60">
              Peer-reviewed International
            </div>
          </div>

          {/* Box 2: Books & Chapters - Amber Jewel */}
          <div className="rounded-2xl border border-amber-300/80 dark:border-amber-500/40 bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a]/60 dark:from-[#241a06] dark:via-[#161224] dark:to-[#0a0714] p-5 shadow-[0_6px_22px_-6px_rgba(217,119,6,0.12),inset_0_1px_1.5px_rgba(255,255,255,0.9)] dark:shadow-[0_6px_24px_-6px_rgba(0,0,0,0.8),0_0_14px_rgba(245,158,11,0.12)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 dark:bg-gradient-to-br dark:from-amber-950/90 dark:via-amber-900/60 dark:to-[#221603] text-white dark:text-amber-300 border border-amber-700/30 dark:border-amber-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(245,158,11,0.25)]">
                  <BookOpen size={17} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-200/90 dark:bg-amber-950/90 text-amber-950 dark:text-amber-300 border border-amber-400/60 dark:border-amber-500/30">
                  Books
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-amber-950 dark:text-amber-300 mt-1">
                {bookCount}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-1">
                Books & Chapters
              </div>
            </div>
            <div className="text-[11px] text-amber-900 dark:text-amber-400 font-semibold mt-3 pt-2.5 border-t border-amber-300/40 dark:border-amber-950/60">
              Springer, CRC Press & Narosa
            </div>
          </div>

          {/* Box 3: Conference Proceedings - Teal Jewel */}
          <div className="rounded-2xl border border-teal-300/80 dark:border-teal-500/40 bg-gradient-to-br from-[#f0fdfa] via-[#ccfbf1] to-[#99f6e4]/50 dark:from-[#052422] dark:via-[#071724] dark:to-[#041214] p-5 shadow-[0_6px_22px_-6px_rgba(13,148,136,0.12),inset_0_1px_1.5px_rgba(255,255,255,0.9)] dark:shadow-[0_6px_24px_-6px_rgba(0,0,0,0.8),0_0_14px_rgba(20,184,166,0.12)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 dark:bg-gradient-to-br dark:from-teal-950/90 dark:via-teal-900/60 dark:to-[#04221f] text-white dark:text-teal-300 border border-teal-700/30 dark:border-teal-500/40 shadow-xs dark:shadow-[0_0_14px_rgba(20,184,166,0.25)]">
                  <Award size={17} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-200/90 dark:bg-teal-950/90 text-teal-950 dark:text-teal-300 border border-teal-400/60 dark:border-teal-500/30">
                  Conferences
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-teal-950 dark:text-teal-300 mt-1">
                72+
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-1">
                Conference Proceedings
              </div>
            </div>
            <div className="text-[11px] text-teal-900 dark:text-teal-400 font-semibold mt-3 pt-2.5 border-t border-teal-300/40 dark:border-teal-950/60">
              National & International
            </div>
          </div>

          {/* Box 4: Academic Profiles - Luminous Hub */}
          <div className="rounded-2xl border border-emerald-400/90 dark:border-emerald-500/50 bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0]/60 dark:from-[#082a1e] dark:via-[#0b1b24] dark:to-[#061410] p-5 shadow-[0_8px_25px_-5px_rgba(6,78,59,0.16),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_6px_24px_-6px_rgba(0,0,0,0.8),0_0_18px_rgba(16,185,129,0.2)] hover-glow glossy-sheen flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-500 dark:to-teal-600 text-white shadow-xs dark:shadow-[0_0_15px_rgba(16,185,129,0.35)]">
                  <GraduationCap size={18} />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-emerald-950 dark:text-emerald-300 bg-emerald-200/90 dark:bg-emerald-950/90 border border-emerald-400/60 dark:border-emerald-500/40">
                  h-index 31
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                Academic Profiles
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                Real-time citations & metrics
              </div>
            </div>
            <div className="flex gap-2 mt-3 pt-2.5 border-t border-emerald-300/40 dark:border-emerald-950/60">
              <a
                href="https://scholar.google.com/citations?user=Gg0h7z0AAAAJ"
                target="_blank"
                rel="noreferrer"
                className="glossy-btn text-[11px] font-bold text-white px-3 py-1.5 rounded-xl inline-flex items-center gap-1 shadow-xs hover:scale-105 active:scale-95 transition"
              >
                Scholar <ExternalLink size={10} />
              </a>
              <a
                href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1"
                target="_blank"
                rel="noreferrer"
                className="glossy-pill text-[11px] font-bold text-emerald-900 dark:text-emerald-300 px-3 py-1.5 rounded-xl inline-flex items-center gap-1 hover:border-emerald-400 hover:bg-white dark:hover:bg-slate-800 transition"
              >
                NIT Portal <ExternalLink size={10} />
              </a>
            </div>
          </div>

        </div>

        {/* Tab Selection */}
        <div className="p-1.5 rounded-2xl mb-6 flex overflow-x-auto gap-2 scrollbar-none bg-emerald-950/5 dark:bg-[#0e1726] border border-emerald-950/8 dark:border-slate-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
          {[
            { id: "all", label: "All Publications", count: allPublications.length },
            { id: "highlight", label: "Recent Highlights", count: highlightCount },
            { id: "journal", label: "Journals", count: journalCount },
            { id: "book", label: "Books & Chapters", count: bookCount },
            { id: "conference", label: "Conferences", count: conferenceCount },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedTab(tab.id as any);
                setVisibleCount(25);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === tab.id
                  ? "glossy-btn text-white shadow-md shadow-emerald-900/20"
                  : "text-slate-700 dark:text-slate-300 hover:text-emerald-900 dark:hover:text-white hover:bg-white/90 dark:hover:bg-slate-800/80 shadow-xs"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                selectedTab === tab.id
                  ? "bg-emerald-950/30 text-white"
                  : "bg-emerald-100/70 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Dynamic Dropdowns */}
        <div className="glossy-subsurface p-4 sm:p-5 rounded-2xl mb-8 flex flex-col md:flex-row gap-3 items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, author name, journal, or DOI..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/75 dark:bg-[#131b2e] text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(25);
              }}
            />
          </div>
          
          <div className="w-full md:w-1/4">
            <select 
              className="w-full px-3.5 py-2.5 rounded-xl border border-white/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/75 dark:bg-[#131b2e] text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setVisibleCount(25);
              }}
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === "All" ? "All Publication Years" : `Year: ${year}`}
                </option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-1/4">
            <select 
              className="w-full px-3.5 py-2.5 rounded-xl border border-white/80 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/75 dark:bg-[#131b2e] text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value);
                setVisibleCount(25);
              }}
            >
              {areas.map(area => (
                <option key={area} value={area}>
                  {area === "All" ? "All Research Areas" : area}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count & Active Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-xs text-slate-500 dark:text-slate-400 px-1">
          <div>
            Showing <strong className="text-slate-900 dark:text-white">{displayedPublications.length}</strong> of <strong className="text-slate-900 dark:text-white">{filteredPublications.length}</strong> matching results
          </div>
          {(searchTerm || selectedYear !== "All" || selectedArea !== "All" || selectedTab !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedYear("All");
                setSelectedArea("All");
                setSelectedTab("all");
                setVisibleCount(25);
              }}
              className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Publication Cards List */}
        <div className="space-y-4 mb-12">
          {displayedPublications.length > 0 ? (
            displayedPublications.map((pub) => {
              const paperUrl = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`);

              return (
                <div 
                  key={pub.id} 
                  className="glossy-card hover-glow p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row gap-5 items-start justify-between group transition-all duration-300"
                >
                  <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-20 py-3 bg-white/70 dark:bg-[#131b2e] rounded-xl text-slate-500 dark:text-slate-400 border border-white/80 dark:border-slate-700/80 shadow-[0_2px_8px_-2px_rgba(6,78,59,0.06)]">
                    <FileText className="h-6 w-6 mb-1 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-extrabold text-sm text-slate-800 dark:text-white">{pub.year}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-400 mt-0.5">
                      {pub.type === "journal" ? "Journal" : pub.type === "book" ? "Book" : "Conf"}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="md:hidden font-bold text-xs text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {pub.year}
                      </span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        pub.type === "journal" 
                          ? "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30"
                          : pub.type === "book"
                          ? "bg-purple-50 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30"
                          : "bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30"
                      }`}>
                        {pub.type === "journal" ? "Journal Article" : pub.type === "book" ? "Book / Chapter" : "Conference Paper"}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-[#131b2e] px-2.5 py-0.5 rounded-full">
                        {pub.area}
                      </span>
                      {pub.highlight && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-500/30 px-2 py-0.5 rounded-full">
                          <Sparkles size={10} /> Latest
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                      {pub.authors}
                    </p>

                    <p className="text-xs italic text-slate-700 dark:text-emerald-300 font-medium">
                      {pub.journal}
                    </p>

                    {pub.doi && (
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 font-mono">
                        DOI: {pub.doi}
                      </p>
                    )}
                  </div>

                  <div className="flex md:flex-col items-center gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-200/50 dark:border-slate-800 justify-end">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glossy-pill border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-xs font-semibold h-8 w-full md:w-36 justify-center" 
                      asChild
                    >
                      <a href={paperUrl} target="_blank" rel="noopener noreferrer">
                        <span>{pub.doi ? "View DOI" : "View Paper"}</span>
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>

                    <button
                      onClick={() => copyCitation(pub)}
                      className="glossy-pill inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium h-8 w-full md:w-36 transition cursor-pointer"
                      title="Copy APA Citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="glossy-card rounded-2xl p-12 text-center">
              <p className="text-slate-600 dark:text-slate-300 font-semibold mb-2">No publications match your selected filters.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedYear("All");
                  setSelectedArea("All");
                  setSelectedTab("all");
                  setVisibleCount(25);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPublications.length && (
          <div className="text-center mb-16">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 25)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-xs"
            >
              <span>Load More Publications ({filteredPublications.length - visibleCount} remaining)</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
