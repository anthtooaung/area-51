import { motion } from "motion/react";

export default function DossierTable() {
  const dataItems = [
    { label: "Location", value: "Nevada, USA (Groom Lake)" },
    { label: "Established", value: "1955 (CIA Acquisition)" },
    { label: "Type", value: "Military Test Facility" },
    { label: "Operator", value: "U.S. Air Force (USAF)" },
    { label: "Known For", value: "Experimental Aircraft Testing" },
    { label: "Status", value: "Active / Highly Classified" },
  ];

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="dossier-card"
      >
        <div className="mb-8 border-b-2 border-ink/10 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-xs font-mono text-gray-400 mb-2 tracking-[0.3em] uppercase">Dossier: 51-X</h2>
            <h3 className="text-3xl font-mono font-black text-ink">KEY DATA ARCHIVE</h3>
          </div>
          <div className="stamp stamp-confidential text-xl p-1 rotate-[-5deg]">CONFIDENTIAL</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {dataItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-ink/10 pb-2"
            >
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-lg font-mono font-bold text-ink">{item.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-ink/5 border border-ink/10 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-accent-red rounded-full flicker" />
            <span className="text-[10px] font-mono text-accent-red uppercase tracking-widest font-bold">Security Warning</span>
          </div>
          <p className="text-xs font-mono text-ink/60 leading-relaxed">
            UNAUTHORIZED ACCESS TO THIS DATA IS A FEDERAL OFFENSE. SURVEILLANCE ACTIVE. ALL ACCESS LOGGED.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
