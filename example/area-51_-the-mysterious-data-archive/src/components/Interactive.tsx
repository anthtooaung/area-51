import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, Plus, Minus, Info } from "lucide-react";
import { useState } from "react";

export default function Interactive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const facts = [
    {
      question: "Is Area 51 actually on the map?",
      answer: "For decades, it was omitted from official government maps. It wasn't until 2013 that the CIA officially acknowledged its existence and location.",
    },
    {
      question: "What happens if you trespass?",
      answer: "The perimeter is guarded by 'Cammo Dudes'—private security contractors. Signs warn that deadly force is authorized, and motion sensors detect any movement miles away.",
    },
    {
      question: "Are there underground tunnels?",
      answer: "Many whistleblowers claim there is a massive underground complex that connects Area 51 to other secret bases like S-4, where alien technology is allegedly kept.",
    },
    {
      question: "Why is it called Area 51?",
      answer: "The name comes from its designation on Atomic Energy Commission maps. It's also known as Dreamland, Paradise Ranch, and Homey Airport.",
    },
  ];

  return (
    <section className="py-24 bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-neon-green" />
            <span className="text-[10px] text-neon-green font-display tracking-widest uppercase">Knowledge Base</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            DID YOU <span className="text-neon-green">KNOW?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light tracking-widest uppercase text-sm"
          >
            Uncover the lesser-known facts about the base.
          </motion.p>
        </div>

        <div className="space-y-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-green/30 transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                    <Info className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                    {fact.question}
                  </h3>
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
                    <div className="px-6 pb-6 pt-2 text-gray-400 font-light leading-relaxed border-t border-white/5">
                      {fact.answer}
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
