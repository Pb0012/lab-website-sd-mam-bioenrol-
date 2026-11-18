import { 
  Sparkles, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  FileText, 
  ArrowRight, 
  Award, 
  Building2, 
  FlaskConical
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Summer Internships | BIOENROL · Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Summer research internship opportunities for undergraduate and postgraduate students in biochemical engineering and environmental biotechnology at BIOENROL under Prof. Susmita Dutta at NIT Durgapur.",
};

export default function OpenPositionsPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-16 sm:py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Opportunities · Summer Research Program</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-4">
            Summer Research <span className="text-gradient-emerald">Internship</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            The <strong>Biological & Environmental Research Laboratory (BIOENROL)</strong> at the Department of Chemical Engineering, National Institute of Technology Durgapur, invites motivated undergraduate and postgraduate students to apply for hands-on summer research training under the guidance of <strong>Prof. Susmita Dutta</strong>.
          </p>
        </div>

        {/* Summer Internship Primary Card */}
        <div className="glossy-card glossy-sheen glossy-glow hover-glow rounded-3xl p-6 sm:p-9 lg:p-10 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold border border-emerald-300/60 dark:border-emerald-500/30 shadow-xs">
                Applications Open · Upcoming Summer Batch
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>Duration: 6 – 8 Weeks (Summer Period)</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
                Academic Research Training
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Summer Research Intern (B.Tech / M.Tech / M.Sc.)
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Department of Chemical Engineering · National Institute of Technology Durgapur</span>
              </p>
            </div>

            {/* Eligibility Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#131b2e] border border-white/90 dark:border-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold mb-1">Target Audience & Eligibility:</strong>
                  Students currently pursuing 2nd / 3rd year <strong>B.Tech / B.E.</strong> or 1st year <strong>M.Tech / M.Sc.</strong> in Chemical Engineering, Biotechnology, Environmental Engineering, Biochemical Engineering, Applied Chemistry, Microbiology, or allied disciplines with a strong interest in experimental research.
                </div>
              </div>
            </div>

            {/* Research Thrust Areas */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Core Research Domains Available for Interns:</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Microalgal & Bacterial Consortia Cultivation in Photobioreactors (PBR)",
                  "Industrial Wastewater Phycoremediation (Steel plant, coke-oven, refinery effluents)",
                  "Synthesis and Characterization of Low-Cost Adsorbents for Fluoride & Heavy Metals",
                  "Bioprocess Reaction Engineering, Kinetic Modeling & Transport Phenomena",
                  "Analytical Instrument Training: AAS, HPLC, TOC Analyzer, and Fluorescence Microscopy",
                  "Experimental Biofuel Extraction & Downstream Bioseparation Technologies"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Internship Highlights & Benefits:</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Direct Mentorship:</strong> Work directly with Prof. Susmita Dutta and experienced doctoral scholars in an active wet laboratory.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Hands-on Instrumentation Experience:</strong> Practical operation of pilot photobioreactors, spectrophotometers, and analytical suites.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Official Certificate:</strong> Certificate of Summer Research Internship awarded by NIT Durgapur upon completion of the project and report submission.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Publication Opportunities:</strong> High-quality research findings may be incorporated into peer-reviewed international journal publications.</span>
                </li>
              </ul>
            </div>

            {/* Quick action bar */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Application Inquiries: <strong className="text-emerald-700 dark:text-emerald-400">sdutta.che@nitdgp.ac.in</strong> (cc: <span className="text-emerald-700 dark:text-emerald-400">susmita.dutta@che.nitdgp.ac.in</span>)
              </div>
              <a 
                href="mailto:sdutta.che@nitdgp.ac.in?cc=susmita.dutta@che.nitdgp.ac.in&subject=%5BSummer%20Internship%20Application%5D%20-%20Candidate%20Name"
                className="glossy-btn text-white font-semibold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02] active:scale-95"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Apply via Email</span>
              </a>
            </div>

          </div>
        </div>

        {/* How to Apply Section */}
        <div className="glossy-card hover-glow rounded-3xl p-6 sm:p-9 lg:p-10 border border-white/90 dark:border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/80 dark:border-emerald-500/30">
              <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Application Procedure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              How to Apply for Summer Internship
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Prospective interns are requested to submit their application package directly to <strong>Prof. Susmita Dutta</strong> via email. Applications are reviewed on a rolling basis for the upcoming summer session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-[#131b2e] border border-white/90 dark:border-slate-700/80 text-xs sm:text-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Required Application Documents:</span>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-xs">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Updated Curriculum Vitae (CV)</strong> including semester-wise CGPA/percentage and academic coursework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>College / University ID Card</strong> (scanned copy of valid institutional identity card).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Brief Statement of Purpose</strong> (1 page summary of research motivation, preferred research thrust, and proposed duration).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span><strong>Recommendation / NOC</strong> from Head of Department or Faculty Advisor (optional but encouraged).</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-[#131b2e] border border-white/90 dark:border-slate-700/80 text-xs sm:text-sm space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Email Submission Instructions:</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <p>
                  Send your application email to: <br />
                  <strong className="text-emerald-700 dark:text-emerald-400 text-sm">sdutta.che@nitdgp.ac.in</strong><br />
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">cc: susmita.dutta@che.nitdgp.ac.in</span>
                </p>
                <div className="p-3 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Subject Line Format:</span>
                  <code className="text-[11.5px] font-mono text-emerald-800 dark:text-emerald-300 break-all select-all">
                    [Summer Internship] - Your Full Name - College Name
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Department of Chemical Engineering · National Institute of Technology Durgapur
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:sdutta.che@nitdgp.ac.in?cc=susmita.dutta@che.nitdgp.ac.in&subject=%5BSummer%20Internship%20Application%5D%20-%20Candidate%20Name"
                className="glossy-btn text-white font-bold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-sm transition hover:scale-[1.02] active:scale-95"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Internship Application</span>
              </a>
              <Link
                href="/contact"
                className="glossy-pill text-xs font-semibold text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5 hover:border-emerald-400 transition"
              >
                <span>Contact Lab</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
