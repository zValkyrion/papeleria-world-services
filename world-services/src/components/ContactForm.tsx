"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "Gran Formato",
    budget: "$10,000 - $30,000 MXN",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setTrackingCode(`WS-${Math.floor(1000 + Math.random() * 9000)}`);
    setFormSubmitted(true);
    
    // Performance optimization: dynamically import canvas-confetti ONLY on success
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#8b5cf6", "#ec4899", "#f97316"]
      });
    } catch (err) {
      console.error("Failed to load confetti:", err);
    }

    // Reset after some time
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "Gran Formato",
        budget: "$10,000 - $30,000 MXN",
        message: ""
      });
    }, 6000);
  };

  return (
    <section id="contacto" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact Information (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-zinc-500 font-mono">
              Iniciar Proyecto
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
              Tengamos una <br />Asesoría Hoy Mismo
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
              Llena el formulario inteligente y un estratega de marca se pondrá en contacto contigo para cotizar y asesorarte de forma personalizada.
            </p>
          </div>

          {/* Quick direct buttons */}
          <div className="flex flex-col gap-4 mt-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 font-mono">
              Canales de Atención Rápida
            </span>
            
            {/* Whatsapp Ricardo */}
            <a 
              href="https://wa.me/525615053683?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20con%20World%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-purple-100 bg-white hover:bg-green-50/30 hover:border-green-500/30 transition-all duration-300 group shadow-sm shadow-purple-500/1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/10 text-green-600 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500">WhatsApp Ventas</span>
                  <span className="text-sm font-bold text-[#120830]">Ricardo Hernández</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-green-400 font-bold group-hover:translate-x-1 transition-transform">Chat Rápido →</span>
            </a>

            {/* Whatsapp Carlos */}
            <a 
              href="https://wa.me/525521192519?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20con%20World%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl border border-purple-100 bg-white hover:bg-green-50/30 hover:border-green-500/30 transition-all duration-300 group shadow-sm shadow-purple-500/1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/10 text-green-600 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500">WhatsApp Ventas</span>
                  <span className="text-sm font-bold text-[#120830]">Carlos Daniel López</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-green-400 font-bold group-hover:translate-x-1 transition-transform">Chat Rápido →</span>
            </a>

            {/* Direct Calls */}
            <div className="flex gap-4">
              <a 
                href="tel:5615053683"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border border-purple-100 bg-white text-xs text-zinc-700 hover:text-[#7c3aed] hover:bg-purple-50/30 transition-colors font-bold tracking-wider shadow-sm shadow-purple-500/1"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                Llamar Ricardo
              </a>
              <a 
                href="tel:5521192519"
                className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border border-purple-100 bg-white text-xs text-zinc-700 hover:text-[#7c3aed] hover:bg-purple-50/30 transition-colors font-bold tracking-wider shadow-sm shadow-purple-500/1"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                Llamar Carlos
              </a>
            </div>

            {/* Correo */}
            <a 
              href="mailto:sales@worldservices.com.mx"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-purple-100 bg-purple-50/20 text-xs text-zinc-700 hover:text-[#7c3aed] hover:bg-purple-50/50 transition-colors font-bold tracking-wider"
            >
              <Mail className="w-4 h-4 text-purple-600" />
              sales@worldservices.com.mx
            </a>
          </div>
        </div>

        {/* Smart Lead Form (Right) */}
        <div className="lg:col-span-7">
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Visual Glow detail inside card */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-600/10 rounded-bl-full blur-[30px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form-active"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Ej. Diana Escalante"
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Nombre Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        aria-required="true"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Ej. Inmobiliaria Metrópolis"
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Teléfono */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Teléfono Directo *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        aria-required="true"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="Ej. 55 1234 5678"
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500"
                      />
                    </div>

                    {/* Correo */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Ej. diana@metropolis.com"
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Servicio Requerido */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Servicio Requerido
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500 cursor-pointer"
                      >
                        <option value="Gran Formato">Gran Formato (Lonas)</option>
                        <option value="Rotulación">Rotulación (Flotillas/Instalaciones)</option>
                        <option value="Impresos">Impresos (Revistas/Catálogos)</option>
                        <option value="Señalética">Señalética (Letreros PVC)</option>
                        <option value="Promocionales">Artículos Promocionales</option>
                        <option value="Corte Láser">Grabado y Corte Láser</option>
                      </select>
                    </div>

                    {/* Presupuesto Estimado */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                        Presupuesto Estimado (MXN)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleFormChange}
                        className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500 cursor-pointer"
                      >
                        <option value="Menos de $10,000 MXN">Menos de $10,000 MXN</option>
                        <option value="$10,000 - $30,000 MXN">$10,000 - $30,000 MXN</option>
                        <option value="$30,000 - $80,000 MXN">$30,000 - $80,000 MXN</option>
                        <option value="Más de $80,000 MXN">Más de $80,000 MXN</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                      Describe tu idea o especificaciones
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Ej. Necesitamos rotular 4 camionetas Transit e instalar 2 fachadas volumétricas de acrílico iluminadas de 3.5m de largo en nuestras nuevas oficinas en Polanco."
                      className="p-3.5 rounded-xl bg-white border border-purple-200/60 text-zinc-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-colors focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 text-white font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_25px_rgba(124,58,237,0.15)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderIcon className="w-4 h-4 animate-spin" />
                        Procesando Solicitud...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center py-12 gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      ¡Solicitud Recibida con Éxito!
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                      Gracias por contactar a <strong className="text-zinc-300">WORLD SERVICES</strong>. Un estratega técnico de marca se comunicará contigo en menos de 2 horas para brindarte tu cotización personalizada.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-wider uppercase text-zinc-500">
                    Código de seguimiento: {trackingCode}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoaderIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={`animate-spin ${className}`} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
