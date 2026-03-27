import { motion } from "motion/react";
import { Clock } from "lucide-react";

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
    {
      year: "2019",
      title: "Storm Area 51",
      description: "A viral Facebook event 'Storm Area 51' draws thousands to the nearby towns of Rachel and Hiko.",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-4"
          >
            <Clock className="w-4 h-4 text-neon-cyan" />
            <span className="text-[10px] text-neon-cyan font-display tracking-widest uppercase">Chronological Data</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            DATA <span className="text-neon-cyan">TIMELINE</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent -translate-x-1/2" />

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
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-neon-cyan rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                {/* Content */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 bg-charcoal/40 border border-white/10 rounded-2xl glow-border-cyan hover:bg-neon-cyan/5 transition-all duration-500 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-2xl font-display font-bold text-neon-cyan mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
