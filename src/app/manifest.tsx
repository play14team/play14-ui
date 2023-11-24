import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "#play14 - play is the way",
    short_name: "#play14",
    description:
      "#play14 is a worldwide gathering of like-minded people who believe that playing is the best way to learn, share and be creative!",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
