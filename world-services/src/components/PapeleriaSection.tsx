import Image from "next/image";
import { Truck, Lock, ReceiptText } from "lucide-react";

// next/image no antepone el basePath automáticamente (ver docs de basePath).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const guarantees = [
  {
    icon: <Truck className="w-5 h-5 text-purple-600" />,
    title: "Entrega de 24 a 48 h",
    desc: "Surtido garantizado en toda la Ciudad de México y Zona Metropolitana."
  },
  {
    icon: <Lock className="w-5 h-5 text-orange-600" />,
    title: "Precio fijo por 12 meses",
    desc: "Tu lista de precios queda blindada un año completo, sin ajustes sorpresa."
  },
  {
    icon: <ReceiptText className="w-5 h-5 text-purple-600" />,
    title: "Facturación inmediata",
    desc: "Recibes tu CFDI al momento de la entrega, listo para tu contabilidad."
  }
];

const catalog = [
  {
    title: "Papelería y Tóners",
    desc: "Lápices, plumas, libretas, folders, carpetas y tóners originales y compatibles para cualquier marca de impresora.",
    img: "/papeleria/papeleria-toners-libretas-carpetas.jpg",
    alt: "Tóners cyan, magenta, amarillo y negro junto a libretas, folders, plumas y accesorios de escritorio",
    specs: ["Originales y compatibles", "Escritorio y archivo", "Marcas líderes"]
  },
  {
    title: "Equipo de Cómputo",
    desc: "Computadoras de escritorio, laptops y monitores listos para operar, con configuración y entrega directa en tu oficina.",
    img: "/papeleria/equipo-computo-oficina.jpg",
    alt: "Monitores, gabinetes de escritorio y laptops de oficina mostrando hojas de cálculo y tableros de trabajo",
    specs: ["Laptops y escritorio", "Monitores", "Entrega configurada"]
  },
  {
    title: "Accesorios y Periféricos",
    desc: "Teclados, ratones, diademas, hubs USB-C, cargadores GaN y cables para equipar puestos de trabajo completos.",
    img: "/papeleria/accesorios-computo-perifericos.jpg",
    alt: "Teclados, ratones, diademas con micrófono, hub USB-C, cargadores y cables ordenados sobre fondo blanco",
    specs: ["Teclados y ratones", "Diademas", "Cables y cargadores"]
  },
  {
    title: "Videoconferencia",
    desc: "Cámaras web HD, barras de sala y dispositivos panorámicos con micrófono integrado para juntas híbridas.",
    img: "/papeleria/webcams-videoconferencia.jpg",
    alt: "Tres cámaras web profesionales: clip HD, barra de sala multilente y cámara panorámica con micrófono",
    specs: ["Cámaras HD", "Barras de sala", "Micrófono integrado"]
  }
];

export default function PapeleriaSection() {
  return (
    <section
      id="papeleria"
      className="py-32 px-4 md:px-6 relative border-t border-purple-100 bg-white"
    >
      {/* Resplandor de marca sutil */}
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-orange-200/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
              Papelería y Consumibles
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
              Entrega de 24 h a 48 h <br />
              en la CDMX
            </h2>
          </div>

          <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
            Lápices, tóners originales y compatibles, libretas, plumas, carpetas y más.{" "}
            <strong className="text-[#120830] font-bold">
              Precio fijo por 12 meses y facturación inmediata.
            </strong>
          </p>
        </div>

        {/* Banner panorámico del surtido completo */}
        <div className="relative rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-[0_15px_50px_-15px_rgba(124,58,237,0.10)] mb-6">
          <div className="relative aspect-[1280/426]">
            <Image
              src={`${basePath}/papeleria/papeleria-consumibles-banner.jpg`}
              alt="Surtido completo de papelería y consumibles: computadora, laptop, teclado, tóners de color, libretas, notas adhesivas y folders"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority={false}
            />
          </div>
          {/* Cintillo de categorías sobre el banner */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-1.5 p-4 md:p-6 bg-gradient-to-t from-white via-white/80 to-transparent">
            {["Escritorio", "Tóners", "Libretas", "Plumas", "Carpetas", "Cómputo"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 bg-white/90 border border-purple-100 px-2.5 py-1 rounded-md backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Garantías comerciales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-16">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-purple-100 bg-[#faf9fc] hover:border-orange-500/20 transition-colors duration-300"
            >
              <span className="shrink-0 w-10 h-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-sm">
                {item.icon}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold tracking-tight text-[#120830]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Catálogo por categoría */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {catalog.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded-3xl border border-purple-100 bg-white overflow-hidden shadow-sm hover:border-orange-500/20 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.12)] transition-all duration-300"
            >
              <div className="relative aspect-[3/2] bg-white overflow-hidden border-b border-purple-100/60">
                <Image
                  src={`${basePath}${item.img}`}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[#120830] mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[9px] text-zinc-600 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Cierre / CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50/60 to-orange-50/40">
          <p className="text-xs text-zinc-600 leading-relaxed max-w-lg text-center sm:text-left">
            ¿Necesitas surtir tu oficina de forma recurrente?{" "}
            <strong className="text-[#120830] font-bold">
              Armamos tu lista personalizada
            </strong>{" "}
            con precio fijo por 12 meses y entrega programada en CDMX.
          </p>
          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            Solicitar lista de precios
          </a>
        </div>
      </div>
    </section>
  );
}
