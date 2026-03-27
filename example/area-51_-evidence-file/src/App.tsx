import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  MapPin, 
  Calendar, 
  Shield, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Camera, 
  AlertTriangle,
  Search,
  Pin
} from 'lucide-react';

// --- Types ---
interface TimelineEvent {
  year: string;
  event: string;
}

interface EvidenceNote {
  id: string;
  title: string;
  content: string;
  category: 'UFO' | 'Alien' | 'Secret Aircraft';
}

// --- Data ---
const TIMELINE: TimelineEvent[] = [
  { year: '1955', event: 'U-2 spy plane testing begins at Groom Lake.' },
  { year: '1962', event: 'A-12 OXCART project commences flight tests.' },
  { year: '1977', event: 'F-117 Nighthawk stealth fighter development starts.' },
  { year: '1989', event: 'Bob Lazar claims to have worked on alien technology at S-4.' },
  { year: '2013', event: 'CIA officially acknowledges the existence of Area 51.' },
];

const EVIDENCE_NOTES: EvidenceNote[] = [
  {
    id: 'note-1',
    title: 'UFO Sightings',
    category: 'UFO',
    content: 'Numerous reports of unidentified aerial phenomena (UAP) have been documented by military and civilian observers near the Groom Lake facility. High-speed, silent maneuvers inconsistent with known aerodynamics are frequently cited.'
  },
  {
    id: 'note-2',
    title: 'Alien Theories',
    category: 'Alien',
    content: 'Whistleblowers like Bob Lazar claim the facility houses recovered extraterrestrial craft. Theories suggest reverse-engineering of propulsion systems and biological research on non-human entities in subterranean levels.'
  },
  {
    id: 'note-3',
    title: 'Secret Aircraft',
    category: 'Secret Aircraft',
    content: 'Area 51 is the primary testing ground for advanced aerospace technology. Projects like the SR-71 Blackbird and the B-2 Spirit were developed here under extreme secrecy before public disclosure.'
  }
];

const PHOTOS = [
  { url: 'https://picsum.photos/seed/area51-1/400/300', caption: 'Satellite view of Groom Lake' },
  { url: 'https://picsum.photos/seed/area51-2/400/300', caption: 'Warning sign at perimeter' },
  { url: 'https://picsum.photos/seed/area51-3/400/300', caption: 'Unidentified light formation' },
  { url: 'https://picsum.photos/seed/area51-4/400/300', caption: 'Hangar 18 entrance' },
];

// --- Sub-components ---

const PinIcon = ({ className = "" }) => (
  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-10 ${className}`}>
    <Pin className="w-6 h-6 text-red-800 fill-red-800 drop-shadow-md" />
  </div>
);

const Tape = ({ className = "" }) => (
  <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-yellow-100/40 border border-yellow-200/50 rotate-2 z-10 ${className}`} />
);

export default function App() {
  const [expandedNote, setExpandedNote] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-neutral-900 font-sans selection:bg-red-900 selection:text-white vignette overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-typewriter tracking-wider text-neutral-100 uppercase">Area 51: Evidence File</h1>
            <p className="text-xs text-red-600 font-bold uppercase tracking-widest">Case Status: Classified // Level 5 Clearance Required</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-neutral-500 text-xs font-mono">
          <span>FILE NO: 51-G-LAKE</span>
          <span className="w-px h-4 bg-neutral-800"></span>
          <span>DATE: 18 MAR 2026</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Overview Document - Left Column (Large) */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <Tape />
            <div className="bg-[#f5f2ed] paper-texture text-neutral-800 p-8 md:p-12 shadow-2xl border border-neutral-300 transform -rotate-1">
              <div className="border-b-2 border-neutral-800 pb-4 mb-6 flex justify-between items-end">
                <h2 className="text-3xl font-serif font-bold italic">Subject: Groom Lake Facility</h2>
                <span className="text-xs font-mono opacity-60">REF: TOP_SECRET_001</span>
              </div>
              
              <div className="space-y-6 font-serif leading-relaxed text-lg">
                <p>
                  Area 51 is a highly classified United States Air Force (USAF) facility located within the Nevada Test and Training Range. While its primary purpose is officially stated as the development and testing of experimental aircraft and weapons systems, it has long been the epicenter of modern conspiracy theories.
                </p>
                <p>
                  The facility was established in 1955 by the CIA for Project AQUATONE, the development of the U-2 reconnaissance aircraft. Since then, it has hosted numerous "black projects" including the OXCART, HAVE BLUE, and SENIOR TREND.
                </p>
                <div className="bg-neutral-800 h-4 w-3/4 my-2"></div> {/* Redacted line */}
                <p>
                  Access to the facility is strictly prohibited to the public. The perimeter is monitored by motion sensors, "Camo Dudes" (private security), and lethal force is authorized. The airspace above, known as R-4808N, is restricted to all commercial and military traffic not originating from the base.
                </p>
                <div className="bg-neutral-800 h-4 w-1/2 my-2"></div> {/* Redacted line */}
              </div>

              <div className="mt-12 flex justify-end">
                <div className="text-center">
                  <div className="w-32 h-12 border-2 border-red-800/30 rounded flex items-center justify-center text-red-800 font-bold uppercase tracking-tighter transform -rotate-12">
                    Classified
                  </div>
                  <p className="text-[10px] mt-1 font-mono uppercase opacity-50">Authorized Personnel Only</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Key Data Cards - Right Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Location', value: 'Nevada, USA', icon: MapPin },
              { label: 'Established', value: '1955', icon: Calendar },
              { label: 'Type', value: 'Military Testing', icon: Shield },
              { label: 'Operator', value: 'U.S. Air Force', icon: User },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f5f2ed] paper-texture p-6 shadow-lg border border-neutral-300 relative transform rotate-1"
              >
                <PinIcon className="scale-75" />
                <item.icon className="w-5 h-5 text-red-800 mb-3" />
                <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">{item.label}</h3>
                <p className="font-typewriter text-neutral-800 text-sm">{item.value}</p>
              </motion.div>
            ))}

            {/* Timeline Strip */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 bg-neutral-800/50 border border-neutral-700 p-6 rounded-sm mt-4"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
                <Search className="w-3 h-3" /> Operational Timeline
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-neutral-700"></div>
                {TIMELINE.map((event, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="pl-8 relative group"
                  >
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-red-800 group-hover:scale-125 transition-transform"></div>
                    <span className="text-xs font-typewriter text-red-600">{event.year}</span>
                    <p className="text-sm text-neutral-300 mt-1">{event.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Evidence Notes (Conspiracies) - Full Width Grid */}
          <section className="lg:col-span-12 mt-12">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-typewriter text-neutral-100 uppercase tracking-widest">Evidence Notes</h2>
              <div className="flex-1 h-px bg-neutral-800"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVIDENCE_NOTES.map((note) => (
                <motion.div
                  key={note.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-[#f5f2ed] paper-texture p-6 shadow-xl border border-neutral-300 relative cursor-pointer transform ${note.id === 'note-2' ? '-rotate-1' : 'rotate-1'}`}
                  onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
                >
                  <PinIcon />
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-red-800 text-white uppercase tracking-tighter">
                      {note.category}
                    </span>
                    {expandedNote === note.id ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-800 mb-3">{note.title}</h3>
                  <AnimatePresence initial={false}>
                    <motion.div
                      initial="collapsed"
                      animate={expandedNote === note.id ? "expanded" : "collapsed"}
                      variants={{
                        expanded: { height: "auto", opacity: 1 },
                        collapsed: { height: "60px", opacity: 0.6 }
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm font-serif text-neutral-700 leading-relaxed italic">
                        "{note.content}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase">
                    <AlertTriangle className="w-3 h-3 text-red-800" /> Unverified Intel
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Photo Evidence */}
          <section className="lg:col-span-12 mt-12 mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-neutral-800"></div>
              <h2 className="text-2xl font-typewriter text-neutral-100 uppercase tracking-widest">Photo Evidence</h2>
              <Camera className="text-neutral-500 w-6 h-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PHOTOS.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-3 pb-12 shadow-2xl border border-neutral-200 transform rotate-1 group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative">
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="mt-4 px-2">
                    <p className="font-typewriter text-[11px] text-neutral-600 italic leading-tight">
                      IMG_{idx + 1042}: {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-center gap-4 opacity-30">
            <div className="w-8 h-8 rounded-full border border-neutral-500"></div>
            <div className="w-8 h-8 rounded-full border border-neutral-500"></div>
            <div className="w-8 h-8 rounded-full border border-neutral-500"></div>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            The Mysterious Place – Group Project
          </p>
          <p className="text-[10px] text-neutral-600 font-mono italic">
            "The truth is out there, but the file is locked."
          </p>
        </div>
      </footer>

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
    </div>
  );
}
