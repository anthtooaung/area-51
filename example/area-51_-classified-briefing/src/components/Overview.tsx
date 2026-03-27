import { motion } from "motion/react";

export default function Overview() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="system-border bg-surface/50 p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-4 bg-accent" />
          <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Briefing Summary</h2>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-text-primary/90 font-light">
          <p>
            Area 51 is a highly classified United States Air Force facility located within the Nevada Test and Training Range. 
            The facility is officially designated as Homey Airport or Groom Lake, named after the salt flat situated next to its airfield.
          </p>
          <p>
            For decades, the site has served as a primary testing ground for experimental aircraft and advanced weapons systems. 
            While the facility's existence was not officially acknowledged until 2013, it has been at the center of global intelligence 
            and aerospace research since the mid-20th century.
          </p>
          <p>
            Current operations remain classified under the highest levels of national security. Access is strictly limited to 
            authorized personnel with appropriate clearance levels.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-2">
          <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">End of Summary</span>
          <span className="w-2 h-4 bg-accent cursor-blink" />
        </div>
      </motion.div>
    </section>
  );
}
