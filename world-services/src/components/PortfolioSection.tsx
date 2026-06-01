"use client";

import { useState } from "react";
import Image from "next/image";

interface PortfolioFilter {
  id: string;
  name: string;
}

interface PortfolioItem {
  id: string;
  filter: string;
  title: string;
  client: string;
  service: string;
  imgSeed: string;
  size: string;
}

interface PortfolioSectionProps {
  filters: PortfolioFilter[];
  items: PortfolioItem[];
}

export default function PortfolioSection({ filters, items }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState("todos");

  const filteredPortfolio = selectedFilter === "todos"
    ? items
    : items.filter((p) => p.filter === selectedFilter);

  return (
    <section id="portafolio" className="py-32 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Header Portfolio */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
            Casos de Éxito
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
            Soluciones Visuales <br />de Nivel Enterprise
          </h2>
        </div>
        
        <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
          Explora una selección de nuestros proyectos de rotulación corporativa, fachadas rígidas e impresos de alto impacto comercial en México.
        </p>
      </div>

      {/* Filters Portfolio */}
      <div role="tablist" aria-label="Filtros del Portafolio de Casos de Éxito" className="flex gap-2 overflow-x-auto pb-6 no-scrollbar border-b border-purple-100 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            role="tab"
            aria-selected={selectedFilter === filter.id}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
              selectedFilter === filter.id
                ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-[#faf9fc] text-zinc-500 hover:text-[#7c3aed] hover:bg-purple-50 border border-purple-100"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Masonry Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4 md:gap-5">
        {filteredPortfolio.map((project, index) => {
          // Determine grid span based on size and position for irregular layout
          const isLarge = project.size === "lg";
          const gridClass = isLarge
            ? "sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1"
            : index % 5 === 2
              ? "sm:row-span-2"
              : "";

          return (
            <div
              key={project.id}
              className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-purple-50/50 border border-purple-100 hover:border-orange-500/20 transition-all duration-500 ${gridClass}`}
            >
              {/* Optimized Next.js Image Component */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image
                  src={`https://picsum.photos/seed/${project.imgSeed}/800/600`}
                  alt={`Proyecto de ${project.title} para el cliente ${project.client} usando el servicio ${project.service}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Cinematic black mask overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-purple-950/20 mix-blend-overlay z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portfolio Info */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-1.5">
                <span className="sr-only">Caso de éxito: {project.title} de {project.service} para el cliente {project.client}</span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-orange-400 font-mono">
                  Cliente: {project.client}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[11px] text-zinc-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {project.service}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
