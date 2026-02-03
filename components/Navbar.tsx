import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Domů', href: '#hero' },
    { name: 'O Nás', href: '#about' },
    { name: 'A-Team', href: '#team' },
    { name: 'Pravidla', href: '#rules' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#005FDB] blur-xl opacity-40 group-hover:opacity-80 transition-opacity rounded-full"></div>
            <img 
              src="/logo.png" 
              alt="EuforiaCraft Logo" 
              className="w-12 h-12 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,95,219,0.5)]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#005FDB] to-[#A309FC] pt-1">
            EUFORIACRAFT
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-[#005FDB] transition-colors font-medium tracking-wide text-sm uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://discord.gg/AFFUAuGfFP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-[#005FDB] to-[#A309FC] rounded-full text-white font-bold text-sm shadow-lg hover:shadow-[#005FDB]/50 transition-all transform hover:-translate-y-0.5 border border-white/10"
          >
            Připojit se
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020617] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#005FDB] font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <a 
                 href="https://discord.gg/AFFUAuGfFP"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-center w-full py-3 bg-gradient-to-r from-[#005FDB] to-[#A309FC] rounded-lg text-white font-bold"
                 onClick={() => setIsOpen(false)}
              >
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;