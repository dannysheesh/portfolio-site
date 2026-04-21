export default function About() {
  const stats: Array<[string, string]> = [
    ["$30–50M", "PIPELINE SUPPORTED"],
    ["3+ YRS", "ENTERPRISE PRE-SALES"],
    ["11", "LLM PROVIDERS WIRED"],
  ];

  return (
    <section className="sec capy-container" id="about">
      <div className="eyebrow">ABOUT.TXT</div>
      <h2>WHO&apos;S AT THE KEYBOARD?</h2>
      <p className="lede">A capybara&apos;s calm + an engineer&apos;s throughput.</p>

      <div className="win">
        <div className="win-title">
          README.md
          <div className="win-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className="win-body"
          style={{ padding: "22px 26px", background: "var(--paper)" }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>
            <strong
              style={{
                fontFamily: "var(--font-silkscreen), monospace",
                fontSize: 14,
              }}
            >
              I TURN AMBIGUOUS PROBLEMS INTO WORKING SOFTWARE — AND I KNOW HOW
              TO SELL THEM.
            </strong>
          </p>
          <p
            style={{
              marginTop: 14,
              color: "var(--ink-soft)",
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            Over the past three years at Dassault Systèmes, I&apos;ve supported
            <strong style={{ color: "var(--accent)" }}>
              {" "}
              $30–50M in enterprise pipeline{" "}
            </strong>
            across mining, energy, automotive, infrastructure, and defence —
            running technical discovery, building demos, designing
            proof-of-concept architectures, and presenting to stakeholders.
            Outside of work, I build full-stack AI products from scratch.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 22,
            }}
          >
            {stats.map(([n, l]) => (
              <div
                key={l}
                style={{
                  border: "2px solid var(--ink)",
                  background: "var(--paper-2)",
                  padding: "12px 14px 10px",
                  boxShadow: "3px 3px 0 var(--ink)",
                }}
              >
                <div
                  className="pixel"
                  style={{
                    fontSize: 20,
                    color: "var(--accent)",
                    letterSpacing: ".02em",
                  }}
                >
                  {n}
                </div>
                <div
                  className="pixel"
                  style={{
                    fontSize: 9,
                    color: "var(--ink-soft)",
                    letterSpacing: ".12em",
                    marginTop: 4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
