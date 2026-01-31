import React from 'react';
import { motion } from 'framer-motion';
import { SERVER_RULES } from '../constants';

const Rules: React.FC = () => {
  return (
    <section id="rules" className="py-24 bg-[#020617] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-euforia-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Pravidla Serveru
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Abychom zajistili ten nejlepší zážitek pro všechny, máme několik jednoduchých pravidel. 
            Jejich dodržování nám pomáhá udržet komunitu čistou a férovou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVER_RULES.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5, borderColor: '#005FDB' }}
                className="group p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:bg-[#1e293b] transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#005FDB]/5 to-[#A309FC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#020617] text-euforia-primary group-hover:text-white group-hover:bg-euforia-primary transition-colors duration-300 shadow-lg">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-euforia-primary transition-colors">
                      <span className="text-gray-600 mr-2">#{rule.id}</span>
                      {rule.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 italic text-sm">
                * Porušení pravidel může vést k dočasnému nebo trvalému vyloučení ze serveru.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;