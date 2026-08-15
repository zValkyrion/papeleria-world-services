import { ShieldCheck, Zap, Clock } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollVideo from "@/components/ScrollVideo";
import { BentoItem, TestimonialCard } from "@/components/BentoGrid";

import ServicesSection from "@/components/ServicesSection";
import PortfolioSection, { type PortfolioItem } from "@/components/PortfolioSection";
import PapeleriaSection from "@/components/PapeleriaSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactForm from "@/components/ContactForm";
import StatsSection from "@/components/StatsSection";
import { FaqItem } from "@/components/FaqAccordion";

export default function Home() {
  // Services configuration
  const serviceCategories = [
    { id: "todos", name: "Todos" },
    { id: "gran-formato", name: "Gran Formato" },
    { id: "rotulacion", name: "Rotulación" },
    { id: "impresos", name: "Impresos" },
    { id: "senaletica", name: "Señalética" },
    { id: "promocionales", name: "Promocionales" },
    { id: "laser", name: "Grabado y Corte" },
  ];

  const services = [
    {
      id: "sf-1",
      category: "gran-formato",
      title: "Lona Front",
      desc: "Lona blanca de alta resistencia e impresión brillante de alta fidelidad, ideal para espectaculares, banners y anuncios exteriores.",
      badge: "Más Vendido",
      specs: ["13 oz / 15 oz", "Acabado brillante/mate", "Resistente a la intemperie"]
    },
    {
      id: "sf-2",
      category: "gran-formato",
      title: "Lona Mesh",
      desc: "Lona microperforada permeable al viento. Evita el efecto vela en zonas de alta corriente de aire y andamios de construcción.",
      badge: "Seguridad",
      specs: ["Perforaciones de flujo", "Ideal para fachadas gigantes", "Peso ligero"]
    },
    {
      id: "sf-3",
      category: "gran-formato",
      title: "Lona Back Light",
      desc: "Lona translúcida especialmente diseñada para letreros luminosos con retroiluminación uniforme sin sombras.",
      badge: "Luminoso",
      specs: ["Paso de luz difuso", "Alta saturación de color", "Estructuras retroiluminadas"]
    },
    {
      id: "rot-1",
      category: "rotulacion",
      title: "Flotillas y Vehículos",
      desc: "Vinil automotriz fundido de alta durabilidad para rotulado de flotillas comerciales. Tu marca en movimiento continuo.",
      badge: "Branding",
      specs: ["Vinil cast 3M / Avery", "Protección UV laminada", "Instalación certificada"]
    },
    {
      id: "rot-2",
      category: "rotulacion",
      title: "Rotulación de Placas Rígidas",
      desc: "Rotulación directa o montada sobre placas de Trovicel (PVC espumado), Coroplast, MDF o Acrílico para exhibidores y stands.",
      badge: "Rígidos",
      specs: ["Trovicel y PVC", "MDF y Aluminio", "Ideal para interiores y ferias"]
    },
    {
      id: "rot-3",
      category: "rotulacion",
      title: "Cuadros y Fotomurales",
      desc: "Vinil decorativo de alta resolución y cuadros canvas de bellas artes para ambientación corporativa de oficinas y locales retail.",
      badge: "Decorativo",
      specs: ["Textura canvas premium", "Impresión latex ecológica", "Montado sobre bastidores"]
    },
    {
      id: "imp-1",
      category: "impresos",
      title: "Muestrarios y Catálogos",
      desc: "Revistas, folletos y catálogos de alta gama para exhibir tus productos con encuadernación profesional y laminados táctiles.",
      badge: "Premium",
      specs: ["Barniz a registro 3D", "Laminado mate soft-touch", "Encuadernación hot-melt"]
    },
    {
      id: "imp-2",
      category: "impresos",
      title: "Papelería Corporativa",
      desc: "Folders, hojas membretadas, libretas corporativas, tarjetas de presentación con acabados especiales y marbetes.",
      badge: "Identidad",
      specs: ["Hot stamping oro/plata", "Suajes personalizados", "Papeles finos texturizados"]
    },
    {
      id: "sen-1",
      category: "senaletica",
      title: "Señalética Protección Civil",
      desc: "Rutas de evacuación, extintores, puntos de reunión. Fabricación oficial cumpliendo las normas técnicas vigentes en México.",
      badge: "Normativa CDMX",
      specs: ["Material fotoluminiscente", "Soportes de trovicel", "Garantía de cumplimiento"]
    },
    {
      id: "pro-1",
      category: "promocionales",
      title: "Termos y Cilindros",
      desc: "Termos de acero inoxidable personalizados con grabado láser de alta precisión o serigrafía digital. Regalos ejecutivos excepcionales.",
      badge: "Corporativo",
      specs: ["Grabado láser permanente", "Aislamiento de vacío", "Presentación individual"]
    },
    {
      id: "pro-2",
      category: "promocionales",
      title: "Mochilas y Paraguas",
      desc: "Artículos promocionales de uso continuo de alta calidad: mochilas para laptops, paraguas reforzados y tazas personalizadas.",
      badge: "Impacto",
      specs: ["Bordados y serigrafía", "Materiales ecológicos", "Amplio catálogo"]
    },
    {
      id: "las-1",
      category: "laser",
      title: "Corte Láser Acrílico",
      desc: "Corte y grabado digital de acrílico cristal o espejo. Ideal para letreros volumétricos 3D iluminados, logotipos y reconocimientos.",
      badge: "Alta Precisión",
      specs: ["Corte perfecto pulido", "Acrílico espejo y color", "Letras 3D volumétricas"]
    },
    {
      id: "las-2",
      category: "laser",
      title: "Corte de Aluminio y Alucobond",
      desc: "Procesamiento de paneles compuestos de aluminio (Alucobond) y aluminio sólido para fachadas arquitectónicas modernas y letreros.",
      badge: "Estructuras",
      specs: ["Resistencia exterior 10 años", "Ruteado CNC perfecto", "Acabados metálicos"]
    }
  ];

  // Portfolio items
  const portfolioFilters = [
    { id: "todos", name: "Todos" },
    { id: "luminosos", name: "Anuncios Luminosos" },
    { id: "retail", name: "Retail y Exhibidores" },
    { id: "btl", name: "Activaciones BTL" },
    { id: "taller", name: "Fabricación en Taller" },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: "p1",
      filter: "luminosos",
      title: "Anuncio Luminoso de Fachada",
      client: "Lacoste",
      service: "Letras volumétricas de acrílico con iluminación LED frontal",
      img: "/portafolio/lacoste-anuncio-luminoso-instalado.jpg",
      size: "lg"
    },
    {
      id: "p2",
      filter: "taller",
      title: "Fabricación de Letras 3D",
      client: "Lacoste",
      service: "Armado y cableado LED de letras volumétricas en taller",
      img: "/portafolio/lacoste-letras-3d-taller.jpg",
      size: "tall"
    },
    {
      id: "p3",
      filter: "luminosos",
      title: "Letras Corporativas Backlight",
      client: "Hyundai Glovis",
      service: "Letras de aluminio con retroiluminación LED halo en recepción",
      img: "/portafolio/hyundai-glovis-letras-backlight.jpg",
      size: "lg"
    },
    {
      id: "p4",
      filter: "retail",
      title: "Mueble Exhibidor con Lightbox",
      client: "Samsonite",
      service: "Estructura metálica iluminada con lona backlight tensada",
      img: "/portafolio/samsonite-mueble-exhibidor-lightbox.jpg",
      size: "tall"
    },
    {
      id: "p5",
      filter: "retail",
      title: "Lightbox de Campaña Upscape",
      client: "Samsonite",
      service: "Vinil backlight de alta saturación sobre caja de luz LED",
      img: "/portafolio/samsonite-lightbox-vinil-backlight.jpg",
      size: "tall"
    },
    {
      id: "p6",
      filter: "btl",
      title: "Activación de San Valentín",
      client: "Marinela Barritas",
      service: "Photo opportunity con neón flexible y gráficos impresos",
      img: "/portafolio/marinela-barritas-activacion-plaza.jpg",
      size: "lg"
    },
    {
      id: "p7",
      filter: "btl",
      title: "Corazón Neón con Alas 3D",
      client: "Marinela Barritas",
      service: "Escultura publicitaria con neón LED y volumetría escenográfica",
      img: "/portafolio/marinela-barritas-neon-corazon.jpg",
      size: "tall"
    },
    {
      id: "p8",
      filter: "taller",
      title: "Montaje Previo de Escenografía",
      client: "Marinela Barritas",
      service: "Fabricación, pintura y prueba de encendido en planta",
      img: "/portafolio/marinela-barritas-fabricacion-taller.jpg",
      size: "tall"
    },
    {
      id: "p9",
      filter: "retail",
      title: "Isla Exhibidora de Piso",
      client: "Samsonite",
      service: "Perfilería negra, entrepaños iluminados y cenefa impresa",
      img: "/portafolio/samsonite-exhibidor-retail-perfil.jpg",
      size: "tall"
    },
    {
      id: "p10",
      filter: "retail",
      title: "Kiosco de Demostración",
      client: "Supra · Liverpool",
      service: "Mobiliario a medida con vinil de corte y gráficos de gran formato",
      img: "/portafolio/supra-liverpool-kiosco-demostracion.jpg",
      size: "tall"
    },
    {
      id: "p11",
      filter: "taller",
      title: "Letras de Acrílico con Canto Cromo",
      client: "Deporte Office",
      service: "Corte láser, pulido de cantos y acabado cromado espejo",
      img: "/portafolio/deporte-office-letras-acrilico-cromado.jpg",
      size: "tall"
    },
    {
      id: "p12",
      filter: "retail",
      title: "Exhibidor de Plumas en Punto de Venta",
      client: "Pilot",
      service: "Rack metálico rotulado con vinil adhesivo de alta fidelidad",
      img: "/portafolio/pilot-exhibidor-plumas-retail.jpg",
      size: "md"
    },
    {
      id: "p13",
      filter: "retail",
      title: "Exhibidores POP de Cartón",
      client: "Paper Mate · Sharpie · Command",
      service: "Suaje, impresión y armado de displays de piso desechables",
      img: "/portafolio/exhibidores-carton-pop-punto-venta.jpg",
      size: "md"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      num: "01",
      name: "Asesoría Técnica",
      desc: "Analizamos tu proyecto de branding para recomendarte los sustratos, grosores y técnicas de impresión óptimas que cuiden tu presupuesto."
    },
    {
      num: "02",
      name: "Diseño & Ingeniería",
      desc: "Desarrollamos los planos de suaje, montajes virtuales (mockups) y adaptamos los colores para garantizar fidelidad cromática al 100%."
    },
    {
      num: "03",
      name: "Producción de Alta Gama",
      desc: "Procesamos los materiales con tecnología avanzada de impresión digital, corte láser o ruteado en nuestros talleres especializados."
    },
    {
      num: "04",
      name: "Instalación Certificada",
      desc: "Nuestro equipo técnico realiza el montaje final de lonas, anuncios volumétricos o rotulación de vehículos con garantía estructural."
    },
    {
      num: "05",
      name: "Seguimiento y Control",
      desc: "Realizamos una auditoría final contigo para asegurar que cada acabado y tornillo cumpla con la excelencia de WORLD SERVICES."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué servicios de comunicación visual ofrece WORLD SERVICES en México?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WORLD SERVICES es líder en comunicación visual premium y artes gráficas en México. Ofrecemos servicios integrales que incluyen impresión digital en gran formato (lonas front, mesh, backlight), rotulación automotriz certificada para flotillas comerciales y placas rígidas (Trovicel, PVC, MDF), grabado y corte láser de acrílico y aluminio (letras volumétricas 3D), papelería corporativa de alta gama y artículos promocionales personalizados (termos grabados láser, mochilas, paraguas)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué cobertura tienen para la rotulación e instalación corporativa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contamos con cobertura corporativa nacional en todo México y base técnica principal en la Ciudad de México (CDMX). Realizamos la fabricación e instalación certificada de lonas publicitarias, anuncios luminosos, paneles compuestos de aluminio (Alucobond), letras 3D y sistemas completos de señalética de Protección Civil bajo estrictos estándares de seguridad y durabilidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es su proceso de trabajo para garantizar la calidad premium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garantizamos la excelencia mediante nuestro proceso de 5 fases: 1. Asesoría Técnica sobre sustratos y presupuestos; 2. Diseño e Ingeniería (montajes virtuales y adaptación cromática); 3. Producción de Alta Gama en nuestros talleres especializados; 4. Instalación Certificada con personal capacitado; y 5. Seguimiento y Control de Calidad post-entrega bajo nuestro lema y slogan: 'YO LO HAGO POR TI'."
        }
      },
      {
        "@type": "Question",
        "name": "¿Venden papelería y consumibles de oficina con entrega en CDMX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. WORLD SERVICES surte papelería y consumibles con entrega de 24 h a 48 h en la Ciudad de México y Zona Metropolitana: lápices, plumas, libretas, carpetas, folders, tóners originales y compatibles para cualquier marca de impresora, además de equipo de cómputo, accesorios, periféricos y cámaras de videoconferencia. Manejamos precio fijo por 12 meses sobre tu lista personalizada y facturación inmediata con CFDI al momento de la entrega."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué materiales y sustratos rígidos manejan para corte y grabado láser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manejamos una amplia versatilidad de sustratos premium con alta resistencia a la intemperie de hasta 10 años. Esto incluye acrílico cristal, acrílico espejo y acrílico de colores, placas de PVC espumado (Trovicel), Coroplast, MDF, aluminio compuesto (Alucobond) y aluminio sólido para fachadas arquitectónicas y exhibidores."
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white text-[#120830] overflow-hidden">
      {/* JSON-LD Schema FAQ for search engines and AI bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Global Glow Details */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[120vh] left-1/4 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[200vh] right-1/3 w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Header / Navbar (Self-contained scroll/routing triggers inside) */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        
        {/* HERO SECTION WITH VIDEO SCROLL */}
        <ScrollVideo />

        {/* SOBRE NOSOTROS */}
        <section id="nosotros" className="py-32 px-6 relative max-w-7xl mx-auto grid-bg border-t border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Title Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
                Quiénes Somos
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830] leading-tight">
                Donde la Calidad <br />
                Encuentra su Propósito
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
                En <strong className="text-[#120830] font-bold">WORLD SERVICES</strong> entendemos que detrás de cada impresión hay una marca buscando conectar con su audiencia. No somos solo un proveedor; somos tu socio estratégico integral.
              </p>
              
              <div className="pt-6 border-t border-purple-100/80 mt-4 flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-wider text-purple-600 uppercase font-mono">Nuestra Misión</span>
                <p className="text-xs text-zinc-500 italic">
                  &ldquo;Proporcionar soluciones integrales de comunicación visual y artes gráficas que potencien la identidad de nuestros clientes. Nos comprometemos a transformar conceptos creativos en productos tangibles de la más alta calidad.&rdquo;
                </p>
              </div>
            </div>

            {/* Asymmetric Bento details */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoItem
                title="Calidad Garantizada"
                description="Nos obsesionamos con el detalle. Utilizamos materiales de primera categoría y procesos rigurosos para que cada pieza sea duradera, estética y funcional."
                icon={<ShieldCheck className="w-5 h-5 text-purple-600" />}
                badge="Estándar Oro"
              />
              <BentoItem
                title="Innovación y Maquinaria"
                description="Invertimos en maquinaria de última generación. Buscamos siempre el 'cómo sí' ante retos de corte, volumen e iluminación compleja."
                icon={<Zap className="w-5 h-5 text-orange-600" />}
                badge="Tecnología"
              />
              <BentoItem
                className="md:col-span-2"
                title="Socio Estratégico y Confianza"
                description="Entendemos que nos entregas la reputación de tu marca. Actuamos con total transparencia, respetando presupuestos y garantizando plazos de entrega puntuales."
                icon={<Clock className="w-5 h-5 text-purple-600" />}
                badge="Transparencia Integral"
              />
            </div>

          </div>
        </section>

        {/* SERVICIOS ESPECIALIZADOS (Optimized Client Component) */}
        <ServicesSection categories={serviceCategories} services={services} />

        {/* PAPELERÍA Y CONSUMIBLES (Static SSR Render) */}
        <PapeleriaSection />

        {/* PORTAFOLIO INTERACTIVO (Optimized Client Component with Next Image) */}
        <PortfolioSection filters={portfolioFilters} items={portfolioItems} />

        {/* WHY CHOOSE US - STATS (Optimized Client Component) */}
        <StatsSection />

        {/* PROCESO DE TRABAJO - TIMELINE INTERACTIVO (Optimized Client Component) */}
        <ProcessTimeline steps={processSteps} />

        {/* TESTIMONIALS (BENTO GRID - Static SSR Render) */}
        <section className="py-32 px-6 bg-[#faf9fc] border-t border-b border-purple-100 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Testimonials */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 gap-4">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
                Testimonios
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830]">
                Respaldados por Líderes
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Empresas de todos los tamaños en México confían en WORLD SERVICES como su aliado en comunicación visual.
              </p>
            </div>

            {/* Testimonials Grid (Bento Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="Diana Escalante"
                company="Inmobiliaria Metrópolis CDMX"
                project="Fachada y Letras Volumétricas 3D"
                quote="El acrílico espejo tallado láser superó por completo nuestras expectativas. La fidelidad de color y el pulido de cantos es impecable, se nota una maestría técnica única en WORLD SERVICES."
              />
              <TestimonialCard
                name="Ing. Alejandro Ruiz"
                company="Logística Express del Norte"
                project="Rotulado Completo de Flotilla"
                quote="Rotularon 15 camiones de nuestra flotilla en tiempo récord. El vinil automotriz de Avery se ve espectacular y ha resistido perfectamente las carreteras y el lavado industrial sin desgastes."
              />
              <TestimonialCard
                name="Sofía Martínez"
                company="Boutique Moda & Concepto"
                project="Lonas Backlight y Fotomurales"
                quote="La lona Backlight luminosa que montaron en el local atrae miradas de todos los transeúntes. Su asesoría técnica para la iluminación fue vital para lograr el ambiente premium que buscábamos."
              />
            </div>

          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ) - ACCESIBILIDAD Y SEO DE IA (Static SSR Render) */}
        <section id="faq" className="py-32 px-6 bg-[#faf9fc] border-t border-b border-purple-100 relative z-10">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-200/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto">
            {/* Header FAQ */}
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-purple-600 font-mono">
                Preguntas Frecuentes · Asesoría Directa
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#120830]">
                Respuestas para Impulsar tu Marca
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-lg">
                Resolvemos tus dudas técnicas sobre impresión digital en gran formato, rotulación, corte láser acrílico y normativas en la CDMX.
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              <FaqItem question="¿Qué servicios de comunicación visual ofrece WORLD SERVICES en México?">
                <div className="mt-4 text-xs text-zinc-600 leading-relaxed border-t border-purple-50 pt-4 flex flex-col gap-2">
                  <p>
                    <strong>WORLD SERVICES</strong> es líder en soluciones integrales de comunicación visual premium. Diseñamos, producimos e instalamos:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
                    <li><strong>Impresión en Gran Formato:</strong> Lona front, lona mesh permeable al viento y lona backlight retroiluminada.</li>
                    <li><strong>Rotulación Corporativa:</strong> Rotulado con vinil automotriz 3M y Avery Cast para flotillas comerciales y placas rígidas (Trovicel, PVC, MDF).</li>
                    <li><strong>Grabado y Corte Láser:</strong> Letras volumétricas 3D en acrílico cristal o espejo y paneles compuestos de aluminio (Alucobond).</li>
                    <li><strong>Señalética de Protección Civil:</strong> Letreros fotoluminiscentes cumpliendo estrictamente la normativa oficial de la CDMX.</li>
                    <li><strong>Artículos Promocionales y Papelería:</strong> Libretas, marbetes, folders, tazas y termos con grabado láser de alta precisión.</li>
                  </ul>
                </div>
              </FaqItem>

              <FaqItem question="¿Qué cobertura tienen y cómo gestionan los proyectos?">
                <div className="mt-4 text-xs text-zinc-600 leading-relaxed border-t border-purple-50 pt-4">
                  <p>
                    Tenemos base técnica en la <strong>Ciudad de México (CDMX)</strong> con cobertura corporativa nacional. Nos encargamos de todo bajo nuestro slogan y compromiso <strong>&ldquo;YO LO HAGO POR TI&rdquo;</strong>. Nuestro flujo de trabajo abarca 5 fases: Asesoría Técnica de sustratos, Diseño y desarrollo de planos cromáticos (mockups virtuales), Producción de Alta Gama en nuestros talleres especializados, Instalación Certificada con garantía estructural y Auditoría final contigo.
                  </p>
                </div>
              </FaqItem>

              <FaqItem question="¿Qué sustratos y materiales rígidos manejan para corte láser y anuncios?">
                <div className="mt-4 text-xs text-zinc-600 leading-relaxed border-t border-purple-50 pt-4">
                  <p>
                    Manejamos una amplia versatilidad de materiales según el propósito y la durabilidad requerida. Para exteriores y anuncios de alta resistencia (con hasta 10 años de vida útil), trabajamos con <strong>acrílico cristal y espejo</strong>, paneles de aluminio compuesto (<strong>Alucobond</strong>), aluminio sólido, <strong>Trovicel (PVC espumado)</strong>, <strong>Coroplast</strong> y madera <strong>MDF</strong> ruteada con CNC de alta definición.
                  </p>
                </div>
              </FaqItem>

              <FaqItem question="¿Venden papelería y consumibles de oficina con entrega en CDMX?">
                <div className="mt-4 text-xs text-zinc-600 leading-relaxed border-t border-purple-50 pt-4 flex flex-col gap-2">
                  <p>
                    Sí. Surtimos <strong>papelería y consumibles con entrega de 24 h a 48 h</strong> en la Ciudad de México y Zona Metropolitana:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1 mt-1">
                    <li><strong>Escritorio y archivo:</strong> lápices, plumas, libretas, carpetas, folders y accesorios de oficina.</li>
                    <li><strong>Consumibles de impresión:</strong> tóners originales y compatibles para cualquier marca de impresora.</li>
                    <li><strong>Cómputo y periféricos:</strong> laptops, equipos de escritorio, monitores, teclados, diademas, cables y cámaras de videoconferencia.</li>
                  </ul>
                  <p className="mt-1">
                    Trabajamos con <strong>precio fijo por 12 meses</strong> sobre tu lista personalizada y <strong>facturación inmediata</strong>, entregándote el CFDI al momento de la entrega.
                  </p>
                </div>
              </FaqItem>

              <FaqItem question="¿Cómo garantizan la durabilidad de la rotulación vehicular y anuncios exteriores?">
                <div className="mt-4 text-xs text-zinc-600 leading-relaxed border-t border-purple-50 pt-4">
                  <p>
                    Para la rotulación de flotillas y vehículos comerciales, utilizamos viniles automotrices fundidos (Cast) de marcas líderes mundiales como <strong>3M</strong> y <strong>Avery Dennison</strong>. Adicionalmente, aplicamos un laminado con protección UV que previene el desgaste del color por la exposición solar, carreteras y lavado industrial pesado, garantizando que tu marca mantenga su brillo e impacto por años.
                  </p>
                </div>
              </FaqItem>
            </div>
          </div>
        </section>

        {/* FORMULARIO INTELIGENTE Y CONTACTO (Optimized Client Component) */}
        <ContactForm />

      </main>

      {/* Footer Section (Static SSR Render) */}
      <Footer />
    </div>
  );
}
