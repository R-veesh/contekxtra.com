import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/Privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ContekXtra" },
      { name: "description", content: "Privacy Policy for ContekXtra" },
    ],
  }),
  component: Privacy,
});
