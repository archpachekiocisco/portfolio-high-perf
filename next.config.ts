import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 clave para Netlify (static export)

  images: {
    unoptimized: true, // 👈 necesario para export estático
  },
};

export default nextConfig;