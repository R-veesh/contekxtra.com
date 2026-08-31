import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/Privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ContekXtra Technologies (Pvt) Ltd" },
      {
        name: "description",
        content:
          "Privacy Policy for ContekXtra Technologies (Pvt) Ltd. Learn how we collect, use, and protect your personal data when you use our enterprise context intelligence platform.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://contekxtra.com/privacy" },
    ],
  }),
  component: Privacy,
});
