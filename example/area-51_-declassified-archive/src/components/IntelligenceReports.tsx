import { motion } from "motion/react";

export default function IntelligenceReports() {
  const reports = [
    {
      title: "UFO REPORTS",
      description: "Thousands of reports of unidentified flying objects near the base. Are they experimental aircraft or something else?",
      details: "The 'Black Projects' developed at the base, such as the U-2 and SR-71, were often mistaken for UFOs due to their extreme altitude and speed. However, some sightings remain unexplained by conventional technology.",
    },
    {
      title: "ALIEN THEORIES",
      description: "Rumors of recovered extraterrestrial spacecraft and even biological entities being studied in underground labs.",
      details: "Bob Lazar's 1989 testimony brought global attention to 'S-4', a facility allegedly south of Area 51. He claimed to have worked on nine different alien craft, describing propulsion systems using 'Element 115'.",
    },
    {
      title: "SECRET AIRCRAFT",
      description: "The base is protected by 'Cammo Dudes' and motion sensors. Trespassing is met with deadly force.",
      details: "The perimeter is marked with orange posts and signs warning that 'deadly force is authorized'. Surveillance includes high-powered cameras, motion sensors, and unmarked white vehicles patrolling the hills.",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-mono font-black text-ink mb-4"
        >
          INTELLIGENCE <span className="text-accent-red">NOTES</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-gray-400 uppercase tracking-widest"
        >
          Classified Intelligence // Subject: 51-C
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-8 border border-ink/10 shadow-lg relative paper-texture hover:rotate-1 transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-ink/10 rounded-tr-lg" />
            
            <div className="mb-6 border-b border-ink/10 pb-4">
              <h3 className="text-xl font-mono font-bold text-ink">{report.title}</h3>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Ref: 51-X-{index + 1}</div>
            </div>

            <div className="space-y-4 text-sm font-sans text-ink/80 leading-relaxed">
              <p className="font-bold italic">{report.description}</p>
              <p>{report.details}</p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="stamp stamp-redacted text-xs p-1 rotate-[-10deg] opacity-40">REDACTED</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Page 0{index + 1}</div>
            </div>
            
            {/* Handwritten Note */}
            <div className="absolute -bottom-4 -right-2 handwritten rotate-[-5deg] opacity-70">
              Check: 51-ALPHA-9
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
