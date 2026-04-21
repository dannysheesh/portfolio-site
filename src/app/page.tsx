import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import EnterpriseWork from "@/components/EnterpriseWork";
import ProjectShowcase from "@/components/ProjectShowcase";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { allProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Ticker />
      <EnterpriseWork />

      <section id="work" className="sec capy-container">
        <div className="eyebrow">SELECTED_WORK.DIR</div>
        <h2>PROJECTS.</h2>
        <p className="lede">
          Side projects and open-source work. Each one is live — explore the
          app, then see how it was designed.
        </p>
        {allProjects.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} index={i} />
        ))}
      </section>

      <ApproachSection />
      <CTASection />
      <Footer />
    </>
  );
}
