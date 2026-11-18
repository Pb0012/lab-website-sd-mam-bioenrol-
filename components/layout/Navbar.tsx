"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink, Leaf, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "People", href: "/members" },
  { name: "Facilities", href: "/facilities" },
  { name: "Publications", href: "/publications" },
];

const moreLinks = [
  { name: "News & Achievements", href: "/achievements" },
  { name: "Research Dashboard", href: "/dashboard" },
  { name: "Summer Internships", href: "/open-positions" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar: NIT Durgapur Affiliation */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#042820] via-[#073d32] to-[#042820] text-white/90 border-b border-emerald-400/15 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 text-[10px] font-semibold tracking-wide sm:px-6 sm:text-[11px]">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <a
              href="https://nitdgp.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 tracking-normal text-white/95 transition hover:text-white truncate"
              title="National Institute of Technology Durgapur"
            >
              <span className="relative flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5 shadow-sm">
                <Image
                  src="/images/nit-durgapur-logo.png"
                  alt="NIT Durgapur Emblem"
                  width={20}
                  height={20}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-bold hidden sm:inline">NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR</span>
              <span className="font-bold sm:hidden truncate">NIT DURGAPUR</span>
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <span className="text-emerald-200/90 font-medium hidden md:inline">DEPARTMENT OF CHEMICAL ENGINEERING</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium tracking-normal text-emerald-200 transition hover:text-white whitespace-nowrap"
              title="Prof. Susmita Dutta Faculty Profile at NIT Durgapur"
            >
              <span>Prof. Susmita Dutta</span> <ExternalLink size={11} />
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href="https://nitdgp.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 font-medium tracking-normal text-emerald-200 transition hover:text-white"
            >
              <span>NIT Durgapur</span> <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Glossy Navigation Bar */}
      <div className="relative border-b border-emerald-950/10 dark:border-emerald-500/20 bg-white/78 dark:bg-[#090e17]/88 backdrop-blur-2xl shadow-[0_4px_24px_-10px_rgba(5,57,42,0.12),inset_0_1px_2px_0_rgba(255,255,255,1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.06)] transition-all duration-300">
        
        {/* Specular linear reflection sheen line */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white dark:via-emerald-400/40 to-transparent pointer-events-none" />

        <div className="mx-auto flex h-[70px] sm:h-[76px] max-w-7xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
          
          {/* Logo & Lab Title */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3.5">
            <a
              href="https://nitdgp.ac.in/"
              target="_blank"
              rel="noreferrer"
              title="National Institute of Technology Durgapur (nitdgp.ac.in)"
              className="group flex shrink-0 items-center"
            >
              <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-white/90 dark:border-emerald-500/40 bg-white/95 dark:bg-gradient-to-br dark:from-emerald-950/80 dark:to-[#091b15] p-1 sm:p-1.5 shadow-[0_4px_12px_rgba(7,61,50,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] dark:shadow-[0_0_16px_rgba(16,185,129,0.25)] transition-all duration-200 group-hover:border-emerald-500 group-hover:scale-105">
                <div className="h-full w-full rounded-lg sm:rounded-xl bg-white p-0.5 flex items-center justify-center">
                  <Image
                    src="/images/nit-durgapur-logo.png"
                    alt="NIT Durgapur Logo"
                    width={44}
                    height={44}
                    className="h-full w-full object-contain transition duration-200"
                    priority
                  />
                </div>
              </div>
            </a>

            <div className="h-7 w-px bg-slate-200/80 dark:bg-slate-800 shrink-0 hidden sm:block" />

            <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3 group/brand" onClick={() => setOpen(false)}>
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 xl:h-10 xl:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl dark-icon-badge group-hover/brand:scale-110 transition-all duration-300">
                <Leaf size={17} className="sm:hidden" />
                <Leaf size={19} className="hidden sm:block xl:hidden" />
                <Leaf size={21} className="hidden xl:block" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 sm:gap-2 leading-tight">
                  <span className="text-[14px] sm:text-[16px] lg:text-[15.5px] xl:text-[18px] font-black tracking-wider text-[#064e3b] dark:text-emerald-300 font-serif">
                    BIOENROL
                  </span>
                  <span className="hidden sm:inline-block h-3.5 w-px bg-emerald-900/20 dark:bg-emerald-500/30" />
                  <span className="hidden sm:inline-block text-[12px] lg:text-[12px] xl:text-[13.5px] font-bold text-[#103d32] dark:text-slate-200">
                    <span className="text-gradient-emerald font-black">Bio</span>logical &amp; <span className="text-gradient-emerald font-black">En</span>vi<span className="text-gradient-emerald font-black">ro</span>nmental Research <span className="text-gradient-emerald font-black">L</span>ab
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-[9px] sm:hidden text-slate-500 dark:text-slate-400 font-medium max-w-[150px] xs:max-w-[210px]">
                  Science & Technology · NIT Durgapur
                </span>
                <span className="mt-0.5 hidden sm:block whitespace-nowrap text-[10px] lg:text-[9.5px] xl:text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
                  Science & Technology · Innovation · Sustainability · NIT Durgapur
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {mainLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-xl px-2 py-1.5 text-[11px] font-semibold transition-all duration-200 xl:px-2.5 xl:py-2 xl:text-xs whitespace-nowrap",
                  isActive(item.href)
                    ? "bg-white/90 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-white dark:border-emerald-500/30 shadow-[0_2px_8px_-2px_rgba(5,57,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)] font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-emerald-950/40 hover:text-emerald-900 dark:hover:text-emerald-200 hover:shadow-xs"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* "More" Dropdown Menu */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 hover:bg-white/60 dark:hover:bg-emerald-950/60 hover:text-emerald-900 dark:hover:text-emerald-300 xl:px-2.5 xl:text-xs cursor-pointer whitespace-nowrap">
                <span>More</span>
                <ChevronDown size={13} className="text-slate-500 dark:text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 w-56 translate-y-1 rounded-2xl border border-white/80 dark:border-slate-800 bg-white/88 dark:bg-[#0e1726]/95 p-2 opacity-0 shadow-2xl shadow-emerald-950/15 backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {moreLinks.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={clsx(
                      "block rounded-xl px-3 py-2.5 text-xs font-semibold transition", 
                      isActive(item.href) 
                        ? "bg-emerald-50/90 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 font-bold" 
                        : "text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-emerald-950/40 hover:text-emerald-900 dark:hover:text-emerald-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Action: Theme Toggle & Glossy Join Us Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <ThemeToggle />
            <Link 
              href="/open-positions" 
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-b from-[#09875f] to-[#065e42] hover:from-[#0aa373] hover:to-[#07704f] dark:from-emerald-600 dark:to-teal-700 dark:hover:from-emerald-500 dark:hover:to-teal-600 px-3 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(8,118,83,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.55)] dark:shadow-[0_0_18px_rgba(16,185,129,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 xl:px-4 xl:py-2.5 xl:text-sm shrink-0"
            >
              <span>Join Us</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button 
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-white/80 dark:border-emerald-500/40 bg-white/85 dark:bg-gradient-to-br dark:from-emerald-950 dark:to-[#05261d] text-slate-700 dark:text-emerald-300 shadow-xs dark:shadow-[0_0_15px_rgba(16,185,129,0.25)] backdrop-blur-md transition hover:bg-white dark:hover:bg-emerald-900/60" 
              onClick={() => setOpen(!open)} 
              aria-label="Toggle navigation" 
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="border-t border-emerald-100/60 dark:border-slate-800 bg-white/92 dark:bg-[#0b111e]/98 backdrop-blur-2xl px-4 py-4 shadow-xl lg:hidden">
            <div className="mb-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <a
                href="https://nitdgp.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#073d32] dark:text-emerald-300 hover:text-emerald-700"
              >
                <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white p-0.5 shadow-xs">
                  <Image
                    src="/images/nit-durgapur-logo.png"
                    alt="NIT Durgapur Logo"
                    width={24}
                    height={24}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span>NIT Durgapur Portal</span>
                <ExternalLink size={12} className="text-slate-400" />
              </a>
              <Link
                href="/open-positions"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-b from-[#09875f] to-[#065e42] dark:from-emerald-600 dark:to-teal-700 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs"
              >
                Join Us
              </Link>
            </div>
            <nav className="grid grid-cols-2 gap-1.5">
              {[...mainLinks, ...moreLinks].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-xl px-3 py-2.5 text-xs font-semibold transition",
                    isActive(item.href)
                      ? "bg-white dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 font-bold shadow-xs"
                      : "text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
