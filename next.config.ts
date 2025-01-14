import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'raw.githubusercontent.com',        // Para imagens nos repositórios GitHub
      'opengraph.github.com',             // Open Graph do GitHub
      'opengraph.githubassets.com',       // Open Graph do GitHub Assets
      'avatars.githubusercontent.com',      // Avatares do GitHub
    ],
  },
};

export default nextConfig;
