import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display text-2xl tracking-wider text-white">
          KFZ<span className="text-signal">.</span>MEISTER
        </div>
        <div className="hidden md:flex items-center gap-8 font-tech text-sm uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">Die Werkstatt</a>
          <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <button className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ink/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/50 to-ink z-10" />
        <img 
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2000&auto=format&fit=crop" 
          alt="Mechanic working" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-signal" />
          <span className="font-tech text-signal tracking-[0.2em] uppercase text-sm font-semibold">
            System Status: Online
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl uppercase leading-[0.85] text-white mb-8 max-w-5xl"
        >
          Meisterpräzision <br />
          <span className="text-outline">Für Ihr Auto</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group relative px-8 py-4 bg-signal text-white font-tech uppercase tracking-wider font-bold overflow-hidden flex items-center gap-3 hover:bg-white hover:text-ink transition-colors duration-300">
            <span>Termin Online Buchen</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Technical decorative elements */}
      <div className="absolute bottom-10 right-10 z-20 font-tech text-xs text-gray-500 tracking-widest text-right">
        <div>LAT: 48.1351 N</div>
        <div>LON: 11.5820 E</div>
        <div className="mt-2 text-signal">DIAGNOSTICS_ACTIVE</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="crosshair crosshair-tl crosshair-tr crosshair-bl crosshair-br p-4">
              <img 
                src="https://images.unsplash.com/photo-1537151608804-ea6f112e3e60?q=80&w=800&auto=format&fit=crop" 
                alt="Meister" 
                className="w-full aspect-[3/4] object-cover grayscale contrast-125"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-ink p-6 border border-white/10">
              <div className="font-display text-5xl text-white">25+</div>
              <div className="font-tech text-sm text-signal uppercase tracking-widest mt-1">Jahre Erfahrung</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-signal" />
              <span className="font-tech text-signal tracking-[0.2em] uppercase text-xs font-semibold">
                Der Meisterfaktor
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-8 leading-[0.9]">
              Deutsche <br /> Handwerksqualität.
            </h2>
            <div className="font-body text-gray-400 space-y-6 text-lg leading-relaxed">
              <p>
                Wir tauschen nicht einfach Teile auf Verdacht. Wir analysieren, diagnostizieren und reparieren mit der Präzision, die Ihr Fahrzeug verdient. 
              </p>
              <p>
                Ausgestattet mit modernster Diagnosetechnik und dem kompromisslosen Anspruch an Perfektion, bieten wir Service auf Herstellerniveau – transparent, ehrlich und direkt.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-tech text-white text-xl mb-2">01. Diagnose</div>
                <div className="text-sm text-gray-500">Fehlersuche mit OEM-Software.</div>
              </div>
              <div>
                <div className="font-tech text-white text-xl mb-2">02. Präzision</div>
                <div className="text-sm text-gray-500">Arbeit nach Herstellervorgaben.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: "01",
    title: "Diagnose & Elektronik",
    desc: "Tiefendiagnose aller Steuergeräte, Oszilloskop-Messungen und Software-Updates.",
    img: "https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Motor & Getriebe",
    desc: "Komplexe Instandsetzungen, Steuerkettenwechsel und Getriebespülungen.",
    img: "https://images.unsplash.com/photo-1503376713246-859427b3b9b4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Fahrwerk & Bremsen",
    desc: "3D-Achsvermessung, Performance-Bremsanlagen und Fahrwerksabstimmung.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Inspektion",
    desc: "Wartung streng nach Herstellervorgaben mit digitalem Serviceheft-Eintrag.",
    img: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=800&auto=format&fit=crop"
  }
];

function Services() {
  return (
    <section id="services" className="py-32 bg-ink relative border-t border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-signal" />
              <span className="font-tech text-signal tracking-[0.2em] uppercase text-xs font-semibold">
                Leistungsspektrum
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white leading-[0.9]">
              Kompromisslose <br /> <span className="text-outline">Expertise.</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 font-body">
            Unsere Werkstatt ist auf komplexe Fehlerdiagnosen und anspruchsvolle Mechanik spezialisiert. Wir lösen Probleme, an denen andere scheitern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-charcoal border border-white/5 overflow-hidden flex flex-col h-[400px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div className="font-tech text-signal text-xl font-bold">{service.id}</div>
                
                <div>
                  <h3 className="font-display text-3xl text-white uppercase mb-4 group-hover:text-signal transition-colors">{service.title}</h3>
                  <p className="text-gray-400 font-body text-sm max-w-sm">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Decorative lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workshop() {
  return (
    <section className="py-32 bg-slate relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-8 bg-signal" />
          <span className="font-tech text-signal tracking-[0.2em] uppercase text-xs font-semibold">
            Infrastruktur
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-[400px] relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop" 
              alt="Workshop" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
            <div className="absolute bottom-8 left-8 bg-ink/90 backdrop-blur px-4 py-2 font-tech text-xs uppercase tracking-widest text-white border border-white/10">
              Hebebühnen & Achsvermessung
            </div>
          </div>
          
          <div className="h-[400px] relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800&auto=format&fit=crop" 
              alt="Tools" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
            <div className="absolute bottom-8 left-8 bg-ink/90 backdrop-blur px-4 py-2 font-tech text-xs uppercase tracking-widest text-white border border-white/10">
              Spezialwerkzeug
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mb-32 opacity-50 grayscale">
          <div className="font-display text-3xl tracking-widest">BMW</div>
          <div className="font-display text-3xl tracking-widest">MERCEDES-BENZ</div>
          <div className="font-display text-3xl tracking-widest">AUDI</div>
          <div className="font-display text-3xl tracking-widest">PORSCHE</div>
          <div className="border border-white/20 px-4 py-2 font-tech text-sm tracking-widest">TÜV / DEKRA STÜTZPUNKT</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="font-display text-5xl text-white uppercase mb-6">
              Bereit für <br /> <span className="text-signal">Präzision?</span>
            </h2>
            <p className="text-gray-400 font-body max-w-sm mb-8">
              Vereinbaren Sie einen Termin für eine Diagnose oder Inspektion. Wir nehmen uns Zeit für Ihr Fahrzeug.
            </p>
            <button className="px-8 py-4 bg-white text-ink font-tech uppercase tracking-wider font-bold hover:bg-signal hover:text-white transition-colors duration-300 flex items-center gap-3">
              <span>Kontakt Aufnehmen</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div>
            <div className="font-tech text-white text-lg mb-6 uppercase tracking-widest">Kontakt</div>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-signal shrink-0 mt-0.5" />
                <span>Industriestraße 42<br />80807 München<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-signal shrink-0" />
                <span>+49 (0) 89 123 456 78</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-signal shrink-0" />
                <span>service@kfz-meister.de</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-tech text-white text-lg mb-6 uppercase tracking-widest">Öffnungszeiten</div>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mo - Fr</span>
                <span className="text-white">07:30 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Samstag</span>
                <span className="text-white">Nach Vereinbarung</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sonntag</span>
                <span className="text-signal">Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm font-tech text-gray-600 uppercase tracking-widest">
          <div>&copy; 2026 KFZ-MEISTERBETRIEB. ALLE RECHTE VORBEHALTEN.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-ink min-h-screen text-gray-300 selection:bg-signal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Workshop />
      </main>
      <Footer />
    </div>
  );
}
