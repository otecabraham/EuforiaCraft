import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-euforia-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-euforia-secondary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-12 bg-euforia-primary"></span>
              <span className="text-euforia-primary uppercase tracking-widest font-bold text-sm">Náš Příběh</span>
              <span className="h-px w-12 bg-euforia-primary"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Když hra přestane být o penězích, <br />
              <span className="text-gradient-custom">
                začíná ta pravá zábava.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p>
                Jsme dva kamarádi, kteří už měli dost serverů přeplněných placenými výhodami, které kazí hru. 
                Znáte to – připojíte se, chcete si zahrát survival, ale někdo, kdo zaplatil VIP, létá kolem a ničí ekonomiku.
              </p>
              <p>
                Založili jsme <strong className="text-white">EuforiaCraft</strong> jako místo, kde záleží na tvém skillu, 
                ne na tvé peněžence. Čistý survival, férová komunita a stabilní zázemí. To je náš slib.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { icon: ShieldCheck, label: "Anti-P2W", desc: "Férová hra pro všechny" },
                { icon: User, label: "Komunita", desc: "Přátelé a eventy" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-euforia-primary/30 transition-all hover:bg-white/10">
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-10 h-10 text-euforia-primary" />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-xl">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;