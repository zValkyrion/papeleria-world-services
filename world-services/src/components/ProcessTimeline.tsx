"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  num: string;
  name: string;
  desc: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="proceso" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header Process */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 gap-4">
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
          Nuestra Dirección
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830]">
          Un Modo. Un Proceso.
        </h2>
        <p className="text-xs text-zinc-600 leading-relaxed">
          Garantizamos un control total en cada milímetro y pixel, desde la llamada inicial de asesoramiento hasta el montaje final en tu local o corporativo.
        </p>
      </div>

      {/* Interactive Timeline Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Nav Steps Column (Left) */}
        <div role="tablist" aria-label="Pasos del Proceso de Trabajo" className="lg:col-span-5 flex flex-col gap-3">
          {steps.map((step, index) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(index)}
              role="tab"
              aria-selected={activeStep === index}
              id={`process-tab-${index}`}
              aria-controls={`process-panel-${index}`}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                activeStep === index
                  ? "bg-white border-purple-100 shadow-[0_10px_25px_-10px_rgba(124,58,237,0.08)]"
                  : "bg-transparent border-transparent hover:bg-purple-50/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                  activeStep === index
                    ? "bg-orange-50 text-orange-600 border-orange-200"
                    : "bg-purple-50/50 text-zinc-500 border-purple-100 group-hover:text-zinc-700"
                }`}>
                  {step.num}
                </span>
                <span className={`text-base font-bold transition-colors ${
                  activeStep === index ? "text-[#120830]" : "text-zinc-600 group-hover:text-zinc-900"
                }`}>
                  {step.name}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                activeStep === index 
                  ? "translate-x-0.5 text-[#7c3aed]" 
                  : "text-zinc-400 group-hover:text-zinc-600"
              }`} />
            </button>
          ))}
        </div>

        {/* Display Visual Detail (Right) */}
        <div className="lg:col-span-7 relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              role="tabpanel"
              id={`process-panel-${activeStep}`}
              aria-labelledby={`process-tab-${activeStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl border border-purple-100 bg-white shadow-[0_15px_40px_rgba(124,58,237,0.04)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono block mb-6">
                Fase {steps[activeStep].num} / 05
              </span>
              
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#120830] mb-4">
                {steps[activeStep].name}
              </h3>
              
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-purple-100 bg-purple-50 text-[10px] font-bold uppercase tracking-wider text-purple-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Instalación Certificada WORLD SERVICES
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
