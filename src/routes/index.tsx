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
      { property: "og:title", content: "ContekXtra — Enterprise Context Intelligence" },
      {
        property: "og:description",
        content:
          "ContekXtra enables organizations to unify fragmented enterprise knowledge, understand contextual relationships between information sources, and deliver relevant intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
