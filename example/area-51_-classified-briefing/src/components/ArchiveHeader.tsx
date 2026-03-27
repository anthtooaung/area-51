import { motion } from "motion/react";

export default function ArchiveHeader() {
  return (
    <header className="pt-20 pb-12 px-4 max-w-5xl mx-auto border-b-2 border-ink/20 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-2"
          >
            <div className="w-12 h-12 border-2 border-ink flex items-center justify-center font-mono font-bold text-xl">
              US
            </div>
            <div className="text-[10px] font-mono leading-tight uppercase tracking-widest text-ink/60">
              Department of Defense<br />
              Intelligence Agency<br />
              Ref: 51-ALPHA-9
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-mono font-black tracking-tighter"
          >
            AREA 51: <span className="text-accent-red">DECLASSIFIED</span> ARCHIVE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm font-mono mt-2 text-ink/70 uppercase tracking-[0.2em]"
          >
            Formerly Classified U.S. Intelligence File // Subject: Groom Lake Facility
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.5, rotate: -30 }}
          animate={{ opacity: 0.8, scale: 1, rotate: -12 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="stamp stamp-declassified"
        >
          DECLASSIFIED
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 text-[10px] font-mono text-ink/40 text-right">
        COPY NO. 001 OF 001<br />
        SECURITY LEVEL: UNCLASSIFIED (POST-2013)
      </div>
    </header>
  );
}
