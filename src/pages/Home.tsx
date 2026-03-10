import { motion } from 'motion/react';
import { Coffee, MapPin, Clock, Instagram, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RotatingBadge = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-coffee-900)] z-10 p-2 shadow-xl"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
      <text className="text-[10.5px] font-bold tracking-[0.2em] uppercase">
        <textPath href="#circlePath" startOffset="0%">
          • Freshly Roasted • Locally Sourced 
        </textPath>
      </text>
    </svg>
    <Coffee className="absolute w-6 h-6 md:w-8 md:h-8" />
  </motion.div>
);

const menuItems = [
  {
    name: "Avocado Smash",
    desc: "Sourdough, poached egg, chili flakes, microgreens",
    price: "$14",
    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Signature Latte",
    desc: "House blend espresso, velvety steamed milk, latte art",
    price: "$6",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ricotta Hotcakes",
    desc: "Fluffy pancakes, honeycomb butter, seasonal berries",
    price: "$16",
    img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-coffee-50)] overflow-hidden selection:bg-[var(--color-accent)] selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-coffee-50)]/90 backdrop-blur-md border-b border-[var(--color-coffee-900)]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2">
            Lumière <span className="text-[var(--color-accent)]">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#menu" className="hover:text-[var(--color-accent)] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-[var(--color-accent)] transition-colors">Visit Us</a>
            <Link to="/book" className="bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] px-6 py-2.5 rounded-full hover:bg-[var(--color-coffee-800)] transition-colors">
              Book a Table
            </Link>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[var(--color-coffee-50)] pt-24 px-6 flex flex-col gap-6 text-2xl font-serif"
        >
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#visit" onClick={() => setIsMenuOpen(false)}>Visit Us</a>
          <Link to="/book" onClick={() => setIsMenuOpen(false)} className="text-[var(--color-accent)]">Book a Table</Link>
        </motion.div>
      )}
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 z-10 mt-12 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-coffee-900)]/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
            Now open for brunch
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight">
            Awaken <br />
            <span className="italic text-[var(--color-accent)] font-light">Your Senses</span>
          </h1>
          <p className="text-lg md:text-xl max-w-md text-[var(--color-coffee-800)]/80 font-light leading-relaxed">
            Artisanal coffee and mindful brunch, crafted with locally sourced ingredients to start your day right.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <Link to="/book" className="bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[var(--color-coffee-800)] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Book a Table <ArrowRight size={18} />
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium text-[var(--color-coffee-800)]/70">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-[var(--color-coffee-50)]" />
                ))}
              </div>
              <p>Loved by 2k+ <br/>locals</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full"
        >
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto md:ml-auto md:mr-0">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
              alt="Coffee and Brunch" 
              className="w-full h-full object-cover rounded-t-full rounded-b-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <RotatingBadge />
            
            {/* Decorative SVG Elements */}
            <svg className="absolute -top-10 -right-10 w-32 h-32 text-[var(--color-coffee-900)]/5 -z-10" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
             <div className="relative aspect-[3/4] max-w-md mx-auto">
               <img 
                 src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
                 alt="Barista pouring latte art" 
                 className="w-full h-full object-cover rounded-[40px]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10"></div>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Crafted with <br/><span className="italic text-[var(--color-accent)] font-light">Intention</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-coffee-50)]/70 font-light leading-relaxed">
              Every cup we pour and every plate we serve is a testament to our dedication to quality. We partner with local farmers and ethical roasters to bring you flavors that not only taste good, but feel good.
            </p>
            <div className="pt-8 border-t border-[var(--color-coffee-50)]/20">
              <p className="font-serif text-2xl md:text-3xl italic text-[var(--color-coffee-50)]/90">"The best stories are shared over coffee."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif"
          >
            Morning <span className="italic text-[var(--color-accent)] font-light">Rituals</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-coffee-800)]/70 max-w-2xl mx-auto text-lg"
          >
            A glimpse into our carefully curated menu, designed to nourish and delight.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {menuItems.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[32px] mb-6 aspect-[4/5] relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-medium">{item.name}</h3>
                <span className="text-lg font-medium text-[var(--color-accent)]">{item.price}</span>
              </div>
              <p className="text-[var(--color-coffee-800)]/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <button className="border border-[var(--color-coffee-900)] text-[var(--color-coffee-900)] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[var(--color-coffee-900)] hover:text-[var(--color-coffee-50)] transition-colors inline-flex items-center gap-2">
            Explore Full Menu
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="visit" className="bg-[var(--color-coffee-900)] text-[var(--color-coffee-50)] pt-24 pb-12 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[80px] mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20">
            <div className="lg:col-span-2">
              <div className="text-4xl font-serif font-bold tracking-tight mb-6">
                Lumière <span className="text-[var(--color-accent)]">.</span>
              </div>
              <p className="text-[var(--color-coffee-50)]/70 max-w-sm leading-relaxed">
                A sanctuary for coffee lovers and food enthusiasts. Join us for a moment of peace in your busy day.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6 text-[var(--color-accent)]">Visit Us</h4>
              <ul className="space-y-4 text-[var(--color-coffee-50)]/80">
                <li className="flex gap-3">
                  <MapPin size={20} className="shrink-0 text-[var(--color-accent)]" />
                  <span>123 Artisan Avenue<br/>Creative District, NY 10001</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6 text-[var(--color-accent)]">Hours</h4>
              <ul className="space-y-4 text-[var(--color-coffee-50)]/80">
                <li className="flex gap-3">
                  <Clock size={20} className="shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <p>Mon - Fri: 7am - 4pm</p>
                    <p>Sat - Sun: 8am - 5pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-coffee-50)]/10 text-[var(--color-coffee-50)]/50 text-sm gap-4">
            <p>© 2026 Lumière Café & Brunch. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
