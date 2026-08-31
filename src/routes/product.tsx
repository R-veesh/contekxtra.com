import { createFileRoute } from "@tanstack/react-router";
import Product from "@/pages/Product";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — ContekXtra Enterprise Context Intelligence Platform" },
      {
        name: "description",
        content:
          "Explore the ContekXtra platform — enterprise context intelligence powered by advanced AI. Discover capabilities, architecture, and how it transforms organizational knowledge discovery.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Product — ContekXtra Enterprise Context Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Explore the ContekXtra platform — enterprise context intelligence powered by advanced AI. Discover capabilities, architecture, and how it transforms organizational knowledge discovery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://contekxtra.com/product" },
      { property: "og:site_name", content: "ContekXtra" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Product — ContekXtra Enterprise Context Intelligence Platform" },
      {
        name: "twitter:description",
        content:
          "Explore the ContekXtra platform — enterprise context intelligence powered by advanced AI. Discover capabilities, architecture, and how it transforms organizational knowledge discovery.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://contekxtra.com/product" },
    ],
  }),
  component: Product,
});
