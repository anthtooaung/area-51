import { motion, AnimatePresence } from "motion/react";
import { Eye, Ghost, Lock, Radio, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Secrets() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const secrets = [
    {
      icon: <Radio className="w-8 h-8 text-neon-green" />,
      title: "UFO Sightings",
      description: "Thousands of reports of unidentified flying objects near the base. Are they experimental aircraft or something else?",
      details: "The 'Black Projects' developed at the base, such as the U-2 and SR-71, were often mistaken for UFOs due to their extreme altitude and speed. However, some sightings remain unexplained by conventional technology.",
    },
    {
      icon: <Ghost className="w-8 h-8 text-neon-green" />,
      title: "Alien Theories",
      description: "Rumors of recovered extraterrestrial spacecraft and even biological entities being studied in underground labs.",
      details: "Bob Lazar's 1989 testimony brought global attention to 'S-4', a facility allegedly south of Area 51. He claimed to have worked on nine different alien craft, describing propulsion systems using 'Element 115'.",
    },
    {
      icon: <Lock className="w-8 h-8 text-neon-green" />,
      title: "Government Secrecy",
      description: "The base is protected by 'Cammo Dudes' and motion sensors. Trespassing is met with deadly force.",
      details: "The perimeter is marked with orange posts and signs warning that 'deadly force is authorized'. Surveillance includes high-powered cameras, motion sensors, and unmarked white vehicles patrolling the hills.",
    },
  ];

  return (
    <section id="conspiracies" className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 mb-4"
          >
            <Eye className="w-4 h-4 text-neon-green" />
            <span className="text-[10px] text-neon-green font-display tracking-widest uppercase">Classified Intelligence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            CONSPIRACY <span className="text-neon-green">DATA</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {secrets.map((secret, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-charcoal/40 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-green/30 transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-neon-green/10 rounded-lg group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                    {secret.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                      {secret.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light mt-1">{secret.description}</p>
                  </div>
                </div>
                <div className="text-neon-green">
                  {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-2 text-gray-400 font-light leading-relaxed border-t border-white/5 bg-black/20">
                      <div className="flex gap-4">
                        <div className="w-1 bg-neon-green/30 rounded-full" />
                        <p>{secret.details}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

