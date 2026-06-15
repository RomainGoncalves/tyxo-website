import { TyxoLogo, Kicker } from "./shared.jsx";

// V3 — "The Manifesto"
// Bold, confident, asymmetric editorial. Big display Fraunces italics, alternating
// sienna and deep-teal full-bleed blocks, marquee of use-cases, declarative tenets.
// Posture: a Tyxo with a point of view — the AI software company that picked a side.

const mfStyles = {
  page: {
    width: 1440,
    background: "#F0EBE3",
    fontFamily: "'Outfit','Helvetica Neue',sans-serif",
    color: "#1A1A1A",
    overflow: "hidden",
  },
  nav: {
    height: 72,
    padding: "0 56px",
    background: "#F0EBE3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ctaPrimary: {
    background: "#1A1A1A",
    color: "#F0EBE3",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "12px 22px",
    borderRadius: 99,
    border: "none",
    cursor: "pointer",
  },
  ctaGhost: {
    background: "transparent",
    color: "#1A1A1A",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 500,
    padding: "10px 14px",
    borderRadius: 99,
    border: "none",
    cursor: "pointer",
  },
};

function MFNav() {
  return (
    <nav style={mfStyles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: 52 }}>
        <TyxoLogo size={22} />
        <div
          style={{
            display: "flex",
            gap: 32,
            fontFamily: "'Outfit',sans-serif",
            fontSize: 13.5,
            color: "#1A1A1A",
            fontWeight: 400,
          }}
        >
          <span>What it does</span>
          <span>Who it's for</span>
          <span>Manifesto</span>
          <span>Compliance</span>
          <span>Pricing</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      </div>
    </nav>
  );
}

function MFHero() {
  return (
    <section
      style={{
        padding: "40px 56px 96px",
        background: "#F0EBE3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big tag in the corner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 48,
        }}
      >
        <Kicker>
          Volume 01 · Tyxo · An AI software company · From Switzerland · Anno
          2026
        </Kicker>
        <Kicker color="#888">→ A field manual for European research</Kicker>
      </div>

      {/* Huge editorial headline */}
      <h1
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 172,
          lineHeight: 0.93,
          fontWeight: 400,
          letterSpacing: "-0.04em",
          color: "#1A1A1A",
          margin: 0,
          marginBottom: 32,
          textWrap: "balance",
        }}
      >
        AI Research Assistant,
        <br />
        finally{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          built for
          <br />
          the scientist
        </em>
        .
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 80,
          alignItems: "flex-end",
          marginTop: 24,
        }}
      >
        <p
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 26,
            lineHeight: 1.45,
            fontWeight: 400,
            color: "#1A1A1A",
            margin: 0,
            maxWidth: 720,
            textWrap: "pretty",
          }}
        >
          For the half-million European researchers who collect labelled data
          every week, carry a clear prediction question,{" "}
          <em
            style={{ color: "#C0634A", fontStyle: "italic", fontWeight: 700 }}
          >
            and do not have a data scientist.
          </em>{" "}
          Upload, train, classify — in hours, EU-hosted, with an AI Act audit
          trail in the box.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            <button
              style={{
                background: "#FFFFFF",
                color: "#1A1A1A",
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                fontWeight: 600,
                padding: "15px 26px",
                borderRadius: 99,
                border: "1px solid #1A1A1A",
                cursor: "pointer",
              }}
            >
              Read the manifesto ↓
            </button>
          </div>
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 11,
              color: "#888",
              letterSpacing: ".5px",
            }}
          >
            5 design-partner slots remain · 2026
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee of disciplines — display-type rolling band
function MFMarquee() {
  const items = [
    "Oncology",
    "Epidemiology",
    "Genetics",
    "Ecology",
    "Neuroscience",
    "Immunology",
    "Clinical biology",
    "Rare disease triage",
    "Drug discovery",
    "Public health",
    "Environmental modelling",
    "Microbiology",
  ];
  return (
    <section
      style={{
        padding: "24px 0",
        background: "#1A1A1A",
        color: "#F0EBE3",
        overflow: "hidden",
        borderTop: "1px solid #1A1A1A",
        borderBottom: "1px solid #1A1A1A",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          fontFamily: "'Fraunces',serif",
          fontSize: 38,
          fontWeight: 400,
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
        }}
      >
        {items.concat(items).map((it, i) => (
          <span
            key={i}
            style={{ display: "inline-flex", alignItems: "center", gap: 48 }}
          >
            <span
              style={
                i % 2 === 0
                  ? { fontStyle: "italic", color: "#E8845C", fontWeight: 700 }
                  : { color: "#F0EBE3" }
              }
            >
              {it}
            </span>
            <span style={{ color: "#3A8E82", fontSize: 24 }}>◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function MFManifesto() {
  const tenets = [
    {
      n: "I",
      t: "The user is the researcher, not the data scientist they do not have.",
      b: "Every existing platform — DataRobot, SageMaker Canvas, Akkio — was sold to enterprise data teams. The vocabulary is leads, churn, revenue. None of it fits a geologist with 8,000 labelled spectra, or an ecologist with a season of acoustic recordings, who needs a model on Friday.",
    },
    {
      n: "II",
      t: "No ML decisions are surfaced to the user. Ever.",
      b: "We removed the model picker. The hyperparameter grid. The cross-validation folds. They are decisions the platform should make. The researcher chooses the question; we ship the answer with its confusion matrix.",
    },
    {
      n: "III",
      t: "EU-hosted from day one. Compliance is not a retrofit.",
      b: "GDPR Article 9, the AI Act audit trail, the pre-signed DPA — these are not features added in year three after an enterprise sale. They are how the system is shaped from commit zero.",
    },
    {
      n: "IV",
      t: "Inference is compiled, not predicted.",
      b: "Tyxo runs on AltiCore: a generational shift away from probabilistic neural runtimes toward compiled, deterministic logic. Same input → same output. Auditable by construction. 13–41× faster than TensorFlow. The same architectural decision solves cost and explainability at once.",
    },
    {
      n: "V",
      t: "No generative AI. Not here. Not now.",
      b: "Generative output does not have a confusion matrix. Cannot be cross-validated. Cannot be cited in a Methods section. The research user does not want it for this job. We will not pretend otherwise.",
    },
  ];
  return (
    <section style={{ padding: "120px 56px 96px", background: "#F0EBE3" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "400px 1fr",
          gap: 80,
          marginBottom: 64,
        }}
      >
        <div>
          <Kicker>The Tyxo manifesto</Kicker>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 80,
              lineHeight: 0.98,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
              margin: "24px 0 0",
            }}
          >
            Five{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              opinions
            </em>
            <br />
            that shape
            <br />
            the product.
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 22,
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#1A1A1A",
            margin: 0,
            alignSelf: "flex-end",
            maxWidth: 680,
          }}
        >
          Most ML platforms are neutral utilities — every decision is a slider,
          every option a feature. Tyxo is not. We made the hard calls so the
          researcher does not have to. These are the five we will defend in
          writing.
        </p>
      </div>

      <div>
        {tenets.map((t, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 1fr",
              gap: 40,
              padding: "40px 0",
              borderTop: "2px solid #1A1A1A",
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 80,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#C0634A",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                paddingTop: 6,
              }}
            >
              {t.n}
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 38,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#1A1A1A",
                margin: 0,
                lineHeight: 1.1,
                textWrap: "pretty",
              }}
            >
              {t.t}
            </h3>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#444",
                fontWeight: 300,
                margin: 0,
                alignSelf: "center",
              }}
            >
              {t.b}
            </p>
          </div>
        ))}
        <div style={{ borderTop: "2px solid #1A1A1A" }} />
      </div>
    </section>
  );
}

function MFWorkflow() {
  return (
    <section
      style={{
        padding: "120px 56px 0",
        background: "#C0634A",
        color: "#F0EBE3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 64,
            alignItems: "flex-end",
          }}
        >
          <div>
            <Kicker color="#F0EBE3" size={11}>
              § The workflow · Four steps
            </Kicker>
            <h2
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 96,
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.035em",
                color: "#F0EBE3",
                margin: "24px 0 0",
              }}
            >
              Upload.
              <br />
              Train.
              <br />
              Classify.
              <br />
              <em
                style={{
                  color: "#0D2E2E",
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                Cite.
              </em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 24,
              lineHeight: 1.45,
              fontWeight: 400,
              color: "#F0EBE3",
              margin: 0,
              maxWidth: 600,
              alignSelf: "flex-end",
              paddingBottom: 8,
            }}
          >
            One workflow. No detours. No optional menus. The user defines the
            question; Tyxo produces the answer and the audit trail you can put
            in front of a regulator, a referee, or a thesis committee.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 0,
            borderTop: "2px solid #F0EBE3",
          }}
        >
          {[
            [
              "01",
              "Clean",
              "Plain-language summary of detection + masking. GDPR Article 9 categories handled locally. You click approve.",
              "~ 1 min",
            ],
            [
              "02",
              "Upload",
              "Drag the anonymised file. Schema, label, feature set detected automatically.",
              "~ 30 sec",
            ],
            [
              "03",
              "Train",
              "AltiCore compiles, trains and selects the optimal configuration. No hyperparameter grid to tune.",
              "2 – 4 hrs",
            ],
            [
              "04",
              "Classify",
              "Predictions + audit PDF + reproducibility hash. Ready to cite in a Methods section.",
              "seconds",
            ],
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "40px 28px 56px",
                borderRight: i < 3 ? "2px solid #F0EBE3" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 84,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#0D2E2E",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  marginBottom: 18,
                }}
              >
                {s[0]}
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#F0EBE3",
                  margin: 0,
                  marginBottom: 12,
                  lineHeight: 1.05,
                }}
              >
                {s[1]}
              </h3>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  color: "#0D2E2E",
                  marginBottom: 14,
                  display: "inline-block",
                  background: "#F0EBE3",
                  padding: "3px 10px",
                  borderRadius: 99,
                }}
              >
                {s[3]}
              </div>
              <p
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#F0EBE3",
                  fontWeight: 300,
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                {s[2]}
              </p>
            </div>
          ))}
        </div>

        <div style={{ padding: "40px 0", textAlign: "center" }}>
          <Kicker color="#F0EBE3" size={11}>
            And nothing else.
          </Kicker>
        </div>
      </div>
    </section>
  );
}

function MFAltiCore() {
  return (
    <section
      style={{
        padding: "120px 56px",
        background: "#0D2E2E",
        color: "#F0EBE3",
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
          backgroundSize: "72px 72px",
        }}
      />

      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 32,
          }}
        >
          <Kicker color="#E8845C">§ The engine</Kicker>
          <Kicker color="#7AB0D4" size={10}>
            Independently benchmarked · SidePath · Q3 2025
          </Kicker>
        </div>

        <h2
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 140,
            lineHeight: 0.92,
            fontWeight: 400,
            letterSpacing: "-0.04em",
            color: "#F0EBE3",
            margin: 0,
            marginBottom: 8,
          }}
        >
          <em
            style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
          >
            13–41×
          </em>
          <span
            style={{
              fontSize: 60,
              fontWeight: 400,
              color: "#F0EBE3",
              marginLeft: 24,
              letterSpacing: "-0.02em",
            }}
          >
            faster.
          </span>
        </h2>
        <h3
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 56,
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: "-0.03em",
            color: "#F0EBE3",
            margin: "12px 0 0",
          }}
        >
          And the same property that makes it fast
          <br />
          makes it{" "}
          <em
            style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
          >
            auditable.
          </em>
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 480px",
            gap: 80,
            marginTop: 64,
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 22,
              lineHeight: 1.5,
              fontWeight: 400,
              color: "#B8C8B8",
              margin: 0,
            }}
          >
            Tyxo runs on{" "}
            <strong style={{ color: "#F0EBE3", fontWeight: 700 }}>
              AltiCore
            </strong>{" "}
            — EvoChip.ai's compiled inference engine. Trained classifiers become
            deterministic logic. Independently benchmarked at 13–41× faster than
            TensorFlow on tabular workloads. The mathematical property that
            delivers that speed — determinism — is the same property a regulator
            requires for explainability.
            <br />
            <br />
            One architectural decision. Two of the hardest problems in regulated
            ML solved at the same time.
            <br />
            <br />
            <em style={{ color: "#E8845C", fontStyle: "italic" }}>
              We hold the EU research-vertical exclusivity.
            </em>{" "}
            A US competitor cannot acquire EU compliance and AltiCore-class
            economics by writing a cheque.
          </p>

          <div>
            <div
              style={{
                background: "#1E3838",
                border: "1px solid #2A4A4A",
                borderRadius: 8,
                padding: "24px 26px",
                marginBottom: 14,
              }}
            >
              <Kicker color="#7AB0D4" size={9}>
                Compute · 5M classifications / month
              </Kicker>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginTop: 18,
                  paddingTop: 18,
                  borderTop: "1px solid #2A4A4A",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 11,
                      color: "#6A8A8A",
                      marginBottom: 6,
                      fontWeight: 500,
                    }}
                  >
                    Neural runtime
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#B8C8B8",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    CHF 3–8k
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 10,
                      color: "#6A8A8A",
                      marginTop: 4,
                    }}
                  >
                    per month, scales linearly
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: 11,
                      color: "#E8845C",
                      marginBottom: 6,
                      fontWeight: 600,
                    }}
                  >
                    AltiCore (Tyxo)
                  </div>
                  <div
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#E8845C",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      fontStyle: "italic",
                    }}
                  >
                    ≈ CHF 0
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Code Pro',monospace",
                      fontSize: 10,
                      color: "#6A8A8A",
                      marginTop: 4,
                    }}
                  >
                    flat, regardless of scale
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#1E3838",
                border: "1px solid #2A4A4A",
                borderRadius: 8,
                padding: "22px 26px",
              }}
            >
              <Kicker color="#7AB0D4" size={9}>
                Latency · p95 · 50-class benchmark
              </Kicker>
              <div style={{ marginTop: 14 }}>
                {[
                  ["TensorFlow 2.x", "460 ms", 100, "#7AB0D4"],
                  ["PyTorch 2.3", "420 ms", 91, "#7AB0D4"],
                  ["XGBoost", "180 ms", 39, "#B8C8D8"],
                  ["AltiCore", "11 ms", 2.4, "#E8845C", true],
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "110px 1fr 60px",
                      gap: 10,
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontSize: 12,
                        color: r[4] ? "#F0EBE3" : "#B8C8B8",
                        fontWeight: r[4] ? 600 : 400,
                      }}
                    >
                      {r[0]}
                    </div>
                    <div
                      style={{
                        height: 10,
                        background: "#0A2020",
                        borderRadius: 1,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${r[2]}%`,
                          background: r[3],
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Source Code Pro',monospace",
                        fontSize: 10,
                        color: r[4] ? "#E8845C" : "#B8C8B8",
                        textAlign: "right",
                        fontWeight: r[4] ? 600 : 400,
                      }}
                    >
                      {r[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MFAudience() {
  const personas = [
    {
      who: "The oncologist",
      what: "scoring tumour subtypes from RNA-seq",
      detail: "12 400 samples · 7 classes · 99.3% accuracy",
      accent: "#C0634A",
    },
    {
      who: "The epidemiologist",
      what: "predicting ICU admission from cohort intake",
      detail: "8 200 samples · binary · 97.1% accuracy",
      accent: "#3A6B9E",
    },
    {
      who: "The lab director",
      what: "building rare-disease triage flags",
      detail: "4 600 panels · 14 conditions · 94.8% accuracy",
      accent: "#3A8E82",
    },
    {
      who: "The ecologist",
      what: "classifying acoustic species observations",
      detail: "22 000 clips · 38 species · 96.2% accuracy",
      accent: "#C0634A",
    },
    {
      who: "The geneticist",
      what: "predicting variant pathogenicity from sequencing",
      detail: "31 000 variants · binary · 98.0% accuracy",
      accent: "#3A6B9E",
    },
    {
      who: "The PhD student",
      what: "classifying anything with a label column",
      detail: "Verified academic tier · CHF 99 / mo",
      accent: "#3A8E82",
    },
  ];
  return (
    <section style={{ padding: "120px 56px 96px", background: "#F0EBE3" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 24,
        }}
      >
        <Kicker>§ Who Tyxo is for</Kicker>
        <Kicker color="#888" size={10}>
          Six examples · the workflow is the same
        </Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 88,
          lineHeight: 0.96,
          fontWeight: 400,
          letterSpacing: "-0.035em",
          color: "#1A1A1A",
          margin: 0,
          marginBottom: 64,
          maxWidth: 1200,
        }}
      >
        Defined by{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          situation
        </em>
        ,<br />
        not by job title.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 0,
          borderTop: "2px solid #1A1A1A",
        }}
      >
        {personas.map((p, i) => (
          <div
            key={i}
            style={{
              padding: "40px 36px 40px",
              borderRight: i % 2 === 0 ? "1px solid #1A1A1A" : "none",
              borderBottom: i < 4 ? "1px solid #1A1A1A" : "none",
              position: "relative",
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
              <Kicker color={p.accent}>
                0{i + 1} · {p.detail.split("·")[0].trim()}
              </Kicker>
              <span
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 10,
                  color: "#888",
                }}
              >
                {("0" + (i + 1)).slice(-2)} / 06
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 44,
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "#1A1A1A",
                margin: 0,
                marginBottom: 8,
              }}
            >
              <em
                style={{
                  color: p.accent,
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                {p.who}
              </em>
              <span
                style={{
                  display: "block",
                  color: "#1A1A1A",
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {p.what}.
              </span>
            </h3>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 11,
                color: "#666",
                marginTop: 10,
                letterSpacing: ".3px",
              }}
            >
              {p.detail}
            </div>
          </div>
        ))}
        <div style={{ gridColumn: "1 / -1", borderTop: "2px solid #1A1A1A" }} />
      </div>
    </section>
  );
}

function MFInvestor() {
  return (
    <section
      style={{
        padding: "96px 56px 96px",
        background: "#1A1A1A",
        color: "#F0EBE3",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 24,
        }}
      >
        <Kicker color="#E8845C">§ The opportunity</Kicker>
        <Kicker color="#6A8A8A" size={10}>
          For the careful reader · Investor &amp; analyst summary
        </Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 72,
          lineHeight: 1,
          fontWeight: 400,
          letterSpacing: "-0.03em",
          color: "#F0EBE3",
          margin: 0,
          marginBottom: 64,
          maxWidth: 1100,
        }}
      >
        A captive market.
        <br />
        A structural moat.
        <br />
        And a{" "}
        <em style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}>
          1% capture
        </em>
        <br />
        that gets us to Series A.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
          borderTop: "1px solid #2A4A4A",
          borderBottom: "1px solid #2A4A4A",
        }}
      >
        {[
          [
            "598 000",
            "qualifying researchers",
            "EU27 + UK · academic + clinical",
            "#F0EBE3",
          ],
          [
            "CHF 520M",
            "total addressable",
            "full Tyxo-equivalent adoption at current pricing",
            "#F0EBE3",
          ],
          [
            "CHF 5.4M",
            "Y3 ARR plan",
            "2 102 accounts · 1.0% TAM penetration",
            "#E8845C",
          ],
          [
            "~89%",
            "gross margin",
            "AltiCore eliminates inference COGS",
            "#E8845C",
          ],
        ].map((c, i) => (
          <div
            key={i}
            style={{
              padding: "40px 32px 36px",
              borderRight: i < 3 ? "1px solid #2A4A4A" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 56,
                fontWeight: 700,
                fontStyle: "italic",
                color: c[3],
                letterSpacing: "-0.025em",
                lineHeight: 0.95,
                marginBottom: 14,
              }}
            >
              {c[0]}
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 15,
                color: "#F0EBE3",
                marginBottom: 6,
                fontWeight: 600,
              }}
            >
              {c[1]}
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 12.5,
                color: "#B8C8B8",
                lineHeight: 1.55,
                fontWeight: 300,
              }}
            >
              {c[2]}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          marginTop: 56,
        }}
      >
        <p
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 20,
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#B8C8B8",
            margin: 0,
          }}
        >
          EU research data — health, genetic, biometric — falls under GDPR
          Article 9. The EU–US Data Privacy Framework is live but legally
          contested. German and French procurement defaults to EU-hosted
          alternatives. For the regulated subset, US tools are not{" "}
          <em>worse</em>; they are{" "}
          <em style={{ color: "#E8845C", fontStyle: "italic" }}>
            structurally unavailable
          </em>
          .
        </p>
        <p
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 20,
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#B8C8B8",
            margin: 0,
          }}
        >
          Tyxo is not asking researchers to switch. For the GDPR-regulated
          subset, the question is what they can use at all. We are the only
          fully-automated, GDPR-native option on the market — and we hold a
          sector-exclusive contract with the only inference engine that makes
          the unit economics work.
        </p>
      </div>

      <div style={{ marginTop: 48, display: "flex", gap: 14 }}>
        <button
          style={{
            ...mfStyles.ctaPrimary,
            background: "#C0634A",
            padding: "15px 26px",
            fontSize: 14,
          }}
        >
          Read the full memo →
        </button>
        <button
          style={{
            background: "transparent",
            color: "#F0EBE3",
            fontFamily: "'Outfit',sans-serif",
            fontSize: 14,
            fontWeight: 600,
            padding: "14px 24px",
            borderRadius: 99,
            border: "1px solid #2A4A4A",
            cursor: "pointer",
          }}
        >
          Email the founders
        </button>
      </div>
    </section>
  );
}

function MFClosing() {
  return (
    <section
      style={{
        padding: "140px 56px 120px",
        background: "#F0EBE3",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Kicker>End of volume 01</Kicker>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 128,
          lineHeight: 0.96,
          fontWeight: 400,
          letterSpacing: "-0.04em",
          color: "#1A1A1A",
          margin: "28px auto 32px",
          maxWidth: 1200,
        }}
      >
        Bring a labelled dataset.
        <br />
        Leave with a{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          publishable
        </em>
        <br />
        model.
      </h2>
      <p
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 24,
          lineHeight: 1.45,
          fontWeight: 400,
          color: "#444",
          maxWidth: 760,
          margin: "0 auto 48px",
        }}
      >
        Five design-partner slots remain for 2026. We work on your data, in your
        language, EU-hosted, under NDA. No commitment beyond a 20-minute call.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
        <button
          style={{ ...mfStyles.ctaPrimary, padding: "18px 32px", fontSize: 15 }}
        >
          Apply as design partner →
        </button>
        <button
          style={{
            background: "transparent",
            color: "#1A1A1A",
            fontFamily: "'Outfit',sans-serif",
            fontSize: 15,
            fontWeight: 600,
            padding: "17px 30px",
            borderRadius: 99,
            border: "1px solid #1A1A1A",
            cursor: "pointer",
          }}
        >
          Book 20-min call
        </button>
      </div>
    </section>
  );
}

function MFFooter() {
  return (
    <footer
      style={{
        padding: "48px 56px 40px",
        background: "#0D2E2E",
        color: "#B8C8B8",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
          gap: 32,
          marginBottom: 40,
        }}
      >
        <div>
          <TyxoLogo dark size={20} />
          <div
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 13,
              color: "#B8C8B8",
              marginTop: 14,
              lineHeight: 1.6,
              fontStyle: "italic",
              maxWidth: 260,
            }}
          >
            "AI Research Assistant, finally built for the scientist."
          </div>
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 10,
              color: "#6A8A8A",
              marginTop: 18,
              letterSpacing: ".6px",
            }}
          >
            Tyxo · Zurich, CH · Anno 2026
          </div>
        </div>
        {[
          [
            "Product",
            [
              "How it works",
              "For researchers",
              "Manifesto",
              "AltiCore engine",
              "Compliance",
            ],
          ],
          [
            "Resources",
            [
              "Methodology",
              "Case studies",
              "Model card spec",
              "AI Act guide",
              "Changelog",
            ],
          ],
          [
            "Company",
            ["About", "Press", "Careers", "Partnerships", "Security"],
          ],
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
          borderTop: "1px solid #2A4A4A",
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

function ManifestoLanding() {
  return (
    <div style={mfStyles.page}>
      <MFNav />
      <MFHero />
      <MFMarquee />
      <MFManifesto />
      <MFWorkflow />
      <MFAltiCore />
      <MFAudience />
      <MFInvestor />
      <MFClosing />
      <MFFooter />
    </div>
  );
}

export {
  ManifestoLanding,
  MFNav,
  MFHero,
  MFMarquee,
  MFManifesto,
  MFWorkflow,
  MFAltiCore,
  MFAudience,
  MFInvestor,
  MFClosing,
  MFFooter,
};
