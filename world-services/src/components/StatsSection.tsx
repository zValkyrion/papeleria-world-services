"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { 
      value: "+1,000", 
      label: "Proyectos Entregados", 
      icon: <CheckCircle2 className="w-5 h-5 text-purple-600" /> 
    },
    { 
      value: "+500", 
      label: "Clientes Satisfechos", 
      icon: <Users className="w-5 h-5 text-purple-600" /> 
    },
    { 
      value: "+10 Años", 
      label: "De Experiencia", 
      icon: <Award className="w-5 h-5 text-orange-600" /> 
    },
    { 
      value: "98%", 
      label: "De Satisfacción", 
      icon: <TrendingUp className="w-5 h-5 text-orange-600" /> 
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-[#faf9fc] to-white border-t border-b border-purple-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            key={stat.label}
            className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-purple-100 group hover:border-orange-500/20 transition-all shadow-[0_4px_20px_rgba(124,58,237,0.02)]"
          >
            <div className="p-3 rounded-full bg-purple-50 mb-4 group-hover:rotate-12 transition-transform duration-300">
              {stat.icon}
            </div>
            <span className="text-3xl md:text-5xl font-black tracking-tight text-[#120830] mb-2 bg-gradient-to-r from-[#7c3aed] to-orange-500 bg-clip-text text-transparent group-hover:to-orange-500 transition-all duration-300">
              {stat.value}
            </span>
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
