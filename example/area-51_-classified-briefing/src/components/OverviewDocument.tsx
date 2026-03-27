import { motion } from "motion/react";

export default function OverviewDocument() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-12 md:p-20 shadow-2xl border border-gray-200 relative paper-texture"
      >
        <div className="absolute top-10 left-10 w-12 h-12 border-2 border-ink/20 flex items-center justify-center font-mono font-bold text-lg text-ink/20">
          51
        </div>
        
        <div className="mb-12 border-b border-ink/10 pb-4">
          <h2 className="text-xs font-mono text-gray-400 mb-2 tracking-[0.3em] uppercase">Subject Overview</h2>
          <h3 className="text-2xl font-mono font-bold text-ink">GROOM LAKE FACILITY (AREA 51)</h3>
        </div>

        <div className="space-y-6 text-lg leading-relaxed font-sans text-ink/90">
          <p>
            Area 51 is a highly classified United States Air Force facility located within the Nevada Test and Training Range. 
            The facility is officially called Homey Airport or Groom Lake, named after the salt flat situated next to its airfield.
          </p>
          <p>
            For decades, the site was shrouded in complete mystery, fueling countless conspiracy theories about extraterrestrial life and advanced government technology. 
            While officially a testing ground for <span className="redacted">experimental aircraft</span>, the true nature of what happens behind the guarded fences remains a subject of global fascination.
          </p>
          <p>
            The facility was acquired by the <span className="redacted">CIA</span> in 1955 for the development of the <span className="redacted">U-2 spy plane</span>. 
            Since then, it has been the birthplace of the SR-71 Blackbird and F-117 Nighthawk stealth fighters. 
            The government didn't officially acknowledge its existence until 2013, following a <span className="redacted">FOIA request</span>.
          </p>
          <p>
            Current operations at the site are <span className="redacted">classified</span> and protected by <span className="redacted">deadly force</span>. 
            The perimeter is marked with orange posts and signs warning that trespassing is met with severe consequences. 
            The airspace above, known as <span className="redacted">R-4808N</span>, is restricted to all but authorized personnel.
          </p>
        </div>

        <div className="mt-16 flex justify-between items-end">
          <div className="space-y-2">
            <div className="w-40 h-px bg-ink/20" />
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Authorized Signature</div>
          </div>
          <div className="text-[10px] font-mono text-gray-400 text-right uppercase tracking-widest">
            Page 01 of 12<br />
            File: DECLASSIFIED_2013_08
          </div>
        </div>

        {/* Redacted Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 2, rotate: 30 }}
          whileInView={{ opacity: 0.6, scale: 1, rotate: 15 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute bottom-20 right-20 stamp stamp-redacted"
        >
          REDACTED
        </motion.div>
      </motion.div>
    </section>
  );
}
