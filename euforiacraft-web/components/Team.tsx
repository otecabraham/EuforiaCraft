import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'otecabraham',
    rank: 'Majitel',
    // Changed to head endpoint
    skinUrl: 'https://visage.surgeplay.com/head/512/otecabraham',
    color: 'text-red-500' // Custom rank color
  },
  {
    name: 'zeuscz128',
    rank: 'Majitel',
    // Changed to head endpoint
    skinUrl: 'https://visage.surgeplay.com/head/512/zeuscz128',
    color: 'text-red-500'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#020617] relative">
       {/* Background gradient line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A309FC]/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Náš <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005FDB] to-[#A309FC]">A-Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lidé, kteří se starají o hladký chod serveru a vaši spokojenost.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-64"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#005FDB]/20 to-[#A309FC]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#0f172a] border border-white/5 rounded-2xl p-6 flex flex-col items-center hover:border-[#005FDB]/50 transition-colors duration-300">
                <div className="relative w-40 h-40 mb-6">
                    {/* Skin Render - Now using square dimensions for head */}
                    <img 
                        src={member.skinUrl} 
                        alt={member.name} 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                            // Fallback to Steve head if render fails
                            e.currentTarget.src = "https://visage.surgeplay.com/head/512/X-Steve";
                        }}
                    />
                </div>
                
                <h3 className="text-2xl font-bold text-white font-display tracking-wide">{member.name}</h3>
                <span className={`uppercase text-sm font-bold tracking-widest mt-2 ${member.color}`}>
                  {member.rank}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;