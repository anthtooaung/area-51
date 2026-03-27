import { motion } from "motion/react";
import { Camera, Maximize2 } from "lucide-react";

export default function ImageGallery() {
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
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-16">
        <div className="w-1 h-4 bg-accent" />
        <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase">Image Evidence</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="system-border bg-surface/30 group relative cursor-pointer overflow-hidden"
          >
            <div className="absolute top-4 left-4 z-20">
              <div className="text-[10px] text-accent font-mono tracking-widest uppercase mb-1 block bg-bg/60 px-2 py-1 backdrop-blur-sm">
                {image.category}
              </div>
            </div>
            
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-bold text-text-primary mb-1">{image.title}</h3>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">View Details</span>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <Maximize2 className="w-6 h-6 text-text-primary" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
