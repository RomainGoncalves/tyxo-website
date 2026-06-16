import { TyxoLogo } from "./shared.jsx";

const s = {
  page: {
    width: "100%",
    maxWidth: 760,
    margin: "0 auto",
    padding: "64px 32px 120px",
    fontFamily: "'Outfit', sans-serif",
    color: "#1A1A1A",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 64,
  },
  back: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 13,
    color: "#888",
    textDecoration: "none",
  },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: "-0.02em",
    color: "#1A1A1A",
    margin: "0 0 8px",
  },
  date: {
    fontFamily: "'Source Code Pro', monospace",
    fontSize: 11,
    color: "#888",
    letterSpacing: "0.8px",
    marginBottom: 56,
  },
  h2: {
    fontFamily: "'Fraunces', serif",
    fontSize: 22,
    fontWeight: 400,
    color: "#1A1A1A",
    margin: "48px 0 12px",
  },
  p: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#444",
    fontWeight: 300,
    margin: "0 0 16px",
  },
  ul: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#444",
    fontWeight: 300,
    paddingLeft: 20,
    margin: "0 0 16px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #E0E0E0",
    margin: "56px 0 0",
  },
  footer: {
    fontSize: 12,
    color: "#888",
    marginTop: 24,
    fontWeight: 300,
  },
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#F0EBE3", minHeight: "100vh" }}>
      <div style={s.page}>
        <div style={s.nav}>
          <TyxoLogo size={20} />
          <a href="/" style={s.back}>← Back to home</a>
        </div>

        <h1 style={s.h1}>Privacy Policy</h1>
        <div style={s.date}>Last updated · June 2026</div>

        <p style={s.p}>
          Tyxo ("we", "us", "our") is committed to protecting your personal data
          in accordance with the EU General Data Protection Regulation (GDPR) and
          applicable Swiss data protection law. This policy explains what data we
          collect, why, and your rights over it.
        </p>

        <h2 style={s.h2}>1. Who we are</h2>
        <p style={s.p}>
          Tyxo<br />
          Zurich, Switzerland<br />
          Contact: <a href="mailto:privacy@tyxo.ai" style={{ color: "#C0634A" }}>privacy@tyxo.ai</a>
        </p>

        <h2 style={s.h2}>2. Data we collect</h2>
        <p style={s.p}>We collect data in the following circumstances:</p>
        <ul style={s.ul}>
          <li><strong>Contact / waitlist form</strong> — email address and any message you choose to include.</li>
          <li><strong>Usage data</strong> — standard server logs (IP address, browser type, pages visited, timestamps). Retained for up to 30 days.</li>
          <li><strong>Cookies</strong> — we use only essential cookies required for site functionality. No advertising or tracking cookies.</li>
        </ul>

        <h2 style={s.h2}>3. Legal basis for processing</h2>
        <ul style={s.ul}>
          <li><strong>Consent</strong> (Art. 6(1)(a) GDPR) — when you submit the contact form.</li>
          <li><strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR) — for server logs used to maintain site security and reliability.</li>
        </ul>

        <h2 style={s.h2}>4. How we use your data</h2>
        <ul style={s.ul}>
          <li>To respond to your enquiry or add you to our early-access waitlist.</li>
          <li>To send you product updates you have opted into (you may unsubscribe at any time).</li>
          <li>To monitor and maintain site security.</li>
        </ul>
        <p style={s.p}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

        <h2 style={s.h2}>5. Data storage and security</h2>
        <p style={s.p}>
          All data is stored on EU-hosted infrastructure. We apply appropriate technical
          and organisational measures to protect your data against unauthorised access,
          loss, or disclosure.
        </p>

        <h2 style={s.h2}>6. Retention</h2>
        <p style={s.p}>
          Waitlist submissions are retained until you request deletion or until the
          relevant product is launched, whichever comes first. Server logs are
          deleted after 30 days.
        </p>

        <h2 style={s.h2}>7. Your rights</h2>
        <p style={s.p}>Under GDPR you have the right to:</p>
        <ul style={s.ul}>
          <li>Access the personal data we hold about you.</li>
          <li>Rectify inaccurate data.</li>
          <li>Request erasure ("right to be forgotten").</li>
          <li>Restrict or object to processing.</li>
          <li>Data portability.</li>
          <li>Withdraw consent at any time (without affecting prior processing).</li>
          <li>Lodge a complaint with your national supervisory authority.</li>
        </ul>
        <p style={s.p}>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:privacy@tyxo.ai" style={{ color: "#C0634A" }}>privacy@tyxo.ai</a>.
          We will respond within 30 days.
        </p>

        <h2 style={s.h2}>8. Third-party services</h2>
        <p style={s.p}>
          Our platform uses AltiCoreAI, a compiled inference engine by{" "}
          <a href="https://www.evochip.ai" target="_blank" rel="noopener noreferrer" style={{ color: "#C0634A" }}>EvoChip.ai</a>.
          No personal data from this website is shared with EvoChip.ai.
        </p>

        <h2 style={s.h2}>9. Changes to this policy</h2>
        <p style={s.p}>
          We may update this policy from time to time. Material changes will be
          communicated by updating the "Last updated" date above. Continued use
          of the site constitutes acceptance of the revised policy.
        </p>

        <hr style={s.divider} />
        <p style={s.footer}>
          © 2026 Tyxo · Zurich, CH ·{" "}
          <a href="#/terms" style={{ color: "#888" }}>Terms of Service</a>
        </p>
      </div>
    </div>
  );
}
