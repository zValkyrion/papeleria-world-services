/**
 * Fuente única de verdad para URL, datos de negocio y SEO.
 * Todo canonical, sitemap, robots y JSON-LD se deriva de aquí para que
 * no vuelvan a desincronizarse entre archivos.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://worldservices.com.mx"
).replace(/\/$/, "");

/** next.config usa trailingSlash: true, así que los canonicals deben terminar en "/". */
export function url(path = "/"): string {
  const clean = `/${path}`.replace(/\/+/g, "/");
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export const SITE_NAME = "WORLD SERVICES";
export const SITE_SLOGAN = "YO LO HAGO POR TI";
export const LOCALE = "es_MX";

export const CONTACT = {
  email: "sales@worldservices.com.mx",
  phones: [
    { name: "Ricardo Hernández", e164: "+525615053683" },
    { name: "Carlos Daniel López", e164: "+525521192519" }
  ],
  city: "Ciudad de México",
  region: "CDMX",
  country: "MX",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  }
} as const;

export const DESCRIPTION =
  "Comunicación visual premium en CDMX: anuncios luminosos, letras volumétricas 3D, impresión de gran formato, rotulación de flotillas, señalética normativa y corte láser. También papelería y consumibles con entrega de 24 h a 48 h.";

/**
 * Servicios reales de la página, reutilizados en el OfferCatalog de schema.org.
 * Sin precios: no inventamos datos que Google pueda marcar como engañosos.
 */
export const SERVICE_CATALOG = [
  {
    name: "Anuncios luminosos y letras volumétricas 3D",
    description:
      "Letras de acrílico y aluminio con iluminación LED frontal o retroiluminación halo, fabricadas e instaladas para fachadas y recepciones corporativas."
  },
  {
    name: "Impresión digital de gran formato",
    description:
      "Lona front, lona mesh microperforada y lona backlight translúcida para espectaculares, fachadas y cajas de luz."
  },
  {
    name: "Rotulación corporativa y de flotillas",
    description:
      "Rotulado vehicular con vinil automotriz fundido 3M y Avery Dennison con laminado UV, y rotulación de placas rígidas de Trovicel, PVC, MDF y aluminio."
  },
  {
    name: "Corte y grabado láser",
    description:
      "Corte de acrílico cristal, espejo y color, además de ruteado CNC de aluminio compuesto Alucobond para fachadas arquitectónicas."
  },
  {
    name: "Señalética de protección civil",
    description:
      "Rutas de evacuación, extintores y puntos de reunión en material fotoluminiscente conforme a la normativa vigente en la CDMX."
  },
  {
    name: "Muebles exhibidores y activaciones BTL",
    description:
      "Islas exhibidoras iluminadas, kioscos de demostración, displays POP de cartón y escenografía publicitaria con neón LED para punto de venta."
  },
  {
    name: "Papelería y consumibles de oficina",
    description:
      "Lápices, plumas, libretas, carpetas, folders, tóners originales y compatibles, equipo de cómputo y periféricos con entrega de 24 h a 48 h en CDMX, precio fijo por 12 meses y facturación inmediata."
  },
  {
    name: "Artículos promocionales y papelería corporativa",
    description:
      "Termos y cilindros con grabado láser, mochilas, paraguas, folders, hojas membretadas y tarjetas de presentación con acabados especiales."
  }
] as const;

/** Áreas de servicio declaradas en LocalBusiness. */
export const AREA_SERVED = [
  "Ciudad de México",
  "Estado de México",
  "Zona Metropolitana del Valle de México",
  "México"
] as const;
