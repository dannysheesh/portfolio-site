import ScrollReveal from "./ScrollReveal";

const approaches = [
  {
    num: "01",
    title: "Discover",
    description:
      "I start where the customer is — not where the technology is. Enterprise discovery taught me to listen for the real problem underneath the stated one, map stakeholders, and find the constraints that actually matter.",
  },
  {
    num: "02",
    title: "Architect",
    description:
      "I design solutions that balance ambition with reality. That means choosing the right model, the right integration pattern, and the right deployment model — then explaining the trade-offs to both engineers and executives.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "I prototype fast. Working software in days, not months. Whether it's a customer-facing demo, an internal tool, or a full production system — I write the code myself and ship it.",
  },
  {
    num: "04",
    title: "Prove",
    description:
      "Nothing matters until it works in the real world. I measure outcomes, run evaluations, and iterate based on actual usage — not assumptions. The goal is production value, not a proof of concept that lives in a folder.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="max-w-[980px] mx-auto py-32 px-8">
      <ScrollReveal>
        <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-8">
          How I Work
        </p>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1]">
          From problem to production.
        </h2>
      </ScrollReveal>

      <div className="flex flex-col mt-16">
        {approaches.map((item) => (
          <ScrollReveal key={item.num}>
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12 border-t border-gray-800 items-start">
              <div className="text-[2.5rem] md:text-[4rem] font-bold text-gray-800 tracking-[-0.04em] leading-none">
                {item.num}
              </div>
              <div>
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.015em] mb-[0.6rem]">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-gray-400 leading-[1.65] font-light max-w-[520px]">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
