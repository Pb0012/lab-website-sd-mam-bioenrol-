import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Mail, ExternalLink, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Contact & Join Us | Biological & Environmental Research Laboratory, NIT Durgapur",
  description: "Get in touch with Prof. Susmita Dutta and the Biological & Environmental Research Laboratory at the Department of Chemical Engineering, NIT Durgapur.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#090e17] min-h-screen py-20 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact & Join Us" subtitle="Get in touch with Prof. Susmita Dutta and our research team at NIT Durgapur." centered />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                We welcome prospective Ph.D. scholars, postgraduate researchers (M.Tech), undergraduate thesis interns, and prospective industrial/academic collaborators.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0e1726]">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl dark-icon-badge">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Laboratory Location</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      BIOENROL (Biological & Environmental Research Laboratory)<br/>
                      Department of Chemical Engineering<br/>
                      National Institute of Technology Durgapur<br/>
                      Mahatma Gandhi Avenue, Durgapur – 713209, West Bengal, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0e1726]">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl dark-icon-badge">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Faculty & Lab Contact</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-1">
                      Institute: <a href="mailto:susmita.dutta@che.nitdgp.ac.in" className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline">susmita.dutta@che.nitdgp.ac.in</a>
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Department: <a href="mailto:sdutta.che@nitdgp.ac.in" className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline">sdutta.che@nitdgp.ac.in</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-emerald-100 dark:border-emerald-500/30 shadow-sm bg-emerald-50/60 dark:bg-emerald-950/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl dark-icon-badge">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Principal Investigator Profile</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs mb-2">
                      Prof. (Dr.) Susmita Dutta, Professor, Department of Chemical Engineering
                    </p>
                    <a
                      href="https://nitdgp.ac.in/department/chemical-engineering/faculty-4/susmita-dutta-1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 underline"
                    >
                      NIT Durgapur Faculty Portal <ExternalLink size={12} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-[#0e1726]">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">First name</label>
                    <input type="text" id="first-name" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Last name</label>
                    <input type="text" id="last-name" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-slate-700 dark:text-slate-300">Area of Interest</label>
                  <select id="interest" className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white">
                    <option>PhD Position</option>
                    <option>M.Tech / B.Tech Project</option>
                    <option>Internship</option>
                    <option>Industry Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 dark:placeholder:text-slate-500" placeholder="Tell us about your background and interests..."></textarea>
                </div>

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer">
                  Submit Application / Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
}
