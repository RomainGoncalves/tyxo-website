// Shared primitives for Tyxo landing-page explorations.
// All three artboards share Tyxo brand tokens but pursue distinct visual postures.

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

export { TyxoLogo, Kicker, StripedPlaceholder };
