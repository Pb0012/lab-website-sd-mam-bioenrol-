import { SectionHeading } from "@/components/ui/SectionHeading";
import { Leaf, Activity, Beaker, Droplets, Zap } from "lucide-react";

export const metadata = {
  title: "Research Areas | Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Core research thrusts in biochemical reaction engineering, phycoremediation, adsorption science, and environmental biotechnology headed by Prof. Susmita Dutta at NIT Durgapur.",
};

const researchDetails = [
  {
    title: "Biochemical Reaction Engineering",
    description: "Our lab focuses on the fundamental and applied aspects of bioprocess engineering, bioreactor design, enzyme kinetics, and microbial transport phenomena. We investigate growth kinetics under stress conditions to optimize substrate conversion and reactor scale-up.",
    topics: ["Bioreactor Hydrodynamics", "Process Scale-Up", "Kinetics & Mass Transfer", "Transport Phenomena"],
    icon: Beaker,
    color: "bg-emerald-100/90 dark:bg-gradient-to-br dark:from-emerald-950/90 dark:via-emerald-900/50 dark:to-[#041a14] border border-emerald-300/80 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 shadow-sm dark:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
  },
  {
    title: "Phycoremediation & Industrial Effluents",
    description: "Applying microalgae and microalgal-bacterial consortia to treat hazardous industrial effluents, including steel plant wastewater, secondary petroleum refinery effluents, and coke-oven wastewater, with simultaneous biomass generation.",
    topics: ["Steel Wastewater Reclamation", "Petroleum Refinery Effluents", "Coke-Oven Wastewater", "Nutrient Recovery"],
    icon: Droplets,
    color: "bg-teal-100/90 dark:bg-gradient-to-br dark:from-teal-950/90 dark:via-teal-900/50 dark:to-[#041918] border border-teal-300/80 dark:border-teal-500/40 text-teal-800 dark:text-teal-300 shadow-sm dark:shadow-[0_0_20px_rgba(20,184,166,0.25)]",
  },
  {
    title: "Adsorption & Low-Cost Adsorbents",
    description: "Pioneering the development of sustainable, low-cost adsorbent matrices from agricultural residues and charred industrial byproducts (such as charred sawdust and citrus fruit peels) for removing mercury, heavy metals, synthetic dyes, and fluoride.",
    topics: ["Fluoride Abatement", "Mercury & Heavy Metals", "Sawdust & Biomass Adsorbents", "Dye Adsorption Kinetics"],
    icon: Leaf,
    color: "bg-amber-100/90 dark:bg-gradient-to-br dark:from-amber-950/90 dark:via-amber-900/50 dark:to-[#1a1204] border border-amber-300/80 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 shadow-sm dark:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
  },
  {
    title: "Microalgal Strain Development & Consortia",
    description: "Studying pure microalgal cultures (such as Graesiella emersonii sp. NITD 23 and Chlorella sp.) and engineered bacterial-microalgal co-cultures for enhanced resilience, syntrophic gas exchange, and high-salinity phycodesalination.",
    topics: ["Graesiella emersonii NITD 23", "Bacterial-Algal Syntrophy", "Phycodesalination", "Biofilm Immobilization"],
    icon: Activity,
    color: "bg-blue-100/90 dark:bg-gradient-to-br dark:from-blue-950/90 dark:via-blue-900/50 dark:to-[#051326] border border-blue-300/80 dark:border-blue-500/40 text-blue-800 dark:text-blue-300 shadow-sm dark:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
  },
  {
    title: "Carbon Capture & Emerging Pollutants",
    description: "Integrating membrane contactors and microalgae-bacterial systems for industrial flue gas CO₂ capture, biological sequestration, and targeted mitigation of recalcitrant emerging pollutants and endocrine-disrupting chemicals.",
    topics: ["Membrane CO₂ Capture", "Emerging Pollutant Abatement", "Refractory Contaminants", "Circular Bioeconomy"],
    icon: Zap,
    color: "bg-indigo-100/90 dark:bg-gradient-to-br dark:from-indigo-950/90 dark:via-indigo-900/50 dark:to-[#090b24] border border-indigo-300/80 dark:border-indigo-500/40 text-indigo-800 dark:text-indigo-300 shadow-sm dark:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
  },
  {
    title: "Emerging Pollutants",
    description: "Developing advanced biotechnological and sorption strategies for the degradation and removal of recalcitrant emerging contaminants, endocrine disruptors, pharmaceutical pollutants, and toxic industrial micro-pollutants.",
    topics: ["Emerging Contaminants", "Endocrine Disruptors", "Pharmaceutical Effluents", "Micropollutant Abatement"],
    icon: Droplets,
    color: "bg-purple-100/90 dark:bg-gradient-to-br dark:from-purple-950/90 dark:via-purple-900/50 dark:to-[#150726] border border-purple-300/80 dark:border-purple-500/40 text-purple-800 dark:text-purple-300 shadow-sm dark:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
  }
];

export default function ResearchPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-16 sm:py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Research Areas"
          subtitle="Core scientific domains and research specializations of the Biological & Environmental Research Laboratory, directed by Prof. Susmita Dutta at NIT Durgapur."
        />
        
        <div className="space-y-10 mt-12">
          {researchDetails.map((area, index) => (
            <div 
              key={area.title} 
              className="glossy-card hover-glow rounded-3xl p-7 sm:p-10 transition-all duration-300"
            >
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-14 items-center`}>
                <div className="md:w-1/2 w-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${area.color}`}>
                    <area.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">{area.title}</h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {area.topics.map((topic, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-[#131b2e] border border-white/80 dark:border-slate-800 px-3 py-2 rounded-xl shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="aspect-[16/10] rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-lg border border-white/60 dark:border-slate-700 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
