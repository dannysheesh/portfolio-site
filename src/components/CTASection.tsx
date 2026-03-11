import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section id="contact" className="max-w-[980px] mx-auto py-32 px-8 text-center">
      <ScrollReveal>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-4">
          Let&apos;s build something.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <p className="text-[1.1rem] text-gray-400 font-light max-w-[440px] mx-auto mb-10 leading-[1.6]">
          Open to AI solutions engineering, technical pre-sales,
          and the right full-time opportunity. Melbourne.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <a
            href="mailto:daniel@mangelsdorf.au"
            className="text-blue no-underline text-[1.05rem] font-normal inline-flex items-center gap-[0.35rem] transition-all duration-250 hover:gap-[0.6rem]"
          >
            Email <span className="text-[1.2rem]">&rsaquo;</span>
          </a>
          <div className="w-px h-5 bg-gray-700 hidden md:block" />
          <a
            href="https://www.linkedin.com/in/daniel-mangelsdorf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue no-underline text-[1.05rem] font-normal inline-flex items-center gap-[0.35rem] transition-all duration-250 hover:gap-[0.6rem]"
          >
            LinkedIn <span className="text-[1.2rem]">&rsaquo;</span>
          </a>
          <div className="w-px h-5 bg-gray-700 hidden md:block" />
          <a
            href="https://github.com/dannysheesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue no-underline text-[1.05rem] font-normal inline-flex items-center gap-[0.35rem] transition-all duration-250 hover:gap-[0.6rem]"
          >
            GitHub <span className="text-[1.2rem]">&rsaquo;</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
