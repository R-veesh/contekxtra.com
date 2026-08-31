import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ContekXtra — Enterprise Context Intelligence" },
      {
        name: "description",
        content:
          "ContekXtra enables organizations to unify fragmented enterprise knowledge, understand contextual relationships between information sources, and deliver relevant intelligence.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "ContekXtra — Enterprise Context Intelligence" },
      {
        property: "og:description",
        content:
          "ContekXtra enables organizations to unify fragmented enterprise knowledge, understand contextual relationships between information sources, and deliver relevant intelligence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://contekxtra.com/" },
      { property: "og:site_name", content: "ContekXtra" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ContekXtra — Enterprise Context Intelligence" },
      {
        name: "twitter:description",
        content:
          "ContekXtra enables organizations to unify fragmented enterprise knowledge, understand contextual relationships between information sources, and deliver relevant intelligence.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://contekxtra.com/" },
    ],
  }),
  component: Home,
});
