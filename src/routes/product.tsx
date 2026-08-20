import { createFileRoute } from "@tanstack/react-router";
import Product from "@/pages/Product";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — ContekXtra" },
      { name: "description", content: "The ContekXtra Platform" },
    ],
  }),
  component: Product,
});
