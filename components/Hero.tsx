import React, { useState } from 'react';
import { Copy, Check, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVER_IP, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      {/* Minecraft Themed Background - Nature Shader */}
      <div className="absolute inset-0 bg-[url('https://c4.wallpaperflare.com/wallpaper/435/683/813/minecraft-shaders-video-games-wallpaper-preview.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617]"></div>
      
      {/* Abstract Neon Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#005FDB]/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A309FC]/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title - Reverted to Modern Font */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#005FDB] to-[#A309FC] drop-shadow-[0_0_25px_rgba(0,95,219,0.4)] pb-2">
            EUFORIACRAFT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            Pořádný survival zážitek bez <span className="text-red-400 font-semibold line-through decoration-2">P2W nesmyslů</span>.
            Čistá hra, férová komunita.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            {/* IP Box */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyToClipboard}
              className="group relative px-8 py-4 bg-black/40 backdrop-blur-md border-2 border-white/20 rounded-xl flex items-center gap-4 hover:bg-black/60 hover:border-[#005FDB] transition-all w-full md:w-auto justify-center neon-glow"
            >
              <div className={`p-2 rounded-lg transition-colors ${copied ? 'bg-green-500/20 text-green-400' : 'bg-[#005FDB]/20 text-[#005FDB]'}`}>
                {copied ? <Check size={24} /> : <Copy size={24} />}
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">IP Adresa Serveru</p>
                <p className="text-xl font-mono font-bold text-white tracking-wide">{SERVER_IP}</p>
              </div>
              <div className="absolute -top-2 -right-2">
                <span className={`flex h-3 w-3 ${copied ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-green-400 text-sm font-bold"
                >
                  Zkopírováno!
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a 
              href={SOCIAL_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-red-600/10 border border-red-500/30 rounded-xl text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            >
              <Youtube size={28} />
            </a>
            <a 
              href={SOCIAL_LINKS.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,101,242,0.5)]"
              aria-label="Discord"
            >
              {/* Custom Discord SVG Icon for branding */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#005FDB] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;