import { motion } from "motion/react";

export default function CaseNotesTimeline() {
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
    {
      year: "2019",
      title: "Storm Area 51",
      description: "A viral Facebook event 'Storm Area 51' draws thousands to the nearby towns of Rachel and Hiko.",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-mono font-black text-ink mb-4"
        >
          TIMELINE <span className="text-accent-red">REPORT</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-gray-400 uppercase tracking-widest"
        >
          Chronological Case Notes // File: 51-T
        </motion.p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2" />

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-paper border-2 border-ink rounded-full -translate-x-1/2 z-20" />

              {/* Content */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className={`p-8 bg-white border border-ink/10 shadow-sm relative paper-texture ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-2xl font-mono font-bold text-accent-red mb-2">{event.year}</div>
                  <h3 className="text-xl font-mono font-bold text-ink mb-2">{event.title}</h3>
                  <p className="text-sm font-sans text-ink/70 leading-relaxed italic">{event.description}</p>
                  
                  {/* Handwritten Annotation */}
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? 'left-0' : 'right-0'} handwritten rotate-[-2deg] opacity-60`}>
                    Verified: 2013_08
                  </div>
                </div>
              </div>
              
              {/* Spacer for desktop */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
