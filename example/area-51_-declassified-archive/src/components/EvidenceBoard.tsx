import { motion } from "motion/react";
import { Camera, Maximize2 } from "lucide-react";

export default function EvidenceBoard() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop",
      title: "Desert Base",
      category: "Surveillance",
    },
    {
      url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
      title: "UFO Sighting",
      category: "Incident",
    },
    {
      url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?q=80&w=800&auto=format&fit=crop",
      title: "Night Sky",
      category: "Observation",
    },
    {
      url: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?q=80&w=800&auto=format&fit=crop",
      title: "Classified Tech",
      category: "Research",
    },
    {
      url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
      title: "Satellite View",
      category: "Mapping",
    },
    {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: "Deep Space",
      category: "Transmission",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-mono font-black text-ink mb-4"
        >
          IMAGE <span className="text-accent-red">EVIDENCE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-gray-400 uppercase tracking-widest"
        >
          Visual Evidence Board // File: 51-V
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -2 : 2 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="evidence-photo group relative cursor-pointer"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-red/40 rounded-full z-20 shadow-sm" />
            
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="mt-4 border-t border-gray-100 pt-2 flex justify-between items-end">
              <div>
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mb-1 block">
                  {image.category}
                </span>
                <h3 className="text-lg font-mono font-bold text-ink">{image.title}</h3>
              </div>
              <Camera className="w-5 h-5 text-gray-300" />
            </div>
            
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Maximize2 className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
