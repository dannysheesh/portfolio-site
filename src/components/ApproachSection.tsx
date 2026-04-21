const APPROACHES = [
  {
    n: "01",
    t: "Discover",
    g: "?",
    c: "var(--accent)",
    d: "I start where the customer is — not where the technology is. Enterprise discovery taught me to listen for the real problem underneath the stated one, map stakeholders, and find the constraints that actually matter.",
  },
  {
    n: "02",
    t: "Architect",
    g: "#",
    c: "var(--accent-3)",
    d: "I design solutions that balance ambition with reality. That means choosing the right model, the right integration pattern, and the right deployment model — then explaining the trade-offs to both engineers and executives.",
  },
  {
    n: "03",
    t: "Build",
    g: "$",
    c: "var(--accent-2)",
    d: "I prototype fast. Working software in days, not months. Whether it's a customer-facing demo, an internal tool, or a full production system — I write the code myself and ship it.",
  },
  {
    n: "04",
    t: "Prove",
    g: "✓",
    c: "var(--accent-4)",
    d: "Nothing matters until it works in the real world. I measure outcomes, run evaluations, and iterate based on actual usage — not assumptions. The goal is production value, not a proof of concept that lives in a folder.",
  },
];

export default function ApproachSection() {
  return (
    <section className="sec capy-container" id="approach">
      <div className="eyebrow">HOW_I_WORK.SH</div>
      <h2>FROM PROBLEM TO PRODUCTION.</h2>
      <p className="lede">Four steps. No magic. Repeatable.</p>
      {APPROACHES.map((a) => (
        <div className="approach-item" key={a.n}>
          <div className="approach-num" style={{ color: a.c }}>
            {a.n}
          </div>
          <div>
            <h3>{a.t}.</h3>
            <p>{a.d}</p>
          </div>
          <div
            className="approach-glyph"
            style={{ color: a.c, borderColor: a.c }}
          >
            {a.g}
          </div>
        </div>
      ))}
    </section>
  );
}
