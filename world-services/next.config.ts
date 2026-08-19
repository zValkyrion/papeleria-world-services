import type { NextConfig } from "next";

// Con dominio propio (public/CNAME) GitHub Pages sirve el sitio desde la raíz,
// así que basePath queda vacío y los canonicals coinciden con la URL real.
// Se deja override por si se necesita publicar bajo un subdirectorio de github.io.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  compress: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
