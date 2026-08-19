import { MetadataRoute } from "next";
import { SITE_URL, url } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Fecha estable de última revisión de contenido.
 * Se usa una constante en lugar de `new Date()` para que cada build no
 * declare todo el sitio como recién actualizado.
 */
const LAST_REVIEWED = new Date("2026-08-18");

const portfolioImages = [
  "lacoste-anuncio-luminoso-instalado",
  "lacoste-letras-3d-taller",
  "hyundai-glovis-letras-backlight",
  "samsonite-mueble-exhibidor-lightbox",
  "samsonite-lightbox-vinil-backlight",
  "samsonite-exhibidor-retail-perfil",
  "marinela-barritas-activacion-plaza",
  "marinela-barritas-neon-corazon",
  "marinela-barritas-fabricacion-taller",
  "supra-liverpool-kiosco-demostracion",
  "deporte-office-letras-acrilico-cromado",
  "pilot-exhibidor-plumas-retail",
  "exhibidores-carton-pop-punto-venta",
].map((slug) => `${SITE_URL}/portafolio/${slug}.jpg`);

const papeleriaImages = [
  "papeleria-consumibles-banner",
  "papeleria-toners-libretas-carpetas",
  "equipo-computo-oficina",
  "accesorios-computo-perifericos",
  "webcams-videoconferencia",
].map((slug) => `${SITE_URL}/papeleria/${slug}.jpg`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: LAST_REVIEWED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [...portfolioImages, ...papeleriaImages],
    },
    {
      url: url("/aviso-privacidad"),
      lastModified: LAST_REVIEWED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/terminos"),
      lastModified: LAST_REVIEWED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
