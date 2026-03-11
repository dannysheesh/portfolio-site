import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    category: "Technical Discovery",
    title: "Workshops & requirements mapping",
    description:
      "I run discovery sessions with internal pre-sales teams, product (brand) teams, and regional specialists — across Australia and globally with Paris — to scope customer problems and map them to technical solutions across industries including mining, energy, automotive, infrastructure, and defence.",
  },
  {
    category: "Demos & Proof of Concept",
    title: "Custom demos that close deals",
    description:
      "I build tailored demos and proof-of-concept environments for enterprise prospects. Not slide decks — working software configured to their data, their workflows, their language.",
  },
  {
    category: "Solution Architecture",
    title: "Platform design & integration planning",
    description:
      "I architect how Dassault's platform fits into existing customer tech stacks — API integrations, data pipelines, and deployment models. I work across simulation, data science, and supply chain solutions.",
  },
  {
    category: "RFx & Competitive Evaluation",
    title: "Technical responses & solution proposals",
    description:
      "I lead the technical side of RFPs and RFIs — writing technical responses, proposing the best-fit solution architecture, and presenting to customer evaluation panels.",
  },
];

export default function EnterpriseWork() {
  return (
    <section className="max-w-[980px] mx-auto px-8 pb-32">
      <div className="mb-16">
        <ScrollReveal>
          <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-4">
            Enterprise Experience
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-4">
            What I do at Dassault Systèmes.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-[1.1rem] text-gray-400 font-light max-w-[480px]">
            Technical pre-sales across Australia — from first meeting to signed deal.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <ScrollReveal key={card.category} delay={i < 4 ? i : 0}>
            <div className="bg-gray-950 border border-gray-800 rounded-[14px] overflow-hidden p-7 h-full">
              <div className="text-[0.7rem] text-blue uppercase tracking-[0.06em] mb-3 font-medium">
                {card.category}
              </div>
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] leading-[1.4] mb-2 text-gray-100">
                {card.title}
              </h3>
              <p className="text-[0.85rem] text-gray-400 leading-[1.6] font-light">
                {card.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
