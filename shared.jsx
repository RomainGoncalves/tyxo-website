// Shared primitives for Tyxo landing-page explorations.
// All three artboards share Tyxo brand tokens but pursue distinct visual postures.
import { useState } from "react";

// Logo — matches charte: hollow circle + TIXO + Sienna "AI"
function TyxoLogo({ dark = false, size = 22 }) {
  const ink = dark ? "#F0EBE3" : "#1A1A1A";
  return (
    <span
      style={{
        fontFamily: "'Fraunces',Georgia,serif",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.01em",
        color: ink,
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.4,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: size * 0.62,
          height: size * 0.62,
          borderRadius: "50%",
          border: `${Math.max(1.5, size * 0.08)}px solid #C0634A`,
          background: "transparent",
        }}
      />
      <span style={{ display: "inline-flex", alignItems: "baseline" }}>
        TIXO
        <span
          style={{
            color: "#C0634A",
            fontStyle: "italic",
            marginLeft: size * 0.05,
          }}
        >
          .AI
        </span>
      </span>
    </span>
  );
}

// Source-Code-Pro mono kicker, brand-typical
function Kicker({ children, color = "#C0634A", size = 11 }) {
  return (
    <span
      style={{
        fontFamily: "'Source Code Pro',monospace",
        fontSize: size,
        fontWeight: 600,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </span>
  );
}

// Striped placeholder block — used when a real screenshot would go
function StripedPlaceholder({ children, height = 240, dark = false, label }) {
  const bg = dark ? "#142E2E" : "#F7F4F0";
  const stripe = dark ? "rgba(240,235,227,0.05)" : "rgba(26,26,26,0.04)";
  return (
    <div
      style={{
        height,
        background: `repeating-linear-gradient(135deg, ${stripe} 0 8px, transparent 8px 16px), ${bg}`,
        border: `1px solid ${dark ? "#2A4A4A" : "#E0E0E0"}`,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Source Code Pro',monospace",
        fontSize: 10,
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: dark ? "#6A8A8A" : "#888888",
      }}
    >
      {label || children}
    </div>
  );
}

function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const ink = dark ? "#F0EBE3" : "#1A1A1A";
  const subtle = dark ? "#6A8A8A" : "#888";
  const border = dark ? "#2A4A4A" : "#D0D0D0";
  const inputBg = dark ? "#0D2E2E" : "#FFFFFF";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/submit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, comment }),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        setEmail("");
        setComment("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 15,
          color: "#C0634A",
          fontWeight: 500,
          padding: "16px 0",
        }}
      >
        Got it — we'll be in touch.
      </div>
    );
  }

  const inputStyle = {
    fontFamily: "'Outfit',sans-serif",
    fontSize: 14,
    color: ink,
    background: inputBg,
    border: `1px solid ${border}`,
    borderRadius: 6,
    padding: "11px 14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 480, margin: "0 auto" }}
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="Tell us about your dataset or research question (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
        style={{ ...inputStyle, resize: "vertical" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: "#F0EBE3",
          background: "#C0634A",
          border: "none",
          borderRadius: 6,
          padding: "13px 24px",
          cursor: status === "loading" ? "default" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Sending…" : "Get early access →"}
      </button>
      {status === "error" && (
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#C0634A" }}>
          Something went wrong — try again.
        </div>
      )}
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: subtle }}>
        EU-hosted · no spam · unsubscribe anytime
      </div>
    </form>
  );
}

export { TyxoLogo, Kicker, StripedPlaceholder, WaitlistForm };
