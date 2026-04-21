export default function Ticker() {
  const items = [
    "★ AI SOLUTIONS ENGINEER",
    "RAG PIPELINES",
    "AUTONOMOUS AGENTS",
    "PRE-SALES",
    "MELBOURNE / AU",
    "DASSAULT SYSTÈMES",
    "BUILDS WHAT HE PITCHES",
    "OPEN TO WORK",
    "☕ CAPYBARA APPROVED",
  ];
  const full = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee">
        {full.map((t, i) => (
          <span key={i}>
            {t}
            <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
