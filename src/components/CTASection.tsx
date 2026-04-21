export default function CTASection() {
  return (
    <section className="contact-sec capy-container" id="contact">
      <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
        TRANSMIT.SH
      </div>
      <h2 className="pixel">LET&apos;S BUILD SOMETHING.</h2>
      <p
        className="lede"
        style={{ margin: "12px auto 0", color: "var(--ink-soft)" }}
      >
        Open to AI solutions engineering, technical pre-sales, and the right
        full-time opportunity. Melbourne.
      </p>
      <div className="contact-box">
        <div className="contact-line">
          <span className="lbl">$ </span>mail:{" "}
          <a href="mailto:daniel@mangelsdorf.au">daniel@mangelsdorf.au</a>
        </div>
        <div className="contact-line">
          <span className="lbl">$ </span>linkedin:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daniel-mangelsdorf/"
          >
            /in/daniel-mangelsdorf
          </a>
        </div>
        <div className="contact-line">
          <span className="lbl">$ </span>github:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dannysheesh"
          >
            @dannysheesh
          </a>
        </div>
        <div className="contact-line" style={{ marginTop: 6 }}>
          <span className="lbl">$ </span>_<span className="blink">█</span>
        </div>
      </div>
    </section>
  );
}
