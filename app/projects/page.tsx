import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Research Projects | Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Sponsored research projects, industrial consultancy, and experimental investigations headed by Prof. Susmita Dutta at NIT Durgapur.",
};

const projects = [
  {
    title: "Hybrid Absorption Membrane-Assisted CO₂ Capture & Microalgal Solvent Regeneration",
    slug: "phycoremediation",
    description: "Sponsored by Department of Biotechnology (DBT), Ministry of Science & Technology, Govt. of India. Developing an integrated pilot-scale platform for bio-regenerative CO₂ sequestration and lycopene pigment production from Dunaliella salina.",
    status: "Ongoing (DBT)",
    agency: "DBT, Ministry of Science & Technology, Govt. of India",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    title: "Reclamation of Steel Industry Wastewater via Phycoremediation & Biofuel Assessment",
    slug: "phycoremediation",
    description: "Funded under the prestigious IMPRINT scheme (Ministry of Education / DST-SERB, Govt. of India). Successfully developed microalgae and bacterial consortia for treating steel effluents while assessing residual algal biomass for biofuel applications.",
    status: "Completed (IMPRINT)",
    agency: "IMPRINT (MoE / SERB-DST, Govt. of India)",
    image: "https://images.unsplash.com/photo-1574689049597-7e6f47385d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    title: "Treatment of Coke Oven Wastewater Using Hybrid Technology",
    slug: "phycoremediation",
    description: "Sponsored by the Indian Institute of Chemical Engineers (IIChE). Investigating integrated physical-chemical adsorption and microbial bioreactor frameworks for complex coke-oven effluent detoxification.",
    status: "Completed (IIChE)",
    agency: "Indian Institute of Chemical Engineers (IIChE)",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    title: "Phycoremediation of Cyanide & CO₂ Sequestration Using Mixed Algal-Cyanobacteria Consortium",
    slug: "phycoremediation",
    description: "Sponsored by Department of Science and Technology (DST), Govt. of India. Developing an integrated dual-purpose approach for cyanide decontamination from coke-oven wastewater and biological CO₂ sequestration from waste gas.",
    status: "Completed (DST)",
    agency: "DST, Govt. of India",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    title: "Abatement of Fluoride from Groundwater for Safe Drinking Water Supply",
    slug: "phycoremediation",
    description: "Funded by Department of Science and Technology, Government of West Bengal. Designing scalable low-cost adsorbent beds to abate high fluoride concentrations from rural drinking water aquifers.",
    status: "Completed (DST-WB)",
    agency: "DST, Government of West Bengal",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    title: "Technology Development of Liquid Phase Adsorption of Mercury Using Low-Cost Adsorbents",
    slug: "phycoremediation",
    description: "Sponsored by Department of Science and Technology (DST), Govt. of India. Formulating charred sawdust, citrus peel waste, and carbonaceous matrices for liquid-phase mercury and toxic pollutant capture for industrial waste management.",
    status: "Completed (DST)",
    agency: "DST, Govt. of India",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508abb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-9s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Research Projects" subtitle="Explore our ongoing and completed sponsored scientific investigations." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.title} className="group flex flex-col h-full">
              <div className="h-full overflow-hidden flex flex-col glossy-card hover-glow rounded-2xl group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#0e1726]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider border border-white/80 dark:border-emerald-500/30 shadow-xs">
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-amber-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-emerald-700 dark:text-emerald-400 font-semibold text-sm mt-auto pt-3 border-t border-slate-200/50 dark:border-slate-800">
                    <span>View Project Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
