import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-24 relative">
      <ScrollReveal>
        <p className="text-[0.8rem] font-normal text-gray-400 mb-6 tracking-[0.02em]">
          AI Solutions Engineer &amp; Full-Stack Developer
        </p>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <h1 className="text-[clamp(2.2rem,8vw,3.5rem)] md:text-[clamp(3rem,7vw,5.5rem)] font-bold tracking-[-0.045em] leading-[1.05] mb-6 max-w-[800px]">
          Build it.
          <br />
          <span className="bg-gradient-to-r from-blue to-[#64d2ff] bg-clip-text text-transparent">
            Ship it.
          </span>
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="text-xl text-gray-400 max-w-[520px] leading-[1.6] font-light mb-10">
          I design and build AI systems — RAG pipelines, autonomous agents,
          data platforms, and production web apps. 3+ years enterprise pre-sales.
          Based in Melbourne.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={3}>
        <div className="flex gap-8 items-center">
          <a
            href="#work"
            className="text-blue no-underline text-[1.1rem] font-normal inline-flex items-center gap-[0.35rem] transition-all duration-300 hover:gap-[0.6rem]"
          >
            See my work <span className="text-[1.2rem]">&rsaquo;</span>
          </a>
          <a
            href="#contact"
            className="text-blue no-underline text-[1.1rem] font-normal inline-flex items-center gap-[0.35rem] transition-all duration-300 hover:gap-[0.6rem]"
          >
            Get in touch <span className="text-[1.2rem]">&rsaquo;</span>
          </a>
        </div>
      </ScrollReveal>
      <div className="absolute bottom-10 text-gray-600 text-[0.7rem] tracking-[0.08em] uppercase font-medium scroll-hint-anim">
        Scroll
      </div>
    </section>
  );
}
