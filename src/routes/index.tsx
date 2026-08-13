import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brightedge — Digital Design Studio for Brands & Products" },
      {
        name: "description",
        content:
          "Brightedge is a digital design studio crafting brand identities, websites, development and marketing systems for ambitious teams.",
      },
      { property: "og:title", content: "Brightedge — Digital Design Studio" },
      {
        property: "og:description",
        content:
          "Branding, web design, development and marketing from an independent studio obsessed with craft.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
