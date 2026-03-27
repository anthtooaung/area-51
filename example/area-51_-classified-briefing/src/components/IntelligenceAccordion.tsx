import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Eye, Zap, Plane } from "lucide-react";

export default function IntelligenceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const reports = [
    {
      title: "UFO Sightings",
      description: "Thousands of reports of unidentified flying objects near the base. Are they experimental aircraft or something else?",
      details: "The 'Black Projects' developed at the base, such as the U-2 and SR-71, were often mistaken for UFOs due to their extreme altitude and speed. However, some sightings remain unexplained by conventional technology.",
      icon: Eye,
    },
    {
      title: "Alien Theories",
      description: "Rumors of recovered extraterrestrial spacecraft and even biological entities being studied in underground labs.",
      details: "Bob Lazar's 1989 testimony brought global attention to 'S-4', a facility allegedly south of Area 51. He claimed to have worked on nine different alien craft, describing propulsion systems using 'Element 115'.",
      icon: Zap,
    },
    {
      title: "Advanced Aircraft Testing",
      description: "The base is protected by 'Cammo Dudes' and motion sensors. Trespassing is met with deadly force.",
      details: "The perimeter is marked with orange posts and signs warning that 'deadly force is authorized'. Surveillance includes high-powered cameras, motion sensors, and unmarked white vehicles patrolling the hills.",
      icon: Plane,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-1 h-4 bg-accent" />
        <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Intelligence Sections</h2>
      </div>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="system-border bg-surface/30 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <report.icon className="w-6 h-6 text-accent opacity-80" />
                <h3 className="text-xl font-semibold tracking-tight">{report.title}</h3>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-accent" />
              ) : (
                <ChevronDown className="w-5 h-5 text-text-secondary" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 pt-2">
                    <div className="system-divider mb-6" />
                    <div className="space-y-4 text-sm leading-relaxed text-text-secondary font-light">
                      <p className="font-medium text-text-primary">{report.description}</p>
                      <p>{report.details}</p>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-[10px] font-mono text-accent uppercase tracking-widest">Ref: 51-X-{index + 1}</div>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
