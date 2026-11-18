import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Wrench, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Lab Facilities & Equipment | BIOENROL · Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Advanced analytical, adsorption, and bioprocess infrastructure at BIOENROL (Biological & Environmental Research Laboratory), Department of Chemical Engineering, National Institute of Technology Durgapur.",
};

const instruments = [
  {
    name: "Automated Tubular Photobioreactor (PBR)",
    application: "Continuous microalgal cultivation, light path optimization, and kinetic studies",
    specs: "50L working volume, borosilicate glass loops, automated pH & CO2 gas dosing, LED PAR array.",
    category: "Algal Cultivation",
  },
  {
    name: "Flat-Panel Photobioreactor Suite",
    application: "High-density biomass productivity and nutrient starvation stress studies",
    specs: "Multi-channel optical sensors, temperature regulation jacket, sterile air sparger.",
    category: "Algal Cultivation",
  },
  {
    name: "Stirred-Tank Microbial Bioreactor (5L & 10L)",
    application: "Bacterial fermentation, microbial consortia co-culture, and kLa mass transfer testing",
    specs: "Rushton impellers, automated dissolved oxygen control, peristaltic feed pumps, thermal mantle.",
    category: "Bioprocess Engineering",
  },
  {
    name: "High-Performance Liquid Chromatography (HPLC)",
    application: "Quantitative profiling of volatile fatty acids (VFAs), sugars, lipids, and metabolites",
    specs: "Refractive index & UV/Vis detectors, C18 and ion-exchange columns, autosampler.",
    category: "Analytical Suite",
  },
  {
    name: "Atomic Absorption Spectroscopy (AAS)",
    application: "Sub-ppm heavy metal biosorption analysis (Cr, Pb, Cd, Ni) in wastewater effluents",
    specs: "Flame and graphite furnace atomization, hollow cathode lamps, automatic baseline correction.",
    category: "Analytical Suite",
  },
  {
    name: "Total Organic Carbon (TOC) Analyzer",
    application: "Quantification of total carbon, inorganic carbon, and dissolved organic carbon",
    specs: "High-temperature catalytic oxidation (680°C), NDIR detector, liquid autosampler.",
    category: "Analytical Suite",
  },
  {
    name: "Phase-Contrast & Fluorescence Microscopy Station",
    application: "Morphological inspection of symbiotic consortia, cell viability, and lipid staining",
    specs: "Epi-fluorescence illumination, FITC/DAPI filter cubes, 4K digital micro-imaging camera.",
    category: "Microscopy & Imaging",
  },
  {
    name: "Dissolved Oxygen (DO) & Multi-Parameter Sensor Station",
    application: "Real-time quantification of dissolved O2, pH, conductivity, and oxidation-reduction potential",
    specs: "Optical Luminescent DO probes, zero-drift calibration, continuous digital logging.",
    category: "Process Monitoring",
  },
  {
    name: "High-Speed Refrigerated Centrifuge",
    application: "Density-based cell separation, harvesting, and algal dewatering without cell rupture",
    specs: "Max 15,000 RPM (24,000 × g), temperature control from -10°C to +40°C, angle & swing-out rotors.",
    category: "Downstream Processing",
  },
  {
    name: "Hydrothermal Liquefaction (HTL) Batch Reactor",
    application: "Thermochemical conversion of wet microbial biomass into bio-oil and platform chemicals",
    specs: "Hastelloy C-276 construction, 350°C and 200 bar operating limits, magnetic drive stirrer.",
    category: "Bioproducts",
  },
  {
    name: "UV-Vis Double-Beam Spectrophotometer",
    application: "Daily OD680, OD720, total chlorophyll, carotenoids, and nitrate spectrophotometric assay",
    specs: "190–1100 nm wavelength range, 1.0 nm spectral bandwidth, temperature-controlled cuvette holder.",
    category: "Routine Analytics",
  },
  {
    name: "High-Performance Computational Cluster (CFD & Kinetics)",
    application: "Computational fluid dynamics, bioprocess scale-up, and techno-economic modeling",
    specs: "64-core AMD EPYC workstation, 128 GB ECC RAM, licensed MATLAB, DWSIM, and ANSYS Fluent.",
    category: "Emerging Pollutants",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-20 transition-colors duration-200 relative overflow-hidden">
      {/* Ambient background light orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-emerald-200/40 dark:bg-emerald-950/20 blur-3xl animate-aurora" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-teal-200/35 dark:bg-teal-950/20 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Comprehensive Laboratory Overview (MATRIX style) */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80 dark:border-emerald-500/30 shadow-xs backdrop-blur-md">
            <Wrench className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>Infrastructure & Instrumentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103d32] dark:text-white tracking-tight mb-6">
            Laboratory Facilities & <span className="text-gradient-emerald">Equipment</span>
          </h1>
          <div className="p-6 sm:p-8 rounded-2xl glossy-card glossy-sheen text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
            <p>
              Our laboratory houses advanced <strong>flat-panel and tubular photobioreactors</strong>, complemented by stirred-tank and airlift microbial fermentation systems for precise evaluation of algal-bacterial growth kinetics, mass transfer coefficients, and pollutant removal.
            </p>
            <p>
              In addition, we are equipped with sophisticated analytical instrumentation, including <strong>Atomic Absorption Spectroscopy (AAS)</strong>, <strong>High-Performance Liquid Chromatography (HPLC)</strong>, <strong>Total Organic Carbon (TOC) analyzer</strong>, and <strong>fluorescence microscopy</strong>, along with several other high-end facilities that enable comprehensive qualitative and quantitative analysis relevant to chemical engineering and biotechnology research.
            </p>
          </div>
        </div>

        {/* Equipment Cards Grid (MATRIX Lab style) */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200/80 dark:border-slate-800 pb-3 flex items-center justify-between">
            <span>List of Major Equipment & Instrumentation</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">{instruments.length} Instruments</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((inst, index) => (
              <div
                key={index}
                className="glossy-card hover-glow rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-500/30">
                      {inst.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {inst.name}
                  </h3>

                  <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold mb-3">
                    {inst.application}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 bg-white/70 dark:bg-[#131b2e] p-3 rounded-xl border border-white/80 dark:border-slate-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                    <strong className="text-slate-800 dark:text-slate-200">Specifications:</strong> {inst.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Operational & Calibrated</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action Navigation (MATRIX style) */}
        <div className="p-8 rounded-2xl bg-slate-900 dark:bg-[#070b12] text-white flex flex-wrap items-center justify-between gap-6 shadow-xl border border-slate-800 dark:border-emerald-500/20">
          <div>
            <h3 className="text-xl font-bold mb-1">Need Equipment Access or Collaboration?</h3>
            <p className="text-xs text-slate-300">
              Our facilities are accessible for sponsored research, interdisciplinary academic testing, and student projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 text-xs" asChild>
              <Link href="/members">Meet the Team</Link>
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs" asChild>
              <Link href="/open-positions">Join Our Lab</Link>
            </Button>
            <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-950 text-xs" asChild>
              <Link href="/">Go to Home</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
