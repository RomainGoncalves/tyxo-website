import { TyxoLogo, Kicker, WaitlistForm } from "./shared.jsx";

// V1 — "The Memo"
// Editorial document aesthetic. Paper-feeling, restrained, ample whitespace,
// generous Fraunces serif display, Sienna accents only where they earn it.
// Posture: a serious research instrument that happens to have a marketing page.

const memoStyles = {
  page: {
    width: 1440,
    background: "#FFFFFF",
    fontFamily: "'Outfit','Helvetica Neue',sans-serif",
    color: "#1A1A1A",
    overflow: "hidden",
    position: "relative",
  },
  // Top nav — hairline border, generous height
  nav: {
    height: 72,
    padding: "0 64px",
    borderBottom: "1px solid #E0E0E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FFFFFF",
  },
  navLinks: {
    display: "flex",
    gap: 36,
    fontFamily: "'Outfit',sans-serif",
    fontSize: 14,
    color: "#444444",
    fontWeight: 400,
  },
  navRight: { display: "flex", gap: 18, alignItems: "center" },
  signin: {
    fontFamily: "'Outfit',sans-serif",
    fontSize: 14,
    color: "#444",
    textDecoration: "none",
    fontWeight: 400,
  },
  ctaBtn: {
    background: "#C0634A",
    color: "#FFF",
    fontFamily: "'Outfit',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "10px 18px",
    borderRadius: 4,
    border: "none",
    letterSpacing: ".2px",
    cursor: "pointer",
  },
  ctaSecondary: {
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

function MemoNav() {
  return (
    <nav style={memoStyles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
        <TyxoLogo size={22} />
        <div style={memoStyles.navLinks}>
          <a href="#product" style={{ textDecoration: "none", color: "inherit" }}>Product</a>
          <a href="#for-researchers" style={{ textDecoration: "none", color: "inherit" }}>For researchers</a>
          <a href="#compliance" style={{ textDecoration: "none", color: "inherit" }}>Compliance</a>
          <a href="#pricing" style={{ textDecoration: "none", color: "inherit" }}>Pricing</a>

        </div>
      </div>
      <div style={memoStyles.navRight}>
      </div>
    </nav>
  );
}

function MemoHero() {
  return (
    <section
      id="product"
      style={{
        padding: "88px 64px 80px",
        borderBottom: "1px solid #E0E0E0",
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
            <Kicker>AI Research Assistant · for scientists</Kicker>
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
              in hours,
              <br />
              not quarters.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 19,
              lineHeight: 1.55,
              color: "#444444",
              fontWeight: 300,
              margin: 0,
              marginBottom: 40,
              maxWidth: 600,
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
              borderTop: "1px solid #E0E0E0",
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

        {/* Right-hand "model card" — quiet artefact, looks like a published result */}
        <div
          style={{
            background: "#F7F4F0",
            border: "1px solid #E0E0E0",
            borderTop: "2px solid #C0634A",
            borderRadius: 8,
            padding: "28px 30px",
            fontFamily: "'Outfit',sans-serif",
            position: "relative",
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
                Cancer subtype
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
                tyxo://models/onc-ssub-v2 · hash 9f3a…b21d
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
              ["Accuracy", "99.3%", "#C0634A"],
              ["Latency", "11 ms", "#3A6B9E"],
              ["Samples", "12 400", "#1A1A1A"],
              ["Classes", "7", "#1A1A1A"],
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

          {/* Mini confusion matrix */}
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
              ["expr_BRCA1", 0.86],
              ["expr_TP53", 0.71],
              ["methyl_promoter_3", 0.54],
              ["variant_count_chr17", 0.41],
              ["expr_ESR1", 0.32],
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
              "GDPR Art.9 masked",
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
                  background: "#FFFFFF",
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

function MemoTrust() {
  return (
    <section
      style={{
        padding: "40px 64px",
        borderBottom: "1px solid #E0E0E0",
        background: "#F7F4F0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        <Kicker color="#888">
          In design partnership with research groups at
        </Kicker>
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            fontFamily: "'Fraunces',serif",
            fontSize: 15,
            fontWeight: 500,
            color: "#888",
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

function MemoProblem() {
  const walls = [
    {
      num: "01",
      title: "Complexity",
      body: "SageMaker Canvas, DataRobot, Google AutoML — powerful platforms that surface dozens of ML decisions researchers do not have the vocabulary for. Feature selection strategy. Cross-validation folds. Hyperparameter grids. The workflow does not fail gracefully; it simply stops.",
    },
    {
      num: "02",
      title: "Compliance",
      body: "Most research touches data that someone, somewhere regulates — GDPR Article 9 for health or biometric work, export controls on materials, ethics review for animal studies, data-sovereignty clauses on field samples. Risk-averse procurement defaults to EU-hosted alternatives. Smaller US tools at academic price points routinely ship without a signed DPA.",
    },
    {
      num: "03",
      title: "Economics",
      body: "A research group running five million inference calls per month pays CHF 3,000–8,000 monthly on a neural runtime. Research budgets are structured for equipment and personnel — not elastic cloud billing. Compiled inference removes that line item entirely.",
    },
  ];
  return (
    <section
      style={{ padding: "104px 64px 96px", borderBottom: "1px solid #E0E0E0" }}
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
        <Kicker>§ 01 · The problem</Kicker>
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 54,
          lineHeight: 1.1,
          fontWeight: 400,
          color: "#1A1A1A",
          letterSpacing: "-0.02em",
          margin: 0,
          marginBottom: 24,
          maxWidth: 1000,
        }}
      >
        Three walls between a researcher
        <br />
        and their{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          predictions.
        </em>
      </h2>
      <p
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 17,
          lineHeight: 1.6,
          color: "#444",
          fontWeight: 300,
          maxWidth: 780,
          marginBottom: 56,
        }}
      >
        Researchers are not data scientists. They are geologists, materials
        scientists, ecologists, geneticists, epidemiologists, archaeologists,
        hydrologists, neuroscientists. They collect data, label it, and know
        exactly what classification question they are trying to answer. What
        they cannot do is build the model that answers it.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 0,
          borderTop: "2px solid #C0634A",
        }}
      >
        {walls.map((w, i) => (
          <div
            key={i}
            style={{
              padding: "32px 28px 32px",
              borderRight: i < 2 ? "1px solid #E0E0E0" : "none",
              background: i === 0 ? "#F7F4F0" : "#FFFFFF",
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
              <Kicker>Wall · {w.num}</Kicker>
              <span
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  color: "#888",
                  letterSpacing: "1px",
                }}
              >
                {i + 1}/3
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
                marginBottom: 14,
                lineHeight: 1.15,
              }}
            >
              {w.title}
            </h3>
            <p
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "#444",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {w.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MemoWorkflow() {
  const steps = [
    {
      n: "01",
      title: "Clean",
      what: "Reviews a plain-language summary, clicks approve.",
      tyxo: "Detects and masks GDPR Article 9 special categories before upload. Resolves missing values, class imbalance, encoding errors, outliers.",
      t: "~1 min",
    },
    {
      n: "02",
      title: "Upload",
      what: "Drags the anonymised file. No configuration.",
      tyxo: "Detects column types, candidate labels, feature set. No raw identifiable data ever leaves the institution.",
      t: "~30 sec",
    },
    {
      n: "03",
      title: "Train",
      what: "Waits. Typical wall-clock: 2–4 hours.",
      tyxo: "AltiCoreAI compiles and trains automatically. Selects optimal configuration. Returns accuracy, confusion matrix, feature importances in research-friendly language.",
      t: "2–4 hrs",
    },
    {
      n: "04",
      title: "Classify",
      what: "Uploads inference batch. Downloads predictions and audit PDF.",
      tyxo: "Runs inference. Generates EU AI Act audit trail. Exports model card with reproducibility hash.",
      t: "seconds",
    },
  ];
  return (
    <section
      style={{
        padding: "104px 64px 96px",
        borderBottom: "1px solid #E0E0E0",
        background: "#FFFFFF",
      }}
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
        <Kicker>§ 02 · The workflow</Kicker>
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
          marginBottom: 24,
          maxWidth: 1100,
        }}
      >
        Four steps. No ML decisions{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          ever
        </em>{" "}
        surfaced to the user.
      </h2>
      <p
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 17,
          lineHeight: 1.6,
          color: "#444",
          fontWeight: 300,
          maxWidth: 780,
          marginBottom: 56,
        }}
      >
        The user does not pick gradient boosting versus random forest. Does not
        see a hyperparameter grid. Does not configure cross-validation folds.
        Every existing platform exposes these decisions. We have removed them.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
          borderTop: "1px solid #E0E0E0",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "32px 26px 30px",
              borderRight: i < 3 ? "1px solid #E0E0E0" : "none",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 11,
                fontWeight: 600,
                color: "#C0634A",
                letterSpacing: "1px",
                marginBottom: 14,
              }}
            >
              STEP {s.n}
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#1A1A1A",
                marginBottom: 8,
                lineHeight: 1.15,
              }}
            >
              {s.title}
            </h3>
            <div
              style={{
                display: "inline-block",
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 10,
                fontWeight: 600,
                color: "#3A6B9E",
                background: "#E0EAF5",
                padding: "2px 8px",
                borderRadius: 4,
                marginBottom: 18,
              }}
            >
              {s.t}
            </div>
            <div style={{ marginBottom: 14 }}>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 8.5,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: 5,
                }}
              >
                The researcher
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "#444",
                }}
              >
                {s.what}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 8.5,
                  fontWeight: 600,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#C0634A",
                  marginBottom: 5,
                }}
              >
                Tyxo
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "#444",
                }}
              >
                {s.tyxo}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 48,
          background: "#F7F4F0",
          borderLeft: "3px solid #E8845C",
          padding: "24px 28px",
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: 32,
        }}
      >
        <Kicker color="#E8845C">What is not in the box</Kicker>
        <div
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 14.5,
            lineHeight: 1.65,
            color: "#444",
          }}
        >
          No model-selection UI. No infrastructure setup. No AWS account, no
          IAM, no S3 buckets, no compute quota negotiation with central IT. No
          "leads, churn, revenue" business vocabulary. No generative AI surface
          — classification only, by design. Generative output does not have a
          confusion matrix and cannot be cited in a methods section.
        </div>
      </div>
    </section>
  );
}

function MemoAltiCoreAI() {
  return (
    <section
      style={{
        padding: "112px 64px",
        borderBottom: "1px solid #E0E0E0",
        background: "#F7F4F0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
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
                background: "#C0634A",
                opacity: 0.6,
              }}
            />
            <Kicker>§ 03 · The engine</Kicker>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 48,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              margin: 0,
              marginBottom: 24,
            }}
          >
            Tyxo runs on{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              AltiCoreAI
            </em>
            .<br />A generational shift away from neural runtimes.
          </h2>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              color: "#444",
              fontWeight: 300,
              marginBottom: 18,
            }}
          >
            AltiCoreAI — EvoChip.ai's compiled inference engine — turns trained
            classifiers into deterministic logic. The same mathematical property
            that makes it dramatically faster also makes it auditable. One
            architectural decision; two of the hardest problems in regulated ML
            solved at once.
          </p>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              color: "#444",
              fontWeight: 300,
              marginBottom: 36,
            }}
          >
            We hold the EU research-vertical exclusivity. A US competitor cannot
            acquire EU compliance and AltiCoreAI-class economics by writing a
            cheque.
          </p>
          <div
            style={{
              fontFamily: "'Source Code Pro',monospace",
              fontSize: 11,
              fontWeight: 600,
              color: "#888",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              paddingTop: 18,
              borderTop: "1px solid #E0E0E0",
            }}
          >
            Independently benchmarked · SidePath · Q3 2025
          </div>
        </div>

        <div>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E0E0E0",
              borderTop: "2px solid #C0634A",
              borderRadius: 8,
              padding: "28px 30px",
              marginBottom: 20,
            }}
          >
            <Kicker>Benchmark · TensorFlow vs AltiCoreAI</Kicker>
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 84,
                fontWeight: 700,
                fontStyle: "italic",
                color: "#C0634A",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginTop: 18,
                marginBottom: 6,
              }}
            >
              13–41×
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 14,
                color: "#444",
                lineHeight: 1.5,
              }}
            >
              faster inference at equivalent classification accuracy. Across
              SidePath's open tabular benchmark suite.
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
              background: "#FFFFFF",
              border: "1px solid #E0E0E0",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{ padding: "22px 24px", borderRight: "1px solid #E0E0E0" }}
            >
              <Kicker color="#888" size={9}>
                Compute / 5M calls
              </Kicker>
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  marginTop: 10,
                  marginBottom: 4,
                }}
              >
                ≈ CHF 0
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 12,
                  color: "#666",
                  lineHeight: 1.55,
                }}
              >
                vs CHF 3,000–8,000 on a neural runtime
              </div>
            </div>
            <div style={{ padding: "22px 24px" }}>
              <Kicker color="#888" size={9}>
                Latency · p95
              </Kicker>
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  marginTop: 10,
                  marginBottom: 4,
                }}
              >
                11 ms
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 12,
                  color: "#666",
                  lineHeight: 1.55,
                }}
              >
                deterministic, single-threaded, on-prem viable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemoUsers() {
  const personas = [
    {
      who: "Materials scientist",
      what: "classifying alloy fatigue failure modes from microscopy",
      loc: "EMPA · Dübendorf",
    },
    {
      who: "Geologist",
      what: "identifying mineral phases from Raman + XRD spectra",
      loc: "GFZ · Potsdam",
    },
    {
      who: "Wildlife biologist",
      what: "tagging species in 200k camera-trap frames",
      loc: "CNRS · Montpellier",
    },
    {
      who: "Ecologist",
      what: "classifying acoustic species observations",
      loc: "WSL · Birmensdorf",
    },
    {
      who: "Geneticist",
      what: "predicting variant pathogenicity from sequencing reads",
      loc: "Helmholtz · Munich",
    },
    {
      who: "Oncologist",
      what: "scoring tumour subtypes from RNA-seq",
      loc: "CHUV · Lausanne",
    },
    {
      who: "Agronomist",
      what: "flagging crop-disease lesions from multispectral imagery",
      loc: "INRAE · Paris",
    },
  ];
  return (
    <section
      id="for-researchers"
      style={{ padding: "104px 64px 96px", borderBottom: "1px solid #E0E0E0" }}
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
        <Kicker>§ 04 · The user</Kicker>
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
          marginBottom: 24,
          maxWidth: 1100,
        }}
      >
        Defined by{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          situation
        </em>
        , not job title.
      </h2>
      <p
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 17,
          lineHeight: 1.6,
          color: "#444",
          fontWeight: 300,
          maxWidth: 820,
          marginBottom: 56,
        }}
      >
        Structured tabular data. Carefully labelled. A clear classification or
        prediction question. Beyond that, the discipline barely matters — the
        workflow is identical.
      </p>

      <div style={{ borderTop: "1px solid #E0E0E0" }}>
        {personas.map((p, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 240px 60px",
              gap: 32,
              padding: "28px 0",
              borderBottom: "1px solid #E0E0E0",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Fraunces',serif",
                fontSize: 22,
                fontWeight: 700,
                fontStyle: "italic",
                color: "#C0634A",
                letterSpacing: "-0.01em",
              }}
            >
              {p.who}
            </div>
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: 17,
                color: "#1A1A1A",
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {p.what}
            </div>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 11,
                color: "#888",
                letterSpacing: ".4px",
              }}
            >
              {p.loc}
            </div>
            <div
              style={{
                fontFamily: "'Source Code Pro',monospace",
                fontSize: 10,
                color: "#888",
                textAlign: "right",
              }}
            >
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MemoCompliance() {
  const items = [
    [
      "EU-hosted from day one",
      "Swiss & Frankfurt regions. No EU–US transfer surface area, regardless of DPF status.",
    ],
    [
      "GDPR Article 9 anonymisation",
      "Special-category detection and masking runs locally before any upload.",
    ],
    [
      "EU AI Act audit trail",
      "Every model exports a reproducibility hash, full feature provenance, confusion matrix, and methods card.",
    ],
    [
      "Compiled, deterministic inference",
      "Same input → same output. No probabilistic drift. Defensible in a regulated decision.",
    ],
    [
      "DPA signed by default",
      "Standard DPA shipped pre-signed at sign-up. No procurement back-and-forth.",
    ],
  ];
  return (
    <section
      id="compliance"
      style={{
        padding: "112px 64px",
        borderBottom: "1px solid #E0E0E0",
        background: "#0D2E2E",
        color: "#F0EBE3",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(240,235,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(240,235,227,.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
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
          <Kicker color="#E8845C">§ 05 · Compliance is a buying trigger</Kicker>
        </div>
        <h2
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: 54,
            lineHeight: 1.1,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#F0EBE3",
            margin: 0,
            marginBottom: 24,
            maxWidth: 1000,
          }}
        >
          The AI Act phases in through{" "}
          <em
            style={{ color: "#E8845C", fontWeight: 700, fontStyle: "italic" }}
          >
            2027
          </em>
          .<br />
          We were already shipping the documentation it requires.
        </h2>
        <p
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 17,
            lineHeight: 1.65,
            color: "#B8C8B8",
            fontWeight: 300,
            maxWidth: 820,
            marginBottom: 64,
          }}
        >
          Compliance is no longer a procurement footnote — for high-risk
          classifiers used in regulated research, from clinical diagnostics to
          environmental monitoring, it is the buying trigger. Tyxo outputs the
          audit trail by default. Every model. Every run.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 0,
            borderTop: "1px solid #2A4A4A",
          }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                padding: "26px 32px 26px 0",
                borderBottom:
                  i < items.length - 1 ? "1px solid #2A4A4A" : "none",
                borderRight: i % 2 === 0 ? "1px solid #2A4A4A" : "none",
                paddingLeft: i % 2 === 1 ? 32 : 0,
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "1.5px solid #E8845C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <span
                  style={{
                    color: "#E8845C",
                    fontFamily: "'Source Code Pro',monospace",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  ✓
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Fraunces',serif",
                    fontSize: 21,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#F0EBE3",
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}
                >
                  {it[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 14,
                    color: "#B8C8B8",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {it[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoPricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "96px 64px 80px",
        borderBottom: "1px solid #E0E0E0",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: 96,
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
                background: "#C0634A",
                opacity: 0.6,
              }}
            />
            <Kicker>§ 06 · Plans</Kicker>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 44,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              margin: 0,
              marginBottom: 20,
            }}
          >
            Priced for a{" "}
            <em
              style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}
            >
              grant line
            </em>
            , not a procurement RFP.
          </h2>
          <p
            style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "#444",
              fontWeight: 300,
              marginBottom: 18,
            }}
          >
            Verified academic and student tiers — no salesperson, no demo gate.
            Team and Enterprise tiers add seats, SSO, on-prem and shared DPA.
            Compute is included; there is no usage meter.
          </p>

        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 0,
            border: "1px solid #E0E0E0",
            borderTop: "2px solid #C0634A",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {[
            [
              "Student",
              "CHF 99",
              "/ month",
              "Verified academic email. 1 seat, full feature set.",
            ],
            [
              "Individual",
              "CHF 149",
              "/ month",
              "PI, postdoc, or independent researcher.",
            ],
            [
              "Team",
              "from CHF 120",
              "/ seat / mo",
              "5–25 seats. SSO, shared workspaces, DPA.",
            ],
            [
              "Enterprise",
              "Talk to us",
              "custom",
              "25+ seats, on-prem option, dedicated support.",
            ],
          ].map((p, i) => (
            <div
              key={i}
              style={{
                padding: "26px 22px",
                borderRight: i < 3 ? "1px solid #E0E0E0" : "none",
                background: i === 1 ? "#F7F4F0" : "#FFFFFF",
              }}
            >
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  color: "#C0634A",
                  marginBottom: 14,
                }}
              >
                {p[0]}
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "#1A1A1A",
                  lineHeight: 1.1,
                }}
              >
                {p[1]}
              </div>
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 10,
                  color: "#888",
                  marginTop: 4,
                  marginBottom: 18,
                }}
              >
                {p[2]}
              </div>
              <div
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "#444",
                  fontWeight: 300,
                }}
              >
                {p[3]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoCTA() {
  return (
    <section
      style={{
        padding: "120px 64px 96px",
        background: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 28,
        }}
      >
        <span
          style={{ width: 32, height: 1, background: "#C0634A", opacity: 0.6 }}
        />
        <Kicker>Open to design partners · Q3 2026</Kicker>
        <span
          style={{ width: 32, height: 1, background: "#C0634A", opacity: 0.6 }}
        />
      </div>
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 72,
          lineHeight: 1.05,
          fontWeight: 400,
          letterSpacing: "-0.025em",
          color: "#1A1A1A",
          margin: 0,
          marginBottom: 24,
          maxWidth: 1080,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Bring a labelled dataset.
        <br />
        Leave with a{" "}
        <em style={{ color: "#C0634A", fontWeight: 700, fontStyle: "italic" }}>
          publishable
        </em>{" "}
        model.
      </h2>
      <p
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 18,
          lineHeight: 1.55,
          color: "#444",
          fontWeight: 300,
          maxWidth: 640,
          margin: "0 auto 40px",
        }}
      >
        Five design-partner slots remain for 2026. We work directly with you on
        the first model, in your language, on your data — under NDA, EU-hosted,
        no commitment.
      </p>
      <WaitlistForm />
    </section>
  );
}

function MemoFooter() {
  return (
    <footer
      style={{
        padding: "56px 64px 40px",
        background: "#0D2E2E",
        color: "#B8C8B8",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: 40,
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
            }}
          >
            AI Research Assistant · for scientists
            <br />
            Tyxo · Zurich, CH
          </div>
        </div>
        <div style={{ display: "none" }}>
          {[
            [
              "Product",
              [
                "How it works",
                "For researchers",
                "For institutional labs",
                "AltiCoreAI engine",
                "Compliance",
              ],
            ],
            [
              "Resources",
              [
                "Methodology paper",
                "Case studies",
                "Model card spec",
                "EU AI Act guide",
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
              <div
                style={{
                  fontFamily: "'Source Code Pro',monospace",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  color: "#E8845C",
                  marginBottom: 14,
                }}
              >
                {col[0]}
              </div>
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
          ))}
        </div>
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

function MemoLanding() {
  return (
    <div style={memoStyles.page}>
      <MemoNav />
      <MemoHero />
      <MemoTrust />
      <MemoProblem />
      <MemoWorkflow />
      <MemoAltiCoreAI />
      <MemoUsers />
      <MemoCompliance />
      <MemoPricing />
      <MemoCTA />
      <MemoFooter />
    </div>
  );
}

export {
  MemoLanding,
  MemoNav,
  MemoHero,
  MemoTrust,
  MemoProblem,
  MemoWorkflow,
  MemoAltiCoreAI,
  MemoUsers,
  MemoCompliance,
  MemoPricing,
  MemoCTA,
  MemoFooter,
  memoStyles,
};
