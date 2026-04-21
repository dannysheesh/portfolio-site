const ENTERPRISE = [
  {
    category: "Technical Discovery",
    title: "Workshops & requirements mapping",
    description:
      "Discovery sessions with pre-sales, product (brand) teams, and regional specialists — across Australia and globally with Paris — scoping customer problems across mining, energy, automotive, infrastructure, and defence.",
    color: "var(--accent)",
    icon: "◆",
  },
  {
    category: "Demos & Proof of Concept",
    title: "Custom demos that close deals",
    description:
      "Tailored demos and POC environments for enterprise prospects. Not slide decks — working software configured to their data, their workflows, their language.",
    color: "var(--accent-3)",
    icon: "▲",
  },
  {
    category: "Solution Architecture",
    title: "Platform design & integration planning",
    description:
      "How the platform fits existing tech stacks — API integrations, data pipelines, deployment models. Across simulation, data science, and supply chain.",
    color: "var(--accent-2)",
    icon: "●",
  },
  {
    category: "RFx & Competitive Evaluation",
    title: "Technical responses & solution proposals",
    description:
      "Leading the technical side of RFPs and RFIs — writing responses, proposing solution architecture, and presenting to customer evaluation panels.",
    color: "var(--accent-4)",
    icon: "★",
  },
];

export default function EnterpriseWork() {
  return (
    <section className="sec capy-container" id="enterprise">
      <div className="eyebrow">ENTERPRISE.LOG</div>
      <h2>WHAT I DO AT DASSAULT.</h2>
      <p className="lede">
        Technical pre-sales across Australia — from first meeting to signed
        deal.
      </p>
      <div className="grid-2">
        {ENTERPRISE.map((c, i) => (
          <div key={c.category} className="capy-card">
            <div className="cat" style={{ color: c.color }}>
              <span style={{ marginRight: 6 }}>{c.icon}</span>
              {c.category}
            </div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div
              style={{
                position: "absolute",
                right: -2,
                top: -2,
                width: 22,
                height: 22,
                background: c.color,
                borderLeft: "2px solid var(--ink)",
                borderBottom: "2px solid var(--ink)",
                fontFamily: "var(--font-silkscreen), monospace",
                fontSize: 10,
                display: "grid",
                placeItems: "center",
                color: "var(--paper)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
