import { motion } from "motion/react";
import { Camera, Maximize2 } from "lucide-react";

export default function Gallery() {
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
    <section id="visuals" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Camera className="w-5 h-5 text-neon-green" />
              <span className="text-[10px] text-neon-green font-display tracking-widest uppercase">Visual Evidence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              ARCHIVE <span className="text-neon-green">VISUALS</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-3xl overflow-hidden glow-border cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] text-neon-green font-display tracking-widest uppercase mb-1 block">
                  {image.category}
                </span>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

