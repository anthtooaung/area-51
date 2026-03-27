import { motion } from "motion/react";

export default function Timeline() {
  const events = [
    {
      year: "1955",
      title: "CIA Acquisition",
      description: "The CIA acquires the Groom Lake site for the development of the U-2 spy plane.",
    },
    {
      year: "1960s",
      title: "Project OXCART",
      description: "Testing of the A-12, the predecessor to the SR-71 Blackbird, begins at the facility.",
    },
    {
      year: "1977",
      title: "Have Blue",
      description: "The first stealth aircraft prototype, 'Have Blue', begins testing at Area 51.",
    },
    {
      year: "1989",
      title: "Bob Lazar Interview",
      description: "Bob Lazar claims to have worked on reverse-engineering alien spacecraft at S-4, near Area 51.",
    },
    {
      year: "2013",
      title: "Official Acknowledgment",
      description: "The CIA officially acknowledges the existence of Area 51 in response to a FOIA request.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-1 h-4 bg-accent" />
        <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Timeline Report</h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Dot */}
              <div className="absolute left-0 w-4 h-4 bg-bg border-2 border-accent rounded-full -translate-x-1/2 z-20" />

              {/* Content */}
              <div className="system-border bg-surface/30 p-8 system-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/10 rounded-tr-lg" />
                
                <div className="text-2xl font-bold text-accent mb-2">{event.year}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 tracking-tight">{event.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">{event.description}</p>
                
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-8 h-px bg-border" />
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
