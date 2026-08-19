import {
  MessageSquare,
  Phone,
  Mail,
  Clock,
  MapPin,
  Ruler,
  Layers,
  CalendarDays,
  FileImage,
  Check
} from "lucide-react";

const WHATSAPP_MSG =
  "Hola,%20quisiera%20cotizar%20un%20proyecto%20con%20World%20Services.";

const sellers = [
  { name: "Ricardo Hernández", phone: "5615053683", display: "56 1505 3683" },
  { name: "Carlos Daniel López", phone: "5521192519", display: "55 2119 2519" }
];

// Lo que antes pedía el formulario, ahora como checklist para cotizar directo.
const quoteChecklist = [
  {
    icon: <Ruler className="w-4 h-4 text-purple-600" />,
    title: "Medidas y cantidad",
    desc: "Ancho por alto en centímetros y cuántas piezas necesitas."
  },
  {
    icon: <Layers className="w-4 h-4 text-orange-600" />,
    title: "Material o acabado",
    desc: "Si no lo sabes, descríbenos el uso y nosotros te recomendamos el sustrato."
  },
  {
    icon: <MapPin className="w-4 h-4 text-purple-600" />,
    title: "Dónde se instala",
    desc: "Interior o exterior, altura y tipo de muro o estructura."
  },
  {
    icon: <CalendarDays className="w-4 h-4 text-orange-600" />,
    title: "Fecha límite",
    desc: "Cuándo necesitas la instalación o la entrega en sitio."
  },
  {
    icon: <FileImage className="w-4 h-4 text-purple-600" />,
    title: "Tu logotipo en vector",
    desc: "Archivo .ai, .eps, .pdf o .svg. Si solo tienes JPG, lo revectorizamos."
  }
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Canales directos (izquierda) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-zinc-500 font-mono">
              Iniciar Proyecto
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
              Tengamos una <br />Asesoría Hoy Mismo
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
              Sin formularios ni esperas. Escríbenos por WhatsApp o llámanos y un
              estratega técnico te cotiza directamente, con asesoría de materiales
              incluida.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 font-mono">
              Canales de Atención Rápida
            </span>

            {sellers.map((s) => (
              <a
                key={s.phone}
                href={`https://wa.me/52${s.phone}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border border-purple-100 bg-white hover:bg-green-50/30 hover:border-green-500/30 transition-all duration-300 group shadow-sm shadow-purple-500/1"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-500/10 text-green-600 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500">
                      WhatsApp Ventas
                    </span>
                    <span className="text-sm font-bold text-[#120830]">{s.name}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-green-600 font-bold group-hover:translate-x-1 transition-transform">
                  Chat Rápido →
                </span>
              </a>
            ))}

            {/* Llamadas directas */}
            <div className="flex gap-4">
              {sellers.map((s) => (
                <a
                  key={s.phone}
                  href={`tel:${s.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border border-purple-100 bg-white text-xs text-zinc-700 hover:text-[#7c3aed] hover:bg-purple-50/30 transition-colors font-bold tracking-wider shadow-sm shadow-purple-500/1"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  {s.display}
                </a>
              ))}
            </div>

            <a
              href="mailto:sales@worldservices.com.mx"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-purple-100 bg-purple-50/20 text-xs text-zinc-700 hover:text-[#7c3aed] hover:bg-purple-50/50 transition-colors font-bold tracking-wider"
            >
              <Mail className="w-4 h-4 text-purple-600" />
              sales@worldservices.com.mx
            </a>
          </div>
        </div>

        {/* Guía para cotizar (derecha) */}
        <div className="lg:col-span-7">
          <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Detalle de resplandor dentro de la tarjeta */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-600/10 rounded-bl-full blur-[30px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
                  Cotiza en una sola conversación
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#120830] leading-tight">
                  Mándanos estos 5 datos y te cotizamos el mismo día
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed max-w-lg">
                  No necesitas tener el proyecto definido. Con lo que tengas a la mano
                  levantamos la cotización y te proponemos alternativas de material y
                  presupuesto.
                </p>
              </div>

              {/* Checklist */}
              <ul className="flex flex-col gap-3">
                {quoteChecklist.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-purple-100 hover:border-orange-500/20 transition-colors duration-300"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold tracking-tight text-[#120830]">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-zinc-600 leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Compromisos de atención */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-5 border-t border-purple-100">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="text-[11px] font-bold text-[#120830]">
                      Lunes a viernes
                    </span>
                    <span className="text-[10px] text-zinc-500">9:00 a 18:00 h</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="text-[11px] font-bold text-[#120830]">
                      Base en CDMX
                    </span>
                    <span className="text-[10px] text-zinc-500">Cobertura nacional</span>
                  </div>
                </div>
              </div>

              {/* CTA principal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/52${sellers[0].phone}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Cotizar por WhatsApp
                </a>
                <a
                  href="mailto:sales@worldservices.com.mx?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20World%20Services"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-bold tracking-widest uppercase border border-purple-200 bg-white text-[#120830] hover:border-orange-500/40 hover:text-[#7c3aed] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Enviar por correo
                </a>
              </div>

              <p className="flex items-center gap-2 text-[10px] text-zinc-500">
                <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                Respondemos cada solicitud con una propuesta técnica, no con un correo
                automático.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
