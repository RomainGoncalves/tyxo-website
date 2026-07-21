// Shared primitives for Tyxo landing-page explorations.
// All three artboards share Tyxo brand tokens but pursue distinct visual postures.
import { useState } from "react";

// Logo — matches charte: hollow circle + TYXO + Sienna "AI"
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
        TYXO
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
        {status === "loading" ? "Sending…" : "Request early access →"}
      </button>
      {status === "error" && (
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "#C0634A" }}>
          Something went wrong — try again.
        </div>
      )}
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: subtle, textAlign: "center" }}>
        EU-hosted · no spam · unsubscribe anytime
      </div>
    </form>
  );
}

const legalStyles = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
    zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
  },
  modal: {
    width: "80vw", height: "80vh", background: "#F0EBE3",
    borderRadius: 12, display: "flex", flexDirection: "column",
    boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
    overflow: "hidden",
  },
  header: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "20px 32px", borderBottom: "1px solid #E0E0E0", flexShrink: 0,
  },
  title: {
    fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 400, color: "#1A1A1A", margin: 0,
  },
  close: {
    background: "none", border: "none", cursor: "pointer",
    fontSize: 22, color: "#888", lineHeight: 1, padding: 4,
  },
  body: {
    overflowY: "auto", padding: "40px 48px 64px",
    fontFamily: "'Outfit',sans-serif", color: "#1A1A1A",
  },
  h2: { fontFamily: "'Fraunces',serif", fontSize: 18, fontWeight: 400, margin: "36px 0 10px" },
  p:  { fontSize: 14, lineHeight: 1.75, color: "#444", fontWeight: 300, margin: "0 0 14px" },
  ul: { fontSize: 14, lineHeight: 1.75, color: "#444", fontWeight: 300, paddingLeft: 20, margin: "0 0 14px" },
  date: { fontFamily: "'Source Code Pro',monospace", fontSize: 10, color: "#888", letterSpacing: "0.8px", marginBottom: 32 },
};

function PrivacyContent() {
  return (
    <>
      <div style={legalStyles.date}>Last updated · June 2026</div>
      <p style={legalStyles.p}>Tyxo is committed to protecting your personal data in accordance with the EU General Data Protection Regulation (GDPR) and applicable Swiss data protection law.</p>
      <h2 style={legalStyles.h2}>1. Who we are</h2>
      <p style={legalStyles.p}>Tyxo · Zurich, Switzerland · <a href="mailto:privacy@tyxo.ai" style={{ color: "#C0634A" }}>privacy@tyxo.ai</a></p>
      <h2 style={legalStyles.h2}>2. Data we collect</h2>
      <ul style={legalStyles.ul}>
        <li><strong>Contact / waitlist form</strong> — email address and any message you choose to include.</li>
        <li><strong>Usage data</strong> — standard server logs (IP, browser, pages, timestamps). Retained 30 days.</li>
        <li><strong>Cookies</strong> — essential cookies only. No advertising or tracking cookies.</li>
      </ul>
      <h2 style={legalStyles.h2}>3. Legal basis for processing</h2>
      <ul style={legalStyles.ul}>
        <li><strong>Consent</strong> (Art. 6(1)(a) GDPR) — when you submit the contact form.</li>
        <li><strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR) — server logs for security and reliability.</li>
      </ul>
      <h2 style={legalStyles.h2}>4. How we use your data</h2>
      <ul style={legalStyles.ul}>
        <li>To respond to your enquiry or add you to our early-access waitlist.</li>
        <li>To send product updates you have opted into (unsubscribe any time).</li>
        <li>To monitor and maintain site security.</li>
      </ul>
      <p style={legalStyles.p}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
      <h2 style={legalStyles.h2}>5. Data storage and security</h2>
      <p style={legalStyles.p}>All data is stored on EU-hosted infrastructure with appropriate technical and organisational safeguards.</p>
      <h2 style={legalStyles.h2}>6. Retention</h2>
      <p style={legalStyles.p}>Waitlist submissions are retained until you request deletion or until the relevant product launches. Server logs are deleted after 30 days.</p>
      <h2 style={legalStyles.h2}>7. Your rights</h2>
      <ul style={legalStyles.ul}>
        <li>Access, rectification, and erasure of your data.</li>
        <li>Restriction of or objection to processing.</li>
        <li>Data portability.</li>
        <li>Withdrawal of consent at any time.</li>
        <li>Lodge a complaint with your national supervisory authority.</li>
      </ul>
      <p style={legalStyles.p}>To exercise any right: <a href="mailto:privacy@tyxo.ai" style={{ color: "#C0634A" }}>privacy@tyxo.ai</a>. We respond within 30 days.</p>
      <h2 style={legalStyles.h2}>8. Third-party services</h2>
      <p style={legalStyles.p}>Our platform uses AltiCoreAI by <a href="https://www.evochip.ai" target="_blank" rel="noopener noreferrer" style={{ color: "#C0634A" }}>EvoChip.ai</a>. No personal data from this website is shared with EvoChip.ai.</p>
      <h2 style={legalStyles.h2}>9. Changes</h2>
      <p style={legalStyles.p}>Material changes will be communicated by updating the date above. Continued use of the site constitutes acceptance.</p>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <div style={legalStyles.date}>Last updated · June 2026</div>
      <p style={legalStyles.p}>Please read these Terms carefully. By accessing or using our services, you agree to be bound by them.</p>
      <h2 style={legalStyles.h2}>1. About Tyxo</h2>
      <p style={legalStyles.p}>Tyxo is an AI Research Assistant platform for scientists and researchers. Operated by Tyxo, Zurich, Switzerland.</p>
      <h2 style={legalStyles.h2}>2. Acceptance</h2>
      <p style={legalStyles.p}>By submitting the waitlist form or using the website you confirm you are 18 or older and accept these Terms. If acting on behalf of an organisation, you confirm authority to bind it.</p>
      <h2 style={legalStyles.h2}>3. Early access and waitlist</h2>
      <p style={legalStyles.p}>Submitting your email does not constitute a contract for services. Access is granted at our sole discretion.</p>
      <h2 style={legalStyles.h2}>4. Intellectual property</h2>
      <p style={legalStyles.p}>All site content is the property of Tyxo and protected by applicable IP laws. No reproduction without prior written consent.</p>
      <h2 style={legalStyles.h2}>5. Acceptable use</h2>
      <ul style={legalStyles.ul}>
        <li>Do not use the site for any unlawful purpose.</li>
        <li>Do not attempt unauthorised access to our systems.</li>
        <li>Do not reverse-engineer any part of the platform.</li>
        <li>Do not misrepresent your identity or affiliation.</li>
      </ul>
      <h2 style={legalStyles.h2}>6. Data and confidentiality</h2>
      <p style={legalStyles.p}>Data shared during the design-partner programme is treated as confidential under a mutually signed NDA. We do not use your research data to train our models. See our Privacy Policy for details.</p>
      <h2 style={legalStyles.h2}>7. Disclaimer of warranties</h2>
      <p style={legalStyles.p}>The website and services are provided "as is" without warranty of any kind. We do not warrant uninterrupted or error-free operation.</p>
      <h2 style={legalStyles.h2}>8. Limitation of liability</h2>
      <p style={legalStyles.p}>To the maximum extent permitted by law, Tyxo shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site.</p>
      <h2 style={legalStyles.h2}>9. Governing law</h2>
      <p style={legalStyles.p}>These Terms are governed by Swiss law. Disputes are subject to the exclusive jurisdiction of the courts of Zurich, Switzerland.</p>
      <h2 style={legalStyles.h2}>10. Contact</h2>
      <p style={legalStyles.p}><a href="mailto:legal@tyxo.ai" style={{ color: "#C0634A" }}>legal@tyxo.ai</a></p>
    </>
  );
}

function LegalModal({ type, onClose }) {
  if (!type) return null;
  const titles = { privacy: "Privacy Policy", terms: "Terms of Service", contact: "Get in touch" };
  const modalStyle = type === "contact"
    ? { ...legalStyles.modal, width: "auto", height: "auto", minWidth: 520 }
    : legalStyles.modal;
  return (
    <div style={legalStyles.overlay} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <div style={legalStyles.header}>
          <h2 style={legalStyles.title}>{titles[type]}</h2>
          <button style={legalStyles.close} onClick={onClose}>✕</button>
        </div>
        <div style={legalStyles.body}>
          {type === "privacy" && <PrivacyContent />}
          {type === "terms" && <TermsContent />}
          {type === "contact" && (
            <div style={{ maxWidth: 520 }}>
              <p style={{ ...legalStyles.p, marginBottom: 28 }}>
                Tell us about your dataset or research question and we'll be in touch.
              </p>
              <WaitlistForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { TyxoLogo, Kicker, StripedPlaceholder, WaitlistForm, LegalModal };
