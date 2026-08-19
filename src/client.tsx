import React from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import "./styles.css";

hydrateRoot(
  document,
  <React.StrictMode>
    <StartClient />
  </React.StrictMode>
);
