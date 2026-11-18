import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight, Leaf, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#073d32] via-[#06352b] to-[#04241d] text-white border-t border-emerald-800/40">
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-9">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <a 
              href="https://nitdgp.ac.in/" 
              target="_blank" 
              rel="noreferrer" 
              title="NIT Durgapur" 
              className="h-11 w-11 rounded-2xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm transition hover:scale-105"
            >
              <Image 
                src="/images/nit-durgapur-logo.png" 
                alt="NIT Durgapur Logo" 
                width={36} 
                height={36} 
                className="h-full w-full object-contain" 
              />
            </a>
            <span className="h-11 w-11 rounded-2xl border border-emerald-400/30 bg-emerald-900/40 flex items-center justify-center shrink-0 text-emerald-300 shadow-xs">
              <Leaf size={22}/>
            </span>
            <div>
              <p className="font-bold text-base tracking-tight text-white">BIOENROL — Biological & Environmental Research Laboratory</p>
              <p className="text-[11px] text-emerald-300 font-semibold tracking-wide uppercase mt-0.5">Science & Technology · Innovation · Sustainability</p>
              <p className="text-xs text-emerald-200/90 font-medium">Department of Chemical Engineering · NIT Durgapur</p>
              <p className="text-[11px] text-emerald-300/80 mt-0.5">Principal Investigator: Prof. Susmita Dutta</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Conducting research in biochemical reaction engineering, phycoremediation of complex industrial wastewaters, adsorption matrices, carbon sequestration, and environmental sustainability.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <a 
              href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 hover:text-white transition shadow-xs"
            >
              <GraduationCap size={14} /> Prof. Susmita Dutta Profile <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">Explore</h3>
          <div className="grid grid-cols-2 gap-y-3 text-sm text-white/75">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/research" className="hover:text-white transition">Research</Link>
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/members" className="hover:text-white transition">People</Link>
            <Link href="/facilities" className="hover:text-white transition">Facilities</Link>
            <Link href="/publications" className="hover:text-white transition">Publications</Link>
            <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
            <Link href="/open-positions" className="hover:text-white transition">Join Us</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">Contact & Location</h3>
          <p className="flex gap-2 text-sm leading-6 text-white/75">
            <MapPin size={16} className="mt-1 shrink-0 text-emerald-400"/> 
            Department of Chemical Engineering, National Institute of Technology Durgapur, Mahatma Gandhi Avenue, Durgapur, West Bengal - 713209, India
          </p>
          <p className="mt-3 flex items-center gap-2 text-xs text-white/85">
            <Mail size={14} className="text-emerald-400" />
            <span>sdutta.che@nitdgp.ac.in</span>
          </p>
          <a 
            href="https://nitdgp.ac.in/" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition"
          >
            NIT Durgapur Institute Portal <ArrowUpRight size={14}/>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#031c15]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} BIOENROL · Biological & Environmental Research Laboratory</span>
          <span>National Institute of Technology Durgapur</span>
        </div>
      </div>
    </footer>
  );
}
