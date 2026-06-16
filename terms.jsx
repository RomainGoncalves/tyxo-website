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

export default function TermsOfService() {
  return (
    <div style={{ background: "#F0EBE3", minHeight: "100vh" }}>
      <div style={s.page}>
        <div style={s.nav}>
          <TyxoLogo size={20} />
          <a href="/" style={s.back}>← Back to home</a>
        </div>

        <h1 style={s.h1}>Terms of Service</h1>
        <div style={s.date}>Last updated · June 2026</div>

        <p style={s.p}>
          Please read these Terms of Service ("Terms") carefully before using the
          Tyxo website and services. By accessing or using our services, you agree
          to be bound by these Terms.
        </p>

        <h2 style={s.h2}>1. About Tyxo</h2>
        <p style={s.p}>
          Tyxo is an AI Research Assistant platform that enables scientists and
          researchers to train, validate, and deploy machine learning classifiers
          on tabular data. The service is operated by Tyxo, Zurich, Switzerland.
        </p>

        <h2 style={s.h2}>2. Acceptance of Terms</h2>
        <p style={s.p}>
          By submitting a form, registering for early access, or otherwise using
          our website, you confirm that you are at least 18 years old and accept
          these Terms in full. If you are using the service on behalf of an
          organisation, you represent that you have the authority to bind that
          organisation to these Terms.
        </p>

        <h2 style={s.h2}>3. Early access and waitlist</h2>
        <p style={s.p}>
          Submission of your email address to the waitlist does not constitute a
          contract for services. Access to the Tyxo platform is granted at our
          sole discretion. We reserve the right to prioritise, defer, or decline
          any application.
        </p>

        <h2 style={s.h2}>4. Intellectual property</h2>
        <p style={s.p}>
          All content on this website — including text, graphics, logos, and
          software — is the property of Tyxo and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or create
          derivative works without our prior written consent.
        </p>

        <h2 style={s.h2}>5. Acceptable use</h2>
        <p style={s.p}>You agree not to:</p>
        <ul style={s.ul}>
          <li>Use the site for any unlawful purpose or in violation of applicable regulations.</li>
          <li>Attempt to gain unauthorised access to any part of our systems.</li>
          <li>Transmit any harmful, offensive, or disruptive content.</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the platform.</li>
          <li>Misrepresent your identity or affiliation.</li>
        </ul>

        <h2 style={s.h2}>6. Data and confidentiality</h2>
        <p style={s.p}>
          Any data you share with us during the design-partner programme is treated
          as confidential and processed under a mutually signed NDA. We do not use
          your research data to train our models or share it with third parties.
          See our <a href="#/privacy" style={{ color: "#C0634A" }}>Privacy Policy</a> for
          full details on personal data handling.
        </p>

        <h2 style={s.h2}>7. Disclaimer of warranties</h2>
        <p style={s.p}>
          The website and any associated services are provided "as is" without
          warranty of any kind, express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement. We do not warrant that the site will be uninterrupted,
          error-free, or free of harmful components.
        </p>

        <h2 style={s.h2}>8. Limitation of liability</h2>
        <p style={s.p}>
          To the maximum extent permitted by applicable law, Tyxo shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of, or inability to use, the website or
          services — even if we have been advised of the possibility of such
          damages.
        </p>

        <h2 style={s.h2}>9. Governing law</h2>
        <p style={s.p}>
          These Terms are governed by and construed in accordance with the laws of
          Switzerland, without regard to its conflict-of-law provisions. Any
          disputes shall be subject to the exclusive jurisdiction of the courts of
          Zurich, Switzerland.
        </p>

        <h2 style={s.h2}>10. Changes to these Terms</h2>
        <p style={s.p}>
          We reserve the right to update these Terms at any time. We will indicate
          the date of the latest revision above. Your continued use of the site
          after changes are posted constitutes acceptance of the updated Terms.
        </p>

        <h2 style={s.h2}>11. Contact</h2>
        <p style={s.p}>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:legal@tyxo.ai" style={{ color: "#C0634A" }}>legal@tyxo.ai</a>.
        </p>

        <hr style={s.divider} />
        <p style={s.footer}>
          © 2026 Tyxo · Zurich, CH ·{" "}
          <a href="#/privacy" style={{ color: "#888" }}>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
