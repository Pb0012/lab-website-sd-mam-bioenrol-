import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Trophy, Users, Calendar, Sparkles, ExternalLink, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Events, Outreach & Achievements | Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Key honors, conference presentation awards, sponsored research grants, and outreach initiatives headed by Prof. Susmita Dutta at NIT Durgapur.",
};

const achievements = [
  {
    category: "National Best Paper Award 2025",
    title: "IIChE NRC Award 2025 – Best Paper Award",
    recipient: "Prof. Susmita Dutta & Research Team",
    date: "CHEMCON-2025, Annamalai University",
    description: "Conferred by the Indian Institute of Chemical Engineers (IIChE) for the paper 'Multigene genetic programming approach for modelling and optimisation of removal of heavy metals from ash pond water using cyanobacterial-microalgal consortium', published in Indian Chemical Engineer (2024).",
    badge: "IIChE National Award",
    icon: Trophy,
  },
  {
    category: "National Grant Award",
    title: "IMPRINT (MoE / SERB-DST) Flagship Research Grant",
    recipient: "Prof. Susmita Dutta (Principal Investigator)",
    date: "Govt. of India",
    description: "Awarded competitive national research funding for 'Reclamation of Steel Industry Wastewater through Phycoremediation Technique Using Microalgae and Assessment of Biofuel Production from Algal Biomass' — successfully completed.",
    badge: "Flagship Grant",
    icon: Trophy,
  },
  {
    category: "National Biotechnology Grant",
    title: "DBT CO₂ Capture & Bioregenerative Platform Grant",
    recipient: "Prof. Susmita Dutta (Investigator) & Consortium",
    date: "DBT, Ministry of Science & Technology",
    description: "Sponsored pilot-scale research on 'Hybrid Absorption Membrane-Assisted CO2 Capture and Microalgal Solvent Regeneration: An Integrated Pilot-Scale Platform for Bio-Regenerative CO2 Sequestration and Lycopene Pigment Production'.",
    badge: "DBT Grant",
    icon: Trophy,
  },
  {
    category: "Industry Research Fellowship",
    title: "Thermax Limited 'Sampark' Professor Fellowship (2020)",
    recipient: "Prof. Susmita Dutta",
    date: "Thermax Limited (Water & Waste Solutions)",
    description: "Selected and successfully completed the prestigious Professor Internship Programme 'Sampark' in the Innovation Department of Thermax Limited on 'Fluoride Removal from Industrial Wastewater with High TDS'.",
    badge: "Industry Fellowship",
    icon: Award,
  },
  {
    category: "Journal Editorial Leadership",
    title: "Editorial Board Member — Taylor & Francis",
    recipient: "Prof. Susmita Dutta",
    date: "2019 – Present",
    description: "Appointed as an Editorial Board Member of the Journal of Environmental Engineering and Landscape Management (Taylor & Francis).",
    badge: "Editorial Board",
    icon: Award,
  },
  {
    category: "Citation Excellence Award",
    title: "Elsevier Top Cited Paper Certification",
    recipient: "Prof. Susmita Dutta & Co-authors",
    date: "Elsevier (CEJ)",
    description: "Certified as one of the Top Cited Papers by Elsevier for the landmark investigation 'Application of Response Surface Methodology for Methylene Blue dye removal from aqueous solution using low cost adsorbent' in Chemical Engineering Journal.",
    badge: "Top Cited Paper",
    icon: Trophy,
  },
  {
    category: "Best Technical Paper Award",
    title: "M. H. Shukla 1st Prize — CHEMCON",
    recipient: "Prof. Susmita Dutta",
    date: "IIChE Annual Congress",
    description: "Awarded M. H. Shukla 1st Prize for the Best Technical Paper presented in the 60th Annual Session of the Indian Chemical Engineering Congress (CHEMCON).",
    badge: "1st Prize",
    icon: Award,
  },
  {
    category: "Student Mentorship Award",
    title: "IIChE Ambuja's Best Home Paper Award (Second Prize)",
    recipient: "Prof. Susmita Dutta (Mentor) for Gaurav Sen",
    date: "IIChE Awards",
    description: "Received Certificate of Appreciation from IIChE for mentoring the B.Tech thesis project entitled 'Bioremediation of Cr (VI) using live cyanobacteria: Experimentation and kinetic modelling'.",
    badge: "Mentorship Honor",
    icon: Award,
  },
];

const eventsAndOutreach = [
  {
    title: "Invited Speaker — SustainX 2026 (IIT Madras)",
    date: "July 24–25, 2026",
    type: "International Conference",
    location: "Centre for Circularity, School of Sustainability, IIT Madras, Chennai",
    summary: "Invited Speaker at SustainX 2026 themed 'Circularity in Energy, Earth and Environment', presenting on bioprocess intensification, algal-bacterial consortia, and closed-loop effluent recycling.",
  },
  {
    title: "Keynote Address — SIWMB-2019 (SRM IST)",
    date: "August 2019",
    type: "Keynote Address",
    location: "SRM Institute of Science and Technology, Chennai",
    summary: "Delivered Keynote Address at the International Conference on Sustainable Technologies for the Industrial Hazardous Waste Management and Bioenergy (SIWMB-2019).",
  },
  {
    title: "Invited Lecture — University of Alberta, Canada",
    date: "March 2009",
    type: "International Seminar Series",
    location: "Dept. of Agriculture, Food & Nutritional Science, University of Alberta",
    summary: "Invited presentation on 'Removal of Pollutants from Simulated Waste Water with Special Reference to Heavy Metal Removal using Immobilized Enzyme' during advanced lipid biofuel research training.",
  },
  {
    title: "Visiting Research Fellowship — UMass Dartmouth, USA",
    date: "June 2014",
    type: "International Academic Exchange",
    location: "Civil & Environmental Engineering Dept., University of Massachusetts Dartmouth",
    summary: "Conducted collaborative experimental investigations on low-cost environmental adsorption systems and biological wastewater purification as Visiting Research Fellow.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with MATRIX Lab quote */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Honors & Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-4">
            Events, Outreach & <span className="text-gradient-emerald">Achievements</span>
          </h1>
          <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-4">
            “An investment in knowledge always pays the best interest.” — Benjamin Franklin
          </blockquote>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            This page highlights key achievements, student excellence prizes, symposium awards, and outreach initiatives reflecting our dedication to academic excellence, scientific leadership, and community impact.
          </p>
        </div>

        {/* Section 1: Awards & Accolades */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Trophy className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <span>Notable Honors & Presentation Awards</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="glossy-card hover-glow rounded-2xl p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>{item.recipient}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Department of Chemical Engineering</span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Events & Community Outreach */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <span>Workshops, Symposia & Outreach Initiatives</span>
          </h2>

          <div className="space-y-6">
            {eventsAndOutreach.map((event, i) => (
              <div
                key={i}
                className="glossy-card hover-glow rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6 transition-all"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-semibold border border-teal-100 dark:border-teal-500/30">
                      {event.type}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mb-3">
                    Venue: {event.location}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {event.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center md:items-end flex-col justify-center">
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#131b2e] hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-800 dark:text-slate-200 hover:text-emerald-800 dark:hover:text-emerald-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-500/40 transition-colors"
                  >
                    Inquire on Upcoming Sessions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-500/20">
          <div>
            <h3 className="text-xl font-bold mb-1">Interested in Collaborating or Attending Workshops?</h3>
            <p className="text-xs text-emerald-200">
              We welcome academic visitors, students, and industrial partners interested in bioprocess training.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/open-positions"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Join Our Lab
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
