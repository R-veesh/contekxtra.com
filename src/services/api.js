/**
 * Thin API layer. Point VITE_API_URL at any REST endpoint (PHP, Node, etc.)
 * and the contact form will POST there instead of resolving locally.
 */
const API_URL = import.meta.env.VITE_API_URL ?? "";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  return res.json();
}

export async function sendContactMessage(payload) {
  if (!API_URL) {
    // No backend configured — simulate a successful submission.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return { ok: true, message: "Thanks — your message is on its way. We reply within one business day." };
  }
  return request("/contact", { method: "POST", body: JSON.stringify(payload) });
}
