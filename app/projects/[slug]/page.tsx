import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return {
    title: `${resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Biological & Environmental Research Laboratory, NIT Durgapur`
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen pb-20 transition-colors duration-200">
      {/* Project Header */}
      <div className="bg-slate-900 dark:bg-[#070b12] text-white pt-24 pb-16 relative overflow-hidden border-b border-emerald-500/20">
        <div className="absolute inset-0 bg-emerald-900/30 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574689049597-7e6f47385d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <Link href="/projects" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 font-medium text-sm transition-colors">
            &larr; Back to all projects
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Phycoremediation of Industrial Wastewater
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Treating industrial effluents using algal-bacterial consortia while recovering valuable biomass under Prof. Susmita Dutta.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white dark:bg-[#0e1726] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Industrial wastewater contains high concentrations of heavy metals, organic pollutants, and nutrients. Traditional treatment methods are often energy-intensive and produce significant secondary sludge. This project explores phycoremediation—using microalgae and bacteria synergistically—to simultaneously treat wastewater and generate usable biomass.
              </p>
            </section>

            <section className="bg-white dark:bg-[#0e1726] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Objectives</h2>
              <ul className="space-y-4">
                {[
                  "Characterize the specific pollutants in textile, steel, and refinery effluents.",
                  "Develop a robust algal-bacterial consortium capable of tolerating high toxicity.",
                  "Optimize light intensity, pH, and CO2 supplementation for maximum pollutant removal.",
                  "Perform kinetic modeling of biomass growth and nutrient uptake."
                ].map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200 text-lg">{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-[#0e1726] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Methodology & Experimental Setup</h2>
              <div className="bg-slate-50 dark:bg-[#131b2e] p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 font-mono text-sm text-slate-700 dark:text-slate-200 overflow-x-auto">
                <div className="min-w-max flex items-center justify-between text-center gap-4">
                  <div className="bg-white dark:bg-[#0e1726] px-4 py-3 rounded shadow-sm border border-slate-200 dark:border-slate-700 font-semibold">Wastewater<br/>Characterization</div>
                  <ArrowRight className="text-slate-400" />
                  <div className="bg-white dark:bg-[#0e1726] px-4 py-3 rounded shadow-sm border border-slate-200 dark:border-slate-700 font-semibold">Cultivation in<br/>Photobioreactors</div>
                  <ArrowRight className="text-slate-400" />
                  <div className="bg-white dark:bg-[#0e1726] px-4 py-3 rounded shadow-sm border border-emerald-200 dark:border-emerald-500/40 font-semibold text-emerald-700 dark:text-emerald-400">Pollutant<br/>Removal</div>
                  <ArrowRight className="text-slate-400" />
                  <div className="bg-white dark:bg-[#0e1726] px-4 py-3 rounded shadow-sm border border-emerald-200 dark:border-emerald-500/40 font-semibold text-emerald-700 dark:text-emerald-400">Biomass<br/>Recovery</div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Experiments are conducted in 5L flat-panel and tubular photobioreactors under controlled illumination and temperature. 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Lab Setup" className="rounded-xl w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1579380618032-41f22e8dbf14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Samples" className="rounded-xl w-full h-48 object-cover" />
              </div>
            </section>

            <section className="bg-white dark:bg-[#0e1726] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Results & Outcomes</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-6">
                The tailored consortium achieved a 92% reduction in COD and near-complete removal of nitrates within 8 days of batch cultivation. The harvested biomass demonstrated high lipid content, suitable for bio-oil extraction.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-xl border border-emerald-100 dark:border-emerald-500/30">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-300 mb-2">Key Finding</h4>
                <p className="text-emerald-800 dark:text-emerald-200">
                  Symbiotic O2/CO2 exchange between the microalgae and heterotrophic bacteria significantly reduced the aeration costs of the process by 40% compared to traditional activated sludge processes.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 dark:bg-[#0b121e] text-white p-6 rounded-2xl shadow-sm border border-slate-800 dark:border-emerald-500/20">
              <h3 className="text-lg font-bold mb-4 border-b border-slate-800 pb-4">Key Parameters Monitored</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-slate-300">
                  <span>pH</span> <span className="font-mono text-emerald-400">7.2 - 8.5</span>
                </li>
                <li className="flex justify-between items-center text-slate-300">
                  <span>Temperature</span> <span className="font-mono text-emerald-400">25 ± 2 °C</span>
                </li>
                <li className="flex justify-between items-center text-slate-300">
                  <span>Light intensity</span> <span className="font-mono text-emerald-400">120 µmol/m²/s</span>
                </li>
                <li className="flex justify-between items-center text-slate-300">
                  <span>CO₂</span> <span className="font-mono text-emerald-400">2% v/v</span>
                </li>
                <li className="flex justify-between items-center text-slate-300">
                  <span>Biomass conc.</span> <span className="font-mono text-emerald-400">Max 3.2 g/L</span>
                </li>
                <li className="flex justify-between items-center text-slate-300">
                  <span>Growth rate (µ)</span> <span className="font-mono text-emerald-400">0.45 d⁻¹</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0e1726] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">Related Publications</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors leading-tight mb-1">
                      Kinetics of nutrient removal and biomass production by algal-bacterial consortia...
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Journal of Environmental Management (2025)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors leading-tight mb-1">
                      Scale-up of photobioreactors for phycoremediation of textile effluents...
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Bioresource Technology (2024)</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
