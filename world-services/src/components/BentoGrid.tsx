"use client";

import { motion } from "framer-motion";
import { Sparkles, Quote, Star } from "lucide-react";

interface BentoItemProps {
  className?: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
}

export function BentoItem({
  className = "",
  title,
  subtitle,
  description,
  icon,
  badge,
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-3xl overflow-hidden border border-purple-100 bg-white/70 backdrop-blur-md p-8 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,58,237,0.04)] ${className}`}
    >
      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-white/10 transition-all duration-300" />
      
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          {icon ? (
            <div className="p-3.5 rounded-2xl bg-white/5 text-zinc-300 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500/20 to-orange-500/20 flex items-center justify-center text-orange-400">
              <Sparkles className="w-4 h-4" />
            </div>
          )}
          
          {badge && (
            <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400">
              {badge}
            </span>
          )}
        </div>

        {subtitle && (
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
            {subtitle}
          </span>
        )}

        <h3 className="text-xl font-bold tracking-tight text-[#120830] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-orange-500 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-purple-100/50 flex items-center justify-between text-[10px] font-mono text-zinc-500 group-hover:text-zinc-700 transition-colors">
        <span>WORLD SERVICES</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  name: string;
  company: string;
  project: string;
  quote: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  name,
  company,
  project,
  quote,
  rating = 5,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass p-8 rounded-3xl flex flex-col justify-between relative group hover:border-orange-500/20 transition-all duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_15px_35px_rgba(124,58,237,0.06)] ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <Quote className="w-8 h-8 text-purple-200 group-hover:text-purple-400 transition-colors duration-300" />
          <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            ))}
          </div>
        </div>

        <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-medium italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div>
        <div className="h-px bg-purple-100/50 w-full mb-4" />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#120830] tracking-wider">{name}</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mt-0.5">
            {company}
          </span>
          <span className="text-[9px] text-purple-600 font-bold uppercase tracking-wider mt-1">
            Proyecto: {project}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
