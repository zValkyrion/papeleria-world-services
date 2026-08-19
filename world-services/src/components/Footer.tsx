"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#faf9fc] border-t border-purple-100 pt-20 pb-8 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-orange-200/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-purple-100">
          {/* Brand & Slogan */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <a href="#inicio" onClick={(e) => handleLinkClick(e, "#inicio")} className="flex items-center gap-2 group">
              <img
                src={`${basePath}/logo.png`}
                alt="WORLD SERVICES - Comunicación Visual Premium, Impresión Gran Formato y Corte Láser"
                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-lg font-bold tracking-wider text-[#120830]">WORLD SERVICES</span>
            </a>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
              &ldquo;Donde la calidad encuentra su propósito.&rdquo; Transformamos sustratos en potentes herramientas de comunicación para que tu marca destaque con maestría técnica y acabados impecables.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-purple-700">
                Slogan: &ldquo;YO LO HAGO POR TI&rdquo;
              </span>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#120830]">Navegación</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre Nosotros", href: "#nosotros" },
                { name: "Servicios", href: "#servicios" },
                { name: "Papelería y Consumibles", href: "#papeleria" },
                { name: "Portafolio", href: "#portafolio" },
                { name: "Proceso de Trabajo", href: "#proceso" },
                { name: "Preguntas Frecuentes", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-zinc-600 hover:text-[#7c3aed] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Quicklink */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#120830]">Servicios Especializados</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Gran Formato (Lonas)", href: "#servicios" },
                { name: "Rotulación Corporativa", href: "#servicios" },
                { name: "Impresos Offset y Digital", href: "#servicios" },
                { name: "Corte y Grabado Láser", href: "#servicios" },
                { name: "Artículos Promocionales", href: "#servicios" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-zinc-600 hover:text-[#7c3aed] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#120830]">Contacto y Ventas</h4>
            <div className="flex flex-col gap-3.5">
              <a 
                href="mailto:sales@worldservices.com.mx" 
                className="flex items-center gap-2.5 text-xs text-zinc-600 hover:text-[#7c3aed] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>sales@worldservices.com.mx</span>
              </a>
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:5615053683" 
                  className="flex items-center gap-2.5 text-xs text-zinc-600 hover:text-[#7c3aed] transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[10px] uppercase text-zinc-500">Ricardo Hernández (Ventas)</span>
                    <span>56 1505 3683</span>
                  </div>
                </a>
                <a 
                  href="tel:5521192519" 
                  className="flex items-center gap-2.5 text-xs text-zinc-600 hover:text-[#7c3aed] transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[10px] uppercase text-zinc-500">Carlos Daniel López (Ventas)</span>
                    <span>55 2119 2519</span>
                  </div>
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-600">
                <MapPin className="w-3.5 h-3.5 text-orange-400 mt-0.5" />
                <span className="leading-relaxed">Ciudad de México y Cobertura Corporativa Nacional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-zinc-500 border-t border-purple-100/50 mt-8">
          <div className="flex items-center gap-1">
            <span>© {currentYear}</span>
            <span className="font-bold text-[#120830]">WORLD SERVICES</span>
            <span>- Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-500">CDMX, México</span>
            <a href={`${basePath}/aviso-privacidad`} className="hover:text-purple-600 transition-colors">Aviso de Privacidad</a>
            <a href={`${basePath}/terminos`} className="hover:text-purple-600 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
