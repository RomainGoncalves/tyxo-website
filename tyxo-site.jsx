// Tyxo — full landing-page composition.
// Built on V1's editorial Memo aesthetic, with three transplants:
//   · Hero background switched to linen (V3's hero ground)
//   · Trust-logo strip removed
//   · Manifesto block — lifted from V3
//   · Workflow block — V3's "Upload. Train. Classify. Cite." sienna full-bleed
//   · Use-cases grid — V2's "Built for any tabular classification"
//
// Section components are imported from v1-memo.jsx / v2-workbench.jsx / v3-manifesto.jsx
// (exposed on window) so this file stays a thin composition layer.

import {
  MemoNav,
  MemoProblem,
  MemoAltiCore,
  MemoUsers,
  MemoCompliance,
  MemoPricing,
  MemoCTA,
  MemoFooter,
  memoStyles,
} from "./v1-memo.jsx";
import { WBUseCases } from "./v2-workbench.jsx";
import { MFManifesto, MFWorkflow } from "./v3-manifesto.jsx";
import { Kicker } from "./shared.jsx";

// Modified hero — V1 layout, V3 linen ground.
function SiteHero() {
  return (
    <section
      style={{
        padding: "88px 64px 80px",
        background: "#F0EBE3",
        borderBottom: "1px solid rgba(26,26,26,0.10)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 540px",
          gap: 80,
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: "#C0634A",
                opacity: 0.6,
                display: "inline-block",
              }}
            />
            <Kicker>AI Research Assistant · for research</Kicker>
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces',Georgia,serif",
              fontSize: 80,
              lineHeight: 1.04,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              margin: 0,
              marginBottom: 28,
              textWrap: "pretty",
            }}
          >
            From labelled data
            <br />
            to a validated model —{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              in minutes,
              <br />
              not days.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 19,
              lineHeight: 1.55,
              color: "#1A1A1A",
              fontWeight: 300,
              margin: 0,
              marginBottom: 40,
              maxWidth: 600,
              opacity: 0.78,
            }}
          >
            Tyxo is a no-code AI Research Assistant platform for the half-million
            European researchers who collect labelled data every week and do not
            have a data scientist. Upload, train, classify — automated
            end-to-end, EU-hosted from day one, with an audit trail built for
            the AI Act.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 48 }}>
            <button
              style={{
                ...memoStyles.ctaSecondary,
                padding: "13px 22px",
                fontSize: 14,
              }}
            >
              Read the methodology
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 48,
              paddingTop: 28,
              borderTop: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            {[
              ["Hosted", "EU, GDPR-native"],
              ["Inference", "Compiled, deterministic"],
              ["Audit", "EU AI Act compliant"],
              ["Built for", "Tabular classification"],
            ].map((c, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                    color: "#888888",
                    marginBottom: 6,
                  }}
                >
                  {c[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 14,
                    color: "#1A1A1A",
                    fontWeight: 500,
                  }}
                >
                  {c[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right-hand "model card" */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E0E0E0",
            borderTop: "2px solid #C0634A",
            borderRadius: 8,
            padding: "28px 30px",
            fontFamily: "'Outfit',sans-serif",
            position: "relative",
            boxShadow: "0 24px 60px rgba(26,26,26,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 6,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#C0634A",
                  marginBottom: 8,
                }}
              >
                Model card · auto-generated
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                  lineHeight: 1.2,
                }}
              >
                Mineral phase
                <br />
                classification · v2
              </div>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 10,
                  color: "#888",
                  marginBottom: 18,
                }}
              >
                tyxo://models/geo-min-v2 · hash 9f3a…b21d
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: ".8px",
                textTransform: "uppercase",
                padding: "3px 9px",
                background: "#E8F5EE",
                color: "#1A6B3A",
                borderRadius: 4,
              }}
            >
              ✓ Deployed
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 24,
              paddingBottom: 20,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            {[
              ["Accuracy", "98.7%", "#C0634A"],
              ["Latency", "11 ms", "#3A6B9E"],
              ["Samples", "8 420", "#1A1A1A"],
              ["Classes", "12", "#1A1A1A"],
            ].map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 8.5,
                    fontWeight: 600,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#888",
                    marginBottom: 6,
                  }}
                >
                  {m[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Fraunces',serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: m[2],
                    letterSpacing: "-0.01em",
                  }}
                >
                  {m[1]}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 8.5,
                fontWeight: 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: 10,
              }}
            >
              Top features · importance
            </div>
            {[
              ["raman_512cm", 0.86],
              ["si_wt_pct", 0.71],
              ["xrd_2θ_27.4", 0.54],
              ["fe_oxide_ratio", 0.41],
              ["mg_ca_ratio", 0.32],
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "150px 1fr 36px",
                  gap: 10,
                  alignItems: "center",
                  marginBottom: 7,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 10.5,
                    color: "#444",
                  }}
                >
                  {r[0]}
                </div>
                <div
                  style={{
                    height: 7,
                    background: "#EEE",
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${r[1] * 100}%`,
                      background: "#C0634A",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 10,
                    color: "#666",
                    textAlign: "right",
                  }}
                >
                  {r[1].toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              paddingTop: 14,
              borderTop: "1px solid #E0E0E0",
              flexWrap: "wrap",
            }}
          >
            {[
              "Provenance logged",
              "Cross-validated 5-fold",
              "Reproducible",
              "AI Act audit trail",
            ].map((b, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  padding: "3px 8px",
                  background: "#F7F4F0",
                  color: "#444",
                  border: "1px solid #E0E0E0",
                  borderRadius: 4,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TyxoSite() {
  return (
    <div
      data-screen-label="Tyxo · Landing"
      style={{
        width: 1440,
        margin: "0 auto",
        background: "#FFFFFF",
        fontFamily: "'Outfit','Helvetica Neue',sans-serif",
        color: "#1A1A1A",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 0 0 1px rgba(26,26,26,0.04)",
      }}
    >
      <MemoNav />
      <SiteHero />
      <MFManifesto />
      <MemoProblem />
      <MFWorkflow />
      <MemoAltiCore />
      <WBUseCases />
      <MemoUsers />
      <MemoCompliance />
      <MemoPricing />
      <MemoCTA />
      <MemoFooter />
    </div>
  );
}

export default TyxoSite;
