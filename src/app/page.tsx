import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ApproachSection from "@/components/ApproachSection";
import BlogGrid from "@/components/BlogGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { allProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero />

      <div className="w-full h-px bg-gray-800" />

      {/* About */}
      <section className="max-w-[980px] mx-auto py-32 px-8">
        <ScrollReveal>
          <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-8">
            About
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] leading-[1.35] text-gray-400 max-w-[780px]">
            <strong className="text-gray-100 font-semibold">
              I turn ambiguous problems into working software.
            </strong>{" "}
            Over the past three years at Dassault Systemes, I&apos;ve supported
            $30–50M in enterprise pipeline — building demos, designing
            proof-of-concept architectures, and presenting to executive
            stakeholders. Outside of work, I build full-stack AI products from
            scratch.
          </p>
        </ScrollReveal>
      </section>

      <div className="w-full h-px bg-gray-800" />

      {/* Selected Work */}
      <section id="work" className="max-w-[980px] mx-auto px-8 pb-32">
        <div className="mb-16">
          <ScrollReveal>
            <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-4">
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-4">
              Projects.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-[1.1rem] text-gray-400 font-light max-w-[480px]">
              Each one is live. Explore the app, then see how it was built.
            </p>
          </ScrollReveal>
        </div>

        {allProjects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </section>

      <div className="w-full h-px bg-gray-800" />

      {/* Approach */}
      <ApproachSection />

      <div className="w-full h-px bg-gray-800" />

      {/* Writing / Blog */}
      <section id="writing" className="max-w-[980px] mx-auto px-8 pb-32">
        <ScrollReveal>
          <p className="text-[0.7rem] font-medium text-gray-500 uppercase tracking-[0.1em] mb-4">
            Writing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.1] mb-2">
            Technical deep-dives.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-[1.1rem] text-gray-400 font-light">
            How and why I built things.
          </p>
        </ScrollReveal>

        <BlogGrid posts={posts} />
      </section>

      <div className="w-full h-px bg-gray-800" />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
