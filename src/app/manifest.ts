import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Villa Tiziana",
    short_name: "Villa Tiziana",
    description: "A blog site for a Tiziana",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#96b03a",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
