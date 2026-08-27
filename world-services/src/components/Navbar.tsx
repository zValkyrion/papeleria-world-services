"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface NavbarProps {
  onQuoteClick?: () => void;
  onPortfolioClick?: () => void;
}

export default function Navbar({ onQuoteClick, onPortfolioClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Papelería", href: "#papeleria" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Proceso", href: "#proceso" },
  ];

  // En GitHub Pages el sitio cuelga de /papeleria-world-services/, así que la
  // portada no vive en "/" y hay que comparar contra el basePath.
  const isHome = () => {
    if (typeof window === "undefined") return false;
    const path = window.location.pathname;
    return path === `${basePath}/` || path === (basePath || "/");
  };

  // El salto es directo, no suave: el hero fija el video con ScrollTrigger y
  // su snap (0, 0.5, 1) captura cualquier scroll suave que cruce el rango del
  // pin, dejándolo pegado en el video. Yendo de golpe se sale del rango.
  const scrollToHash = (hash: string) => {
    const element = document.querySelector(hash);
    if (!element) return false;
    element.scrollIntoView({ behavior: "auto", block: "start" });
    return true;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome()) {
      e.preventDefault();
      setIsOpen(false);
      scrollToHash(href);
    } else {
      setIsOpen(false);
    }
  };

  // Estando en la portada se hace scroll en vez de recargar: al recargar, el
  // hero estira la altura de la página después del load y el salto por ancla
  // aterriza en el lugar equivocado.
  const goToSection = (hash: string) => {
    if (typeof window === "undefined") return;
    if (isHome() && scrollToHash(hash)) return;
    window.location.href = `${basePath}/${hash}`;
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      goToSection("#contacto");
    }
  };

  const handlePortfolioClick = () => {
    if (onPortfolioClick) {
      onPortfolioClick();
    } else {
      goToSection("#portafolio");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg border-b border-purple-100/60 shadow-[0_4px_25px_rgba(18,8,48,0.06)] ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" onClick={(e) => handleLinkClick(e, "#inicio")} className="flex items-center gap-2 group">
            <img
              src={`${basePath}/logo.png`}
              alt="WORLD SERVICES - Comunicación Visual Premium, Impresión Gran Formato y Corte Láser"
              className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <span className="text-lg font-bold tracking-wider text-[#120830] transition-colors duration-300">
              WORLD SERVICES
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-semibold tracking-widest uppercase text-[#120830] hover:text-[#7c3aed] transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-purple-50 to-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handlePortfolioClick}
              className="text-xs font-semibold tracking-widest uppercase text-[#120830] hover:text-[#7c3aed] transition-colors duration-200 cursor-pointer"
            >
              Ver Portafolio
            </button>
            <button
              onClick={handleQuoteClick}
              className="relative px-5 py-2.5 rounded-full overflow-hidden group text-xs font-bold tracking-widest uppercase border border-purple-100 bg-white shadow-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_4px_15px_rgba(124,58,237,0.06)] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-1 group-hover:text-white text-zinc-700 transition-colors duration-300">
                Cotizar <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:5615053683" 
              className="p-2 rounded-full border border-purple-100 bg-purple-50/30 text-zinc-600 hover:text-[#7c3aed] hover:bg-purple-50/80 transition-all"
              aria-label="Llamar"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-purple-100 bg-white/80 text-zinc-600 hover:text-[#7c3aed] transition-colors focus:outline-none"
              aria-label="Abrir Menú"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg pt-28 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bold tracking-wider text-zinc-700 hover:text-[#7c3aed] hover:pl-2 transition-all duration-300 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-400 group-hover:text-orange-500 transition-colors">/</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handlePortfolioClick();
                }}
                className="w-full py-4 text-center text-sm font-bold tracking-widest uppercase rounded-full border border-purple-100 bg-purple-50/30 text-zinc-700 cursor-pointer"
              >
                Ver Portafolio
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleQuoteClick();
                }}
                className="w-full py-4 text-center text-sm font-bold tracking-widest uppercase rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-orange-500 text-white shadow-lg cursor-pointer"
              >
                Solicitar Cotización
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
