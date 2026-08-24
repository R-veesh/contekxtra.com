import { createFileRoute } from "@tanstack/react-router";
import Terms from "@/pages/Terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — ContekXtra" },
      { name: "description", content: "Terms and Conditions for ContekXtra" },
    ],
  }),
  component: Terms,
});
