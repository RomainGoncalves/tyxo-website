import { TyxoLogo, Kicker } from "./shared.jsx";

// V2 — "The Workbench"
// Product-forward. Deep teal dark hero with a "live-looking" product window.
// Posture: the AI software company that already ships product.

const wbStyles = {
  page: {
    width: 1440,
    background: "#FFFFFF",
    fontFamily: "'Outfit','Helvetica Neue',sans-serif",
    color: "#1A1A1A",
    overflow: "hidden",
  },
  nav: {
    height: 64,
    padding: "0 56px",
    background: "rgba(13,46,46,0.98)",
    borderBottom: "1px solid #1E3838",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#F0EBE3",
  },
  navLink: {
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    color: "#B8C8B8",
    fontWeight: 400,
    cursor: "pointer",
  },
  navLinkActive: {
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    color: "#F0EBE3",
    fontWeight: 600,
  },
  ctaPrimary: {
    background: "#C0634A",
    color: "#FFF",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "10px 18px",
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
  },
  ctaGhostDark: {
    background: "transparent",
    color: "#7AB0D4",
    border: "1px solid #7AB0D4",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "9px 18px",
    borderRadius: 4,
    cursor: "pointer",
  },
  ctaGhostLight: {
    background: "transparent",
    color: "#3A6B9E",
    border: "1px solid #3A6B9E",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "9px 18px",
    borderRadius: 4,
    cursor: "pointer",
  },
};

function WBNav() {
  return (
    <nav style={wbStyles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
        <TyxoLogo dark size={20} />
        <div style={{ display: "flex", gap: 28 }}>
          <span style={wbStyles.navLinkActive}>Platform</span>
          <span style={wbStyles.navLink}>Workflow</span>
          <span style={wbStyles.navLink}>AltiCore</span>
          <span style={wbStyles.navLink}>Compliance</span>
          <span style={wbStyles.navLink}>Pricing</span>
          <span style={wbStyles.navLink}>Docs</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ ...wbStyles.navLink, color: "#B8C8B8" }}>Sign in</span>
        <button style={wbStyles.ctaPrimary}>Start a project →</button>
      </div>
    </nav>
  );
}

// Mocked-up "live" Tyxo product window — sits in the hero on a dark teal canvas.
function WBProductWindow() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)",
        overflow: "hidden",
        fontFamily: "'Outfit',sans-serif",
        color: "#1A1A1A",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          height: 38,
          background: "#F7F4F0",
          borderBottom: "1px solid #E0E0E0",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: "#E26460",
          }}
        />
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: "#E2B33B",
          }}
        />
        <span
          style={{
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: "#56C152",
          }}
        />
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 10.5,
              color: "#888",
              background: "#FFFFFF",
              padding: "3px 12px",
              borderRadius: 4,
              border: "1px solid #E0E0E0",
              minWidth: 280,
              textAlign: "center",
              letterSpacing: ".2px",
            }}
          >
            tyxo.eu / workspace / oncology-21 / models / new
          </div>
        </div>
        <div style={{ width: 48 }} />
      </div>

      {/* App body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          minHeight: 540,
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            background: "#F7F4F0",
            borderRight: "1px solid #E0E0E0",
            padding: "20px 14px",
          }}
        >
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 8.5,
              fontWeight: 600,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 14,
              padding: "0 4px",
            }}
          >
            Workspace
          </div>
          {[
            ["◇", "Models", "12"],
            ["↥", "Datasets", "8"],
            ["◌", "Predictions", "347"],
            ["☷", "Audit trail", "—"],
            ["⚙", "Settings", "—"],
          ].map((it, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "18px 1fr auto",
                gap: 8,
                alignItems: "center",
                padding: "8px 8px",
                marginBottom: 2,
                borderRadius: 5,
                background: i === 0 ? "rgba(192,99,74,0.10)" : "transparent",
                color: i === 0 ? "#C0634A" : "#444",
                fontWeight: i === 0 ? 600 : 400,
                fontSize: 13,
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  color: i === 0 ? "#C0634A" : "#888",
                }}
              >
                {it[0]}
              </span>
              <span>{it[1]}</span>
              <span
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 10,
                  color: i === 0 ? "#C0634A" : "#888",
                }}
              >
                {it[2]}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: 24,
              padding: "12px 10px",
              background: "#0D2E2E",
              borderRadius: 6,
              color: "#F0EBE3",
            }}
          >
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#7AB0D4",
                marginBottom: 4,
              }}
            >
              Compute
            </div>
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#F0EBE3",
              }}
            >
              Unmetered
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#B8C8B8",
                marginTop: 2,
                fontWeight: 300,
              }}
            >
              AltiCore engine
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ padding: "22px 26px 26px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 20,
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
                  marginBottom: 6,
                }}
              >
                Model · onc-ssub-v2
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  color: "#1A1A1A",
                }}
              >
                Tumour-subtype classification
              </h3>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 12,
                  color: "#888",
                  marginTop: 4,
                }}
              >
                12 400 samples · 7 classes · cross-validated 5-fold
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 10.5,
                  fontWeight: 600,
                  padding: "3px 9px",
                  background: "#E8F5EE",
                  color: "#1A6B3A",
                  borderRadius: 4,
                }}
              >
                ✓ Deployed
              </span>
              <span
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 10.5,
                  fontWeight: 600,
                  padding: "3px 9px",
                  background: "#E0EAF5",
                  color: "#1A3A6A",
                  borderRadius: 4,
                }}
              >
                AI Act ✓
              </span>
            </div>
          </div>

          {/* Stepper */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 0,
              marginBottom: 18,
              borderTop: "1px solid #E0E0E0",
              borderBottom: "1px solid #E0E0E0",
              padding: "10px 0",
            }}
          >
            {[
              ["01", "Clean", "✓"],
              ["02", "Upload", "✓"],
              ["03", "Train", "✓"],
              ["04", "Classify", "▶"],
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  opacity: i < 3 ? 1 : 1,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: i < 3 ? "#C0634A" : "#FFFFFF",
                    border: i < 3 ? "none" : "1.5px solid #C0634A",
                    color: i < 3 ? "#FFF" : "#C0634A",
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 9.5,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s[2]}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 8.5,
                      color: "#888",
                      letterSpacing: "1.2px",
                    }}
                  >
                    {s[0]}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: i < 3 ? "#1A1A1A" : "#C0634A",
                    }}
                  >
                    {s[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Big metrics row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 0,
              marginBottom: 18,
              border: "1px solid #E0E0E0",
              borderTop: "2px solid #C0634A",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {[
              ["Accuracy", "99.3%", "#C0634A"],
              ["Latency · p95", "11 ms", "#1A1A1A"],
              ["F1 · macro", "0.978", "#1A1A1A"],
              ["ROC-AUC", "0.994", "#1A1A1A"],
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 16px",
                  borderRight: i < 3 ? "1px solid #E0E0E0" : "none",
                  background: i === 0 ? "#F4E0D5" : "#FFFFFF",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 8,
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
                    fontSize: 24,
                    fontWeight: 700,
                    color: m[2],
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {m[1]}
                </div>
              </div>
            ))}
          </div>

          {/* Two-column: confusion matrix + feature importance */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
          >
            {/* Confusion matrix */}
            <div
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "14px 16px",
                background: "#FFFFFF",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#C0634A",
                  }}
                >
                  Confusion matrix
                </div>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 9,
                    color: "#888",
                  }}
                >
                  n=12 400
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px repeat(7,1fr)",
                  gap: 2,
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 8.5,
                }}
              >
                <div></div>
                {["LumA", "LumB", "HER2", "BasL", "Norm", "Cl-A", "Cl-B"].map(
                  (c, i) => (
                    <div key={i} style={{ textAlign: "center", color: "#888" }}>
                      {c}
                    </div>
                  ),
                )}
                {Array.from({ length: 7 }).map((_, r) => (
                  <React.Fragment key={r}>
                    <div
                      style={{
                        color: "#888",
                        textAlign: "right",
                        paddingRight: 6,
                        paddingTop: 6,
                      }}
                    >
                      {
                        [
                          "LumA",
                          "LumB",
                          "HER2",
                          "BasL",
                          "Norm",
                          "Cl-A",
                          "Cl-B",
                        ][r]
                      }
                    </div>
                    {Array.from({ length: 7 }).map((_, c) => {
                      const isDiag = r === c;
                      const val = isDiag
                        ? 0.85 + Math.random() * 0.13
                        : Math.random() * 0.04;
                      return (
                        <div
                          key={c}
                          style={{
                            aspectRatio: "1 / 1",
                            background: `rgba(192,99,74,${val})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: val > 0.5 ? "#FFF" : "#888",
                            fontSize: val > 0.1 ? 8.5 : 0,
                            borderRadius: 2,
                          }}
                        >
                          {isDiag
                            ? Math.round(val * 100)
                            : val > 0.02
                              ? Math.round(val * 100)
                              : ""}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Feature importance */}
            <div
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: 8,
                padding: "14px 16px",
                background: "#FFFFFF",
              }}
            >
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#3A6B9E",
                  marginBottom: 12,
                }}
              >
                Feature importance
              </div>
              {[
                ["expr_BRCA1", 0.86],
                ["expr_TP53", 0.71],
                ["methyl_promoter_3", 0.54],
                ["variant_count_chr17", 0.41],
                ["expr_ESR1", 0.32],
                ["expr_HER2", 0.28],
                ["methyl_global", 0.21],
                ["variant_count_chr13", 0.14],
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "130px 1fr 32px",
                    gap: 8,
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 9.5,
                      color: "#444",
                    }}
                  >
                    {r[0]}
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "#F0EBE3",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${r[1] * 100}%`,
                        background: i < 3 ? "#C0634A" : "#3A8E82",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 9,
                      color: "#666",
                      textAlign: "right",
                    }}
                  >
                    {r[1].toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function WBHero() {
  return (
    <section
      style={{
        background: "#0D2E2E",
        color: "#F0EBE3",
        position: "relative",
        overflow: "hidden",
        padding: "72px 56px 96px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(240,235,227,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(240,235,227,.6) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }}
      />
      {/* Sienna gradient blob top-right */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(192,99,74,0.22) 0%, rgba(13,46,46,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 12px",
              border: "1px solid #2A4A4A",
              borderRadius: 99,
              marginBottom: 28,
              background: "rgba(232,132,92,0.08)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#E8845C",
                boxShadow: "0 0 8px #E8845C",
              }}
            />
            <Kicker color="#E8845C" size={9.5}>
              EU AI Act ready · GDPR-native · Live for design partners
            </Kicker>
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 72,
              lineHeight: 1.04,
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: "#F0EBE3",
              margin: 0,
              marginBottom: 28,
            }}
          >
            Train an audit-ready ML model on your own data —
            <em
              style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
            >
              {" "}
              without a data scientist.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 19,
              lineHeight: 1.55,
              color: "#B8C8B8",
              fontWeight: 300,
              margin: 0,
              marginBottom: 36,
              maxWidth: 560,
            }}
          >
            Tyxo turns labelled tabular data into a validated, explainable
            classifier in hours. Automated end-to-end. EU-hosted from day one.
            Inference compiled to deterministic logic by AltiCore — so it is
            fast, cheap, and defensible in a regulated decision.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 48 }}>
            <button
              style={{
                ...wbStyles.ctaPrimary,
                padding: "14px 24px",
                fontSize: 14,
              }}
            >
              Start a project — free →
            </button>
            <button
              style={{
                ...wbStyles.ctaGhostDark,
                padding: "13px 22px",
                fontSize: 14,
              }}
            >
              ▶ Watch 2-min demo
            </button>
          </div>

          {/* Inline product proof bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 0,
              paddingTop: 24,
              borderTop: "1px solid #2A4A4A",
            }}
          >
            {[
              ["13–41×", "faster than TensorFlow", "#E8845C"],
              ["~89%", "gross margin to you", "#F0EBE3"],
              ["≤ 4h", "upload → trained model", "#F0EBE3"],
            ].map((s, i) => (
              <div key={i} style={{ paddingRight: 24 }}>
                <div
                  style={{
                    fontFamily: "'Fraunces',serif",
                    fontSize: 34,
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: s[2],
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {s[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: "#B8C8B8",
                    marginTop: 6,
                    fontWeight: 300,
                  }}
                >
                  {s[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <WBProductWindow />
          {/* Floating "live" indicator */}
          <div
            style={{
              position: "absolute",
              top: -12,
              right: 18,
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              padding: "5px 10px",
              borderRadius: 99,
              background: "#1E3838",
              color: "#7AB0D4",
              border: "1px solid #2A4A4A",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#56C152",
              }}
            />
            Live workspace · oncology-21
          </div>
        </div>
      </div>
    </section>
  );
}

function WBLogosBar() {
  return (
    <section
      style={{
        padding: "28px 56px",
        background: "#0A2020",
        borderBottom: "1px solid #1E3838",
        color: "#6A8A8A",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <Kicker color="#6A8A8A" size={10}>
          In design partnership with
        </Kicker>
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            fontFamily: "'Fraunces',serif",
            fontSize: 15,
            fontWeight: 500,
            color: "#6A8A8A",
            letterSpacing: "-0.005em",
          }}
        >
          <span>CHUV · Lausanne</span>
          <span style={{ fontStyle: "italic" }}>Inserm · Paris</span>
          <span>Helmholtz · Munich</span>
          <span style={{ fontStyle: "italic" }}>Karolinska · Stockholm</span>
          <span>ETH · Zürich</span>
          <span style={{ fontStyle: "italic" }}>UMC · Utrecht</span>
        </div>
      </div>
    </section>
  );
}

function WBWorkflow() {
  const steps = [
    {
      n: "01",
      t: "Clean",
      dur: "~ 1 min",
      desc: "Plain-language summary of what was detected and masked. You click approve.",
      ui: (
        <div
          style={{
            padding: "14px 16px",
            background: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9,
              color: "#888",
              marginBottom: 8,
              letterSpacing: "1px",
            }}
          >
            SUMMARY · cohort_2026_q1.csv
          </div>
          {[
            ["12 400 rows · 87 cols", "#444"],
            ["7 GDPR Art. 9 columns masked", "#C0634A"],
            ["1 040 missing values · imputed", "#444"],
            ["Class imbalance · rebalanced 1:1.3", "#444"],
            ["No outliers requiring exclusion", "#3A8E82"],
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Outfit',sans-serif",
                fontSize: 12,
                color: r[1],
                marginBottom: 5,
              }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  border: `1.5px solid ${r[1]}`,
                  fontSize: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: r[1],
                }}
              >
                ✓
              </span>
              {r[0]}
            </div>
          ))}
        </div>
      ),
    },
    {
      n: "02",
      t: "Upload",
      dur: "~ 30 sec",
      desc: "Drag the file in. Tyxo detects column types, candidate labels, feature set. No raw identifiable data ever leaves the institution.",
      ui: (
        <div
          style={{
            padding: "14px 16px",
            background: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              border: "1.5px dashed #C0634A",
              borderRadius: 6,
              padding: "18px 12px",
              textAlign: "center",
              background: "#FDF3EE",
              marginBottom: 10,
            }}
          >
            <div style={{ fontSize: 24, color: "#C0634A", marginBottom: 4 }}>
              ↑
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 11.5,
                color: "#C0634A",
                fontWeight: 600,
              }}
            >
              cohort_2026_q1.csv
            </div>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 9,
                color: "#888",
                marginTop: 4,
              }}
            >
              4.2 MB · uploaded · validated
            </div>
          </div>
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9,
              color: "#888",
              letterSpacing: "1px",
              marginBottom: 6,
            }}
          >
            SCHEMA DETECTED
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 4,
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9.5,
              color: "#444",
            }}
          >
            <span>label: subtype</span>
            <span style={{ color: "#888" }}>7 classes</span>
            <span>features: 86</span>
            <span style={{ color: "#888" }}>numeric · 64</span>
          </div>
        </div>
      ),
    },
    {
      n: "03",
      t: "Train",
      dur: "2 – 4 hrs",
      desc: "AltiCore compiles, trains and selects the optimal configuration automatically. You wait. We surface the result in your vocabulary.",
      ui: (
        <div
          style={{
            padding: "14px 16px",
            background: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9,
              color: "#888",
              marginBottom: 8,
              letterSpacing: "1px",
            }}
          >
            TRAINING · 78%
          </div>
          <div
            style={{
              height: 8,
              background: "#F0EBE3",
              borderRadius: 4,
              overflow: "hidden",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                height: "100%",
                width: "78%",
                background: "linear-gradient(90deg,#C0634A,#E8845C)",
              }}
            />
          </div>
          {[
            ["fold 1 / 5", "#3A8E82", "done"],
            ["fold 2 / 5", "#3A8E82", "done"],
            ["fold 3 / 5", "#3A8E82", "done"],
            ["fold 4 / 5", "#C0634A", "training"],
            ["fold 5 / 5", "#888", "queued"],
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 10,
                color: r[1],
                marginBottom: 4,
                letterSpacing: ".3px",
              }}
            >
              <span>{r[0]}</span>
              <span style={{ textTransform: "uppercase", fontSize: 8.5 }}>
                {r[2]}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      n: "04",
      t: "Classify",
      dur: "seconds",
      desc: "Upload an inference batch. Download predictions plus a publishable audit PDF with a reproducibility hash.",
      ui: (
        <div
          style={{
            padding: "14px 16px",
            background: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 9,
              color: "#888",
              marginBottom: 8,
              letterSpacing: "1px",
            }}
          >
            OUTPUT · 2 file(s)
          </div>
          {[
            ["predictions_2026_q1.csv", "4 812 rows", "#C0634A"],
            [
              "audit_onc-ssub-v2.pdf",
              "model card · reproducibility",
              "#3A6B9E",
            ],
          ].map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr 20px",
                gap: 8,
                alignItems: "center",
                padding: "10px 8px",
                marginBottom: 6,
                background: "#F7F4F0",
                borderRadius: 4,
                borderLeft: `2px solid ${r[2]}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 10,
                  color: r[2],
                }}
              >
                ↓
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 10,
                    color: "#1A1A1A",
                  }}
                >
                  {r[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 10,
                    color: "#888",
                  }}
                >
                  {r[1]}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}
          >
            {["GDPR Art.9", "AI Act", "SHA b21d"].map((b, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 9.5,
                  fontWeight: 600,
                  padding: "2px 7px",
                  background: "#E8F5EE",
                  color: "#1A6B3A",
                  borderRadius: 3,
                }}
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      style={{ padding: "112px 56px 96px", borderBottom: "1px solid #E0E0E0" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "flex-end",
          marginBottom: 56,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: "#C0634A",
                opacity: 0.6,
              }}
            />
            <Kicker>How it works</Kicker>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 54,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              margin: 0,
            }}
          >
            Four steps.
            <br />
            No ML decisions{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              ever
            </em>
            <br />
            surfaced to the user.
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 17,
            lineHeight: 1.65,
            color: "#444",
            fontWeight: 300,
            margin: 0,
          }}
        >
          The user does not pick gradient boosting versus random forest. Does
          not see a hyperparameter grid. Does not configure cross-validation
          folds. Every existing platform exposes these decisions. We have
          removed them — and replaced them with research-friendly outputs and a
          built-in audit trail.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 18,
        }}
      >
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#F7F4F0",
              border: "1px solid #E0E0E0",
              borderTop: "2px solid #C0634A",
              borderRadius: 8,
              padding: "24px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 16,
              }}
            >
              <div>
                <Kicker>Step {s.n}</Kicker>
                <h3
                  style={{
                    fontFamily: "'Fraunces',serif",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#1A1A1A",
                    margin: "6px 0 0",
                    lineHeight: 1.1,
                  }}
                >
                  {s.t}
                </h3>
              </div>
              <span
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9.5,
                  fontWeight: 600,
                  color: "#3A6B9E",
                  background: "#E0EAF5",
                  padding: "2px 8px",
                  borderRadius: 3,
                }}
              >
                {s.dur}
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 13,
                lineHeight: 1.6,
                color: "#444",
                fontWeight: 300,
                marginBottom: 18,
              }}
            >
              {s.desc}
            </p>
            {s.ui}
          </div>
        ))}
      </div>
    </section>
  );
}

function WBAltiCore() {
  return (
    <section
      style={{
        padding: "112px 56px 96px",
        background: "#0D2E2E",
        color: "#F0EBE3",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #1E3838",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(240,235,227,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(240,235,227,.6) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "480px 1fr",
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
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: "#E8845C",
                opacity: 0.7,
              }}
            />
            <Kicker color="#E8845C">The engine · AltiCore</Kicker>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 48,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#F0EBE3",
              margin: 0,
              marginBottom: 24,
            }}
          >
            Compiled inference, not{" "}
            <em
              style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
            >
              another
            </em>{" "}
            neural runtime.
          </h2>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: "#B8C8B8",
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            Tyxo runs on AltiCore — EvoChip.ai's compiled inference engine.
            Trained classifiers become deterministic logic. The same
            mathematical property that makes it 13–41× faster than TensorFlow
            also makes it auditable. One architectural decision; two of the
            hardest problems in regulated ML solved at once.
          </p>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: "#B8C8B8",
              fontWeight: 300,
              marginBottom: 32,
            }}
          >
            We hold the EU research-vertical exclusivity. A US competitor cannot
            acquire EU compliance and AltiCore-class economics by writing a
            cheque.
          </p>
          <button
            style={{
              ...wbStyles.ctaGhostDark,
              padding: "13px 22px",
              fontSize: 14,
            }}
          >
            Read the AltiCore brief →
          </button>
        </div>

        <div>
          {/* Latency chart */}
          <div
            style={{
              background: "#1E3838",
              border: "1px solid #2A4A4A",
              borderTop: "2px solid #E8845C",
              borderRadius: 8,
              padding: "22px 26px",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 18,
              }}
            >
              <div>
                <Kicker color="#E8845C" size={10}>
                  Latency · 50-class tabular benchmark
                </Kicker>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 11,
                    color: "#6A8A8A",
                    marginTop: 4,
                  }}
                >
                  SidePath open suite · Q3 2025 · lower is better
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  color: "#6A8A8A",
                  letterSpacing: ".8px",
                }}
              >
                p95 · ms
              </div>
            </div>
            {[
              ["TensorFlow 2.x", "#7AB0D4", 95, 460],
              ["PyTorch 2.3", "#7AB0D4", 88, 420],
              ["XGBoost", "#B8C8D8", 38, 180],
              ["AltiCore (Tyxo)", "#E8845C", 2.4, 11, true],
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "130px 1fr 60px",
                  gap: 14,
                  alignItems: "center",
                  marginBottom: 11,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: r[4] ? "#F0EBE3" : "#B8C8B8",
                    fontWeight: r[4] ? 600 : 400,
                  }}
                >
                  {r[0]}
                </div>
                <div
                  style={{
                    height: 14,
                    background: "#0A2020",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${r[2]}%`,
                      background: r[1],
                      borderRadius: 1,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 11,
                    color: r[4] ? "#E8845C" : "#B8C8B8",
                    textAlign: "right",
                    fontWeight: r[4] ? 600 : 400,
                  }}
                >
                  {r[3]} ms
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 18,
                padding: "10px 14px",
                background: "#0A2020",
                borderLeft: "3px solid #E8845C",
                borderRadius: "0 4px 4px 0",
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 11,
                color: "#E8845C",
              }}
            >
              13–41× faster · @ equivalent accuracy on 11/12 datasets
            </div>
          </div>

          {/* Triple proof grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 0,
              background: "#1E3838",
              border: "1px solid #2A4A4A",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {[
              [
                "Deterministic",
                "same input → same output. Reproducible by law.",
              ],
              [
                "On-prem viable",
                "single-threaded, no GPU. Runs in a hospital DMZ.",
              ],
              [
                "Cost at scale",
                "≈ CHF 0 / 5M calls. No usage meter to forecast.",
              ],
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  borderRight: i < 2 ? "1px solid #2A4A4A" : "none",
                }}
              >
                <Kicker color="#7AB0D4" size={9}>
                  {c[0]}
                </Kicker>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: "#B8C8B8",
                    marginTop: 8,
                    lineHeight: 1.55,
                    fontWeight: 300,
                  }}
                >
                  {c[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WBUseCases() {
  const cases = [
    {
      tag: "Materials",
      title: "Alloy fatigue failure-mode classifier",
      sample: "9.4k micrographs · 5 classes",
      acc: "97.8%",
      who: "EMPA · Dübendorf",
    },
    {
      tag: "Geology",
      title: "Mineral phase from Raman + XRD",
      sample: "8.4k samples · 12 classes",
      acc: "98.7%",
      who: "GFZ · Potsdam",
    },
    {
      tag: "Wildlife",
      title: "Camera-trap species identifier",
      sample: "212k frames · 47 species",
      acc: "95.4%",
      who: "CNRS · Montpellier",
    },
    {
      tag: "Ecology",
      title: "Acoustic species classifier",
      sample: "22k clips · 38 classes",
      acc: "96.2%",
      who: "WSL · Birmensdorf",
    },
    {
      tag: "Genetics",
      title: "Variant pathogenicity scorer",
      sample: "31k variants · binary",
      acc: "98.0%",
      who: "Helmholtz · Munich",
    },
    {
      tag: "Oncology",
      title: "Tumour-subtype classification",
      sample: "12.4k samples · 7 classes",
      acc: "99.3%",
      who: "CHUV · Lausanne",
    },
  ];
  return (
    <section
      style={{ padding: "112px 56px 96px", borderBottom: "1px solid #E0E0E0" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <span
          style={{ width: 32, height: 1, background: "#C0634A", opacity: 0.6 }}
        />
        <Kicker>Built for any tabular classification</Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 54,
          lineHeight: 1.08,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "#1A1A1A",
          margin: 0,
          marginBottom: 48,
          maxWidth: 1100,
        }}
      >
        Six disciplines. Same{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          four-step
        </em>{" "}
        workflow.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 18,
        }}
      >
        {cases.map((c, i) => {
          const accentColors = ["#C0634A", "#3A6B9E", "#3A8E82"];
          const accent = accentColors[i % 3];
          return (
            <div
              key={i}
              style={{
                border: "1px solid #E0E0E0",
                borderTop: `2px solid ${accent}`,
                borderRadius: 8,
                padding: "24px 24px",
                background: "#FFFFFF",
              }}
            >
              <Kicker color={accent}>{c.tag}</Kicker>
              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#1A1A1A",
                  margin: "10px 0 14px",
                  lineHeight: 1.2,
                }}
              >
                {c.title}
              </h3>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 11,
                  color: "#666",
                  marginBottom: 18,
                }}
              >
                {c.sample}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  paddingTop: 14,
                  borderTop: "1px solid #E0E0E0",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 8.5,
                      fontWeight: 600,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      color: "#888",
                      marginBottom: 4,
                    }}
                  >
                    Accuracy
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: accent,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.acc}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 10,
                    color: "#888",
                    textAlign: "right",
                  }}
                >
                  {c.who}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WBCompliance() {
  const rows = [
    [
      "Hosting",
      "EU only · Switzerland + Frankfurt regions",
      "—",
      "No transfer to US, regardless of DPF status.",
    ],
    [
      "Data residency",
      "Customer-tenant isolation, encryption-at-rest",
      "SOC 2 II",
      "In progress · target Q4 2026",
    ],
    [
      "GDPR Article 9",
      "Local anonymisation of special categories before upload",
      "—",
      "PII never leaves the institution.",
    ],
    [
      "DPA",
      "Pre-signed at sign-up · standard EU template",
      "—",
      "No procurement back-and-forth.",
    ],
    [
      "EU AI Act",
      "Audit trail, methods card, reproducibility hash on every model",
      "High-risk",
      "Pre-cleared in design-partner deployments.",
    ],
    [
      "Inference",
      "Compiled, deterministic logic via AltiCore",
      "—",
      "Same input → same output. Defensible in a regulated decision.",
    ],
  ];
  return (
    <section
      style={{
        padding: "112px 56px 96px",
        background: "#F7F4F0",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "flex-end",
          marginBottom: 48,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                width: 32,
                height: 1,
                background: "#C0634A",
                opacity: 0.6,
              }}
            />
            <Kicker>Compliance · the buying trigger</Kicker>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 54,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              margin: 0,
            }}
          >
            Built for EU procurement on{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              day one.
            </em>
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 17,
            lineHeight: 1.65,
            color: "#444",
            fontWeight: 300,
          }}
        >
          The EU AI Act's high-risk classifier provisions phase in through 2027.
          Risk-averse procurement teams in Germany, France and the Netherlands
          already default to EU-hosted vendors regardless of DPF status. Tyxo
          was designed for that procurement reality from the first commit.
        </p>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E0E0E0",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "150px 1fr 110px 1fr",
            background: "#C0634A",
            color: "#FFF",
            padding: "10px 18px",
            fontFamily: "'Outfit',sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".4px",
          }}
        >
          <span>Surface</span>
          <span>What Tyxo does</span>
          <span>Standard</span>
          <span>Status</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr 110px 1fr",
              padding: "14px 18px",
              background: i % 2 === 0 ? "#FFFFFF" : "#F7F4F0",
              borderTop: "1px solid #E0E0E0",
              alignItems: "flex-start",
              fontFamily: "'Outfit',sans-serif",
              fontSize: 13.5,
              color: "#444",
            }}
          >
            <span style={{ fontWeight: 600, color: "#C0634A" }}>{r[0]}</span>
            <span>{r[1]}</span>
            <span
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 11,
                color: "#3A6B9E",
              }}
            >
              {r[2]}
            </span>
            <span style={{ color: "#444", fontWeight: 300 }}>{r[3]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WBPricing() {
  const tiers = [
    {
      name: "Student",
      price: "CHF 99",
      sub: "/ month · verified",
      features: [
        "1 seat",
        "Up to 3 active models",
        "Community support",
        "Academic citation tools",
        "EU-hosted",
      ],
      cta: "Verify academic email",
      accent: "#3A6B9E",
    },
    {
      name: "Individual",
      price: "CHF 149",
      sub: "/ month",
      features: [
        "1 seat",
        "Unlimited models",
        "Full audit trail exports",
        "Email support",
        "EU-hosted",
      ],
      cta: "Start a project",
      accent: "#C0634A",
      highlight: true,
    },
    {
      name: "Team",
      price: "from CHF 120",
      sub: "/ seat / mo",
      features: [
        "5–25 seats",
        "Shared workspaces & SSO",
        "Pre-signed DPA",
        "Priority support",
        "EU + on-prem option",
      ],
      cta: "Talk to sales",
      accent: "#3A6B9E",
    },
    {
      name: "Enterprise",
      price: "Custom",
      sub: "25+ seats",
      features: [
        "Custom seats",
        "Dedicated infrastructure",
        "Custom audit templates",
        "Named CS lead",
        "On-prem or hybrid",
      ],
      cta: "Talk to sales",
      accent: "#0D2E2E",
    },
  ];
  return (
    <section
      style={{ padding: "112px 56px 96px", borderBottom: "1px solid #E0E0E0" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <span
          style={{ width: 32, height: 1, background: "#C0634A", opacity: 0.6 }}
        />
        <Kicker>Pricing</Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 54,
          lineHeight: 1.08,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: "#1A1A1A",
          margin: 0,
          marginBottom: 14,
        }}
      >
        Priced for a grant line —{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          not
        </em>{" "}
        a procurement RFP.
      </h2>
      <p
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 17,
          lineHeight: 1.65,
          color: "#444",
          fontWeight: 300,
          maxWidth: 700,
          marginBottom: 48,
        }}
      >
        Compute is included on every tier. There is no usage meter, no inference
        bill, no quota negotiation.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 18,
        }}
      >
        {tiers.map((t, i) => (
          <div
            key={i}
            style={{
              background: t.highlight ? "#0D2E2E" : "#FFFFFF",
              color: t.highlight ? "#F0EBE3" : "#1A1A1A",
              border: t.highlight ? "1px solid #0D2E2E" : "1px solid #E0E0E0",
              borderTop: `3px solid ${t.accent}`,
              borderRadius: 8,
              padding: "28px 24px",
              position: "relative",
            }}
          >
            {t.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: 24,
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  background: "#C0634A",
                  color: "#FFF",
                  borderRadius: 99,
                }}
              >
                Most popular
              </div>
            )}
            <Kicker color={t.accent}>{t.name}</Kicker>
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 38,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: t.highlight ? "#F0EBE3" : "#1A1A1A",
                marginTop: 14,
                lineHeight: 1,
              }}
            >
              {t.price}
            </div>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 10,
                color: t.highlight ? "#B8C8B8" : "#888",
                marginTop: 6,
                marginBottom: 22,
              }}
            >
              {t.sub}
            </div>
            <div
              style={{
                marginBottom: 22,
                paddingTop: 22,
                borderTop: `1px solid ${t.highlight ? "#1E3838" : "#E0E0E0"}`,
              }}
            >
              {t.features.map((f, j) => (
                <div
                  key={j}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "18px 1fr",
                    gap: 8,
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: t.highlight ? "#B8C8B8" : "#444",
                    marginBottom: 7,
                    fontWeight: 300,
                  }}
                >
                  <span style={{ color: t.accent }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit',sans-serif",
                fontSize: 13,
                fontWeight: 600,
                background: t.highlight ? "#C0634A" : "transparent",
                color: t.highlight ? "#FFF" : t.accent,
                borderColor: t.highlight ? "transparent" : t.accent,
                borderStyle: "solid",
                borderWidth: t.highlight ? 0 : 1,
              }}
            >
              {t.cta} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function WBCTA() {
  return (
    <section
      style={{
        padding: "120px 56px",
        background: "#0D2E2E",
        color: "#F0EBE3",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(240,235,227,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(240,235,227,.6) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: "#E8845C",
              opacity: 0.7,
            }}
          />
          <Kicker color="#E8845C">
            Five design-partner slots remain · 2026
          </Kicker>
          <span
            style={{
              width: 32,
              height: 1,
              background: "#E8845C",
              opacity: 0.7,
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 400,
            letterSpacing: "-0.025em",
            color: "#F0EBE3",
            margin: 0,
            marginBottom: 24,
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Bring a labelled dataset.
          <br />
          Leave with a{" "}
          <em
            style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
          >
            publishable
          </em>{" "}
          model.
        </h2>
        <p
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 18,
            lineHeight: 1.55,
            color: "#B8C8B8",
            fontWeight: 300,
            maxWidth: 640,
            margin: "0 auto 40px",
          }}
        >
          We work directly with you on the first model — in your language, on
          your data — under NDA, EU-hosted, no commitment beyond an introductory
          call.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button
            style={{
              ...wbStyles.ctaPrimary,
              padding: "15px 28px",
              fontSize: 14,
            }}
          >
            Apply as design partner →
          </button>
          <button
            style={{
              ...wbStyles.ctaGhostDark,
              padding: "14px 26px",
              fontSize: 14,
            }}
          >
            Book 20-min call
          </button>
        </div>
      </div>
    </section>
  );
}

function WBFooter() {
  return (
    <footer
      style={{
        padding: "56px 56px 40px",
        background: "#0A2020",
        color: "#B8C8B8",
        borderTop: "1px solid #1E3838",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
          gap: 32,
          marginBottom: 48,
        }}
      >
        <div>
          <TyxoLogo dark size={20} />
          <div
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 12,
              color: "#6A8A8A",
              marginTop: 14,
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: 240,
            }}
          >
            AI Research Assistant · Research
            <br />
            Tyxo · Zurich, CH
          </div>
          <div
            style={{ marginTop: 18, display: "flex", gap: 6, flexWrap: "wrap" }}
          >
            {["GDPR", "AI Act", "SOC 2 (Q4)", "ISO 27001 (Q1 27)"].map(
              (b, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "2px 8px",
                    background: "#1E3838",
                    color: "#7AB0D4",
                    borderRadius: 3,
                    border: "1px solid #2A4A4A",
                  }}
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </div>
        {[
          [
            "Product",
            ["Platform", "Workflow", "AltiCore", "Compliance", "Pricing"],
          ],
          [
            "Resources",
            [
              "Docs",
              "Methodology",
              "Case studies",
              "Model card spec",
              "Changelog",
            ],
          ],
          ["Company", ["About", "Careers", "Press", "Security", "Partners"]],
          ["Legal", ["Privacy", "DPA", "Terms", "GDPR", "Imprint"]],
        ].map((col, i) => (
          <div key={i}>
            <Kicker color="#E8845C" size={9}>
              {col[0]}
            </Kicker>
            <div style={{ marginTop: 12 }}>
              {col[1].map((l, j) => (
                <div
                  key={j}
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 13,
                    color: "#B8C8B8",
                    marginBottom: 8,
                    fontWeight: 300,
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          paddingTop: 24,
          borderTop: "1px solid #1E3838",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'Source Code Pro',monospace",
          fontSize: 10,
          color: "#6A8A8A",
          letterSpacing: "1px",
        }}
      >
        <span>© 2026 Tyxo · v1.0</span>
        <span>EU-hosted · GDPR · AI Act ready</span>
      </div>
    </footer>
  );
}

function WorkbenchLanding() {
  return (
    <div style={wbStyles.page}>
      <WBNav />
      <WBHero />
      <WBLogosBar />
      <WBWorkflow />
      <WBAltiCore />
      <WBUseCases />
      <WBCompliance />
      <WBPricing />
      <WBCTA />
      <WBFooter />
    </div>
  );
}

export {
  WorkbenchLanding,
  WBNav,
  WBHero,
  WBLogosBar,
  WBWorkflow,
  WBAltiCore,
  WBUseCases,
  WBCompliance,
  WBPricing,
  WBCTA,
  WBFooter,
};
