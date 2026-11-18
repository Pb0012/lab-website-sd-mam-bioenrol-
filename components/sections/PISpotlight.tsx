import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Mail,
  GraduationCap,
  Microscope,
  Building2,
  BookOpen,
  Globe,
  Award,
  Sparkles,
  Users,
  Briefcase,
  FileText,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const professor = {
  name: "Prof. (Dr.) Susmita Dutta",
  designation: "Professor, Department of Chemical Engineering",
  institution: "National Institute of Technology Durgapur",
  joined: "Faculty at NIT Durgapur since November 2007 (Former HOD, 2017–2019)",
  qualification: "Ph.D. in Engineering (Jadavpur Univ.) • M.Tech (IIT Kharagpur) • B.Tech (Univ. of Calcutta) • B.Sc. (Bethune College)",
  email: "susmita.dutta@che.nitdgp.ac.in",
  altEmail: "sdutta.che@nitdgp.ac.in",
  portrait: "/images/susmita-dutta.jpg",
  nitProfile: "https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1",
  scholar: "https://scholar.google.com/citations?user=Gg0h7z0AAAAJ",
  orcid: "https://orcid.org/0000-0002-5042-6160",
};

const researchInterests = [
  "Biochemical Reaction Engineering & Bioreactor Systems",
  "Phycoremediation & Industrial Wastewater Decontamination (Coke-Oven, Steel, Refinery)",
  "Microalgal-Bacterial Consortia & Strain Development (Graesiella emersonii sp. NITD 23)",
  "Adsorption Technology & Low-Cost Adsorbents (Fluoride, Heavy Metals, Dyes)",
  "Carbon Capture and Emerging Pollutants",
  "Bioprocess Modeling, ANN-GA Hybrid Optimization & RSM",
];

const highlights = [
  { value: "110+", label: "Research Publications", sub: "110 Listed · 117+ on Scholar" },
  { value: "22", label: "Doctoral Scholars", sub: "16 Awarded · 6 Ongoing PhD" },
  { value: "6", label: "Sponsored Projects", sub: "DBT · IMPRINT · DST · IIChE" },
  { value: "Former HOD", label: "Chemical Engineering", sub: "NIT Durgapur (2017–2019)" },
];

export default function PISpotlight() {
  return (
    <section id="principal-investigator" className="relative overflow-hidden border-y border-emerald-100/70 dark:border-slate-800/80 bg-gradient-to-b from-[#f5faf6] via-white to-[#edf7f1] dark:from-[#090e17] dark:via-[#0b1220] dark:to-[#08131d] py-16 sm:py-24 transition-colors duration-200">
      {/* Background ambient light orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/30 dark:bg-emerald-950/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-teal-200/30 dark:bg-teal-950/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Laboratory Leadership & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#103d32] dark:text-white leading-[1.15]">
            Meet our Principal Investigator
          </h2>
          <p className="mt-3.5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Leading BIOENROL (Biological & Environmental Research Laboratory) at NIT Durgapur, advancing research in biochemical engineering, industrial wastewater phycoremediation, and sustainable environmental bioprocesses.
          </p>
        </div>

        {/* Master Spotlight Card */}
        <div className="rounded-3xl glossy-card glossy-sheen glossy-glow p-6 sm:p-9 lg:p-11 shadow-2xl">
          <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Portrait & Key Credentials */}
            <div className="flex flex-col space-y-6">
              
              {/* Photo Card */}
              <div className="relative mx-auto w-full max-w-[320px] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100/60 via-white to-teal-50/50 dark:from-[#0a231b] dark:via-[#0e1726] dark:to-[#07131d] p-2.5 border border-white/95 dark:border-emerald-500/40 shadow-[0_12px_30px_-8px_rgba(6,78,59,0.18)] dark:shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)]">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={professor.portrait}
                    alt={professor.name}
                    width={320}
                    height={400}
                    className="h-full w-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/30 dark:ring-white/10 pointer-events-none rounded-xl" />
                  
                  {/* Bottom overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-3.5 pt-8">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600/90 dark:bg-emerald-500/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                      <Sparkles size={11} /> Lab Head · NIT Durgapur
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Affiliation Block */}
              <div className="text-center sm:text-left space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {professor.name}
                </h3>
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                  {professor.designation}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <Building2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>National Institute of Technology Durgapur</span>
                </div>
              </div>

              {/* Education Box */}
              <div className="p-4 rounded-xl bg-white/70 dark:bg-[#0c1626] border border-white/90 dark:border-emerald-500/20 text-xs text-slate-600 dark:text-slate-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <GraduationCap size={15} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Academic Qualifications</span>
                </div>
                <p className="leading-relaxed text-[11.5px] text-slate-600 dark:text-slate-400">
                  Ph.D. in Engineering (Jadavpur Univ.) • M.Tech (IIT Kharagpur) • B.Tech (Univ. of Calcutta) • B.Sc. (Bethune College)
                </p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {[
                  { ...highlights[0], bg: "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/30 dark:from-emerald-950/40 dark:via-[#131b2e] dark:to-[#0e1726]", border: "border-emerald-200/80 dark:border-emerald-500/30", text: "text-emerald-900 dark:text-emerald-300" },
                  { ...highlights[1], bg: "bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/30 dark:from-teal-950/40 dark:via-[#131b2e] dark:to-[#0e1726]", border: "border-teal-200/80 dark:border-teal-500/30", text: "text-teal-900 dark:text-teal-300" },
                  { ...highlights[2], bg: "bg-gradient-to-br from-amber-50/90 via-white to-emerald-50/30 dark:from-amber-950/30 dark:via-[#131b2e] dark:to-[#0e1726]", border: "border-amber-200/80 dark:border-amber-500/30", text: "text-amber-900 dark:text-amber-300" },
                  { ...highlights[3], bg: "bg-gradient-to-br from-blue-50/90 via-white to-sky-50/30 dark:from-blue-950/30 dark:via-[#131b2e] dark:to-[#0e1726]", border: "border-blue-200/80 dark:border-blue-500/30", text: "text-blue-900 dark:text-blue-300" },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border ${item.border} ${item.bg} shadow-[0_4px_14px_-4px_rgba(6,78,59,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] hover-glow text-center sm:text-left transition-all duration-300`}
                  >
                    <div className={`text-lg sm:text-xl font-black ${item.text}`}>
                      {item.value}
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-tight mt-0.5">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Citation Indexing Badge */}
              <div className="flex flex-wrap items-center justify-around sm:justify-between gap-1.5 px-3 py-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-500/20 text-[10px] sm:text-[11px] font-semibold text-emerald-900 dark:text-emerald-300">
                <span className="flex items-center gap-1">
                  <Award size={13} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Scholar h-index: <strong>31</strong></span>
                </span>
                <span className="text-emerald-300 dark:text-emerald-700 hidden xs:inline">|</span>
                <span>i10-index: <strong>72</strong></span>
                <span className="text-emerald-300 dark:text-emerald-700 hidden xs:inline">|</span>
                <span>Scopus: <strong>22</strong></span>
              </div>

            </div>

            {/* Right Column: Bio Narrative, Research Domains & Action Portal */}
            <div className="flex flex-col justify-between space-y-8">
              
              {/* Academic Leadership Narrative */}
              <div>
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 mb-2">
                  <Briefcase size={17} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Research Biography & Leadership</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#103d32] dark:text-white leading-snug">
                  Pioneering Biochemical Reaction Engineering & Environmental Biotechnology
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Prof. Susmita Dutta has served as a Professor in the Department of Chemical Engineering at the National Institute of Technology Durgapur since 2007. Grounded in chemical engineering principles, transport phenomena, and reaction kinetics, her research program pioneers scalable biotechnological solutions for industrial decarbonization, effluent decontamination, and circular bioeconomy.
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  She has served as Principal Investigator for major national sponsored research initiatives, including the successfully completed flagship <strong>IMPRINT project (Ministry of Education / DST-SERB)</strong> for the reclamation of steel industry wastewater using microalgal consortia, as well as investigations on novel low-cost adsorbents for fluoride and toxic heavy metal abatement funded by DST, Government of India.
                </p>
              </div>

              {/* Research Thrust Areas */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <Microscope size={17} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">Core Research Specializations</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold hidden sm:inline">
                    BIOENROL · NIT Durgapur
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {researchInterests.map((interest, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-white/70 dark:bg-[#0c1626] border border-white/80 dark:border-emerald-500/25 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2.5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9)] hover:border-emerald-300 dark:hover:border-emerald-400/60 transition-colors"
                    >
                      <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Profiles & Actions Row */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* External Profile Links */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={professor.nitProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="glossy-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white shadow-sm transition"
                  >
                    <Globe size={14} /> Official Faculty Portal <ExternalLink size={11} />
                  </a>
                  <a
                    href={professor.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="glossy-pill inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-900 dark:text-emerald-300 transition hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
                  >
                    <BookOpen size={14} /> Google Scholar <ExternalLink size={11} />
                  </a>
                  <a
                    href={professor.orcid}
                    target="_blank"
                    rel="noreferrer"
                    className="glossy-pill inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    ORCID <ExternalLink size={11} />
                  </a>
                </div>

                {/* Team & Contact Links */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs w-full sm:w-auto">
                  <a 
                    href={`mailto:${professor.email}`}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 font-medium transition break-all"
                  >
                    <Mail size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{professor.email}</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-600 hidden xs:inline">|</span>
                  <Link
                    href="/members"
                    className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    <span>Lab Team (23) →</span>
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
