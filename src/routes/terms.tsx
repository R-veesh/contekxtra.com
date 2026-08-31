import { createFileRoute } from "@tanstack/react-router";
import Terms from "@/pages/Terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — ContekXtra Technologies (Pvt) Ltd" },
      {
        name: "description",
        content:
          "Terms and Conditions for ContekXtra Technologies (Pvt) Ltd. Read the terms governing your use of our enterprise context intelligence platform and services.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://contekxtra.com/terms" },
    ],
  }),
  component: Terms,
});
