import { motion } from "motion/react";

export default function DataHighlights() {
  const highlights = [
    { label: "Established", value: "1955", detail: "CIA Acquisition" },
    { label: "Status", value: "Top Secret", detail: "Level 5 Access" },
    { label: "Facility", value: "Groom Lake", detail: "Nevada Range" },
    { label: "Airspace", value: "R-4808N", detail: "Restricted Zone" },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-1 h-4 bg-accent" />
        <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Data Highlights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="text-center group"
          >
            <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{highlight.label}</div>
            <div className="text-5xl font-bold text-text-primary mb-2 tracking-tighter group-hover:scale-105 transition-transform">{highlight.value}</div>
            <div className="text-xs font-mono text-accent uppercase tracking-[0.2em] opacity-60">{highlight.detail}</div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-px bg-border group-hover:w-24 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
