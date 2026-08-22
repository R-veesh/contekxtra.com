import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie_consent");
    if (!hasConsented) {
      // Small delay to make it slide in gracefully
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        maxWidth: "380px",
        backgroundColor: "var(--color-dark, #1c1c1c)",
        color: "var(--color-white, #ffffff)",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
        zIndex: 9999,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        animation: "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
      role="dialog"
      aria-live="polite"
    >
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <div>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", fontWeight: "600" }}>Cookies & Privacy</h4>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
          By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.85rem",
            cursor: "pointer",
            padding: "8px 12px",
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: "var(--color-accent, #f0523b)",
            border: "none",
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: "999px",
            cursor: "pointer",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
