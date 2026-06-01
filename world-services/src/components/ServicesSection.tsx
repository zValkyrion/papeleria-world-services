"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
}

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  badge: string;
  specs: string[];
}

interface ServicesSectionProps {
  categories: ServiceCategory[];
  services: ServiceItem[];
}

export default function ServicesSection({ categories, services }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    if (servicesScrollRef.current) {
      const scrollAmount = servicesScrollRef.current.clientWidth * 0.75 * direction;
      servicesScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredServices = selectedCategory === "todos"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="servicios" className="py-32 px-4 md:px-6 bg-[#faf9fc] border-t border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Services */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
              Servicios y Sustratos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
              Maestría en Materiales <br />y Artes Gráficas
            </h2>
          </div>
          
          <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
            Dominamos la versatilidad de los sustratos: acrílico cristal/espejo, trovicel, coroplast, MDF, lonas de alta densidad y viniles especializados.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div role="tablist" aria-label="Categorías de Servicios y Sustratos" className="flex gap-2 overflow-x-auto pb-6 no-scrollbar border-b border-white/5 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              role="tab"
              aria-selected={selectedCategory === category.id}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-[#faf9fc] text-zinc-500 hover:text-[#7c3aed] hover:bg-purple-50 border border-purple-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Mock Browser & Carousel */}
        <div className="relative border border-purple-100 bg-[#fefefe]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(124,58,237,0.08)] mb-16">
          {/* Browser Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-purple-100/60 bg-white/90">
            {/* Windows Controls (3 Dots) */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
            </div>
            {/* Address / URL Bar */}
            <div className="hidden sm:block flex-1 max-w-md mx-4 py-1.5 px-4 rounded-full bg-purple-50/50 border border-purple-100/30 text-[10px] font-mono text-zinc-400 text-center select-none truncate">
              https://worldservices.com.mx/servicios/{selectedCategory}
            </div>
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll(-1)}
                className="p-2 rounded-full border border-purple-100 bg-white hover:bg-purple-50 text-zinc-600 transition-colors shadow-sm focus:outline-none cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll(1)}
                className="p-2 rounded-full border border-purple-100 bg-white hover:bg-purple-50 text-zinc-600 transition-colors shadow-sm focus:outline-none cursor-pointer"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Browser Content - Scrollable Carousel */}
          <div
            ref={servicesScrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-6 py-6 md:py-8 no-scrollbar scroll-smooth snap-x snap-mandatory items-stretch"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 md:p-8 rounded-3xl border border-purple-100 bg-white flex flex-col justify-between group hover:border-orange-500/20 transition-all duration-300 shadow-sm w-[280px] sm:w-[340px] snap-start flex-shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-mono text-purple-600 font-bold uppercase tracking-widest">
                      {service.category.replace("-", " ")}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-orange-500/10 text-orange-600 border border-orange-500/10">
                      {service.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-[#120830] mb-3 group-hover:text-[#7c3aed] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-600 leading-relaxed min-h-[60px]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-purple-600 font-mono block mb-3">
                    Especificaciones
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.specs.map((spec, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] text-zinc-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
