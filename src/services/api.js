export async function sendContactMessage(payload) {
  const res = await fetch("https://formspree.io/f/mbgrbarq", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}

export async function sendNewsletterUpdate(payload) {
  const res = await fetch("https://formspree.io/f/xnparbaw", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to send update");
  return res.json();
}
