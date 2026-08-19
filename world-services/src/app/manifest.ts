import { MetadataRoute } from "next";
import { SITE_NAME, DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Comunicación Visual e Impresión Premium`,
    short_name: SITE_NAME,
    description: DESCRIPTION,
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7c3aed",
    lang: "es-MX",
    categories: ["business", "shopping"],
    icons: [
      {
        src: `${basePath}/logo.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
