"use client";

import { useEffect, useState } from "react";
import CapyHabitat from "./Capybara";

type BootLine = { t: string; cls: "" | "ok" | "warn" | "key" };

const BOOT_LINES: BootLine[] = [
  { t: "CAPYOS v2.6 (build 26.04.21)", cls: "key" },
  { t: "(c) 2026 mangelsdorf industries", cls: "" },
  { t: "", cls: "" },
  { t: "> mount /portfolio ....................... [ OK ]", cls: "ok" },
  { t: "> load profile.json ....................... [ OK ]", cls: "ok" },
  { t: "> connect dassault.network ................ [ OK ]", cls: "ok" },
  { t: "> summon capybara(warm) ................... [ OK ]", cls: "ok" },
  { t: "", cls: "" },
  { t: "daniel@capyos:~$ whoami", cls: "" },
  { t: "ai solutions engineer. technical pre-sales.", cls: "warn" },
  { t: "melbourne. 3+ yrs @ dassault. builds what it pitches.", cls: "" },
];

function BootSequence() {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const done = idx >= BOOT_LINES.length;

  useEffect(() => {
    if (done) return;
    const cur = BOOT_LINES[idx];
    if (sub < cur.t.length) {
      const delay = cur.t.includes("[ OK ]") ? 6 : cur.cls === "warn" ? 35 : 12;
      const id = setTimeout(() => setSub(sub + 1), delay);
      return () => clearTimeout(id);
    }
    const pause = cur.cls === "warn" ? 220 : cur.t === "" ? 40 : 90;
    const id = setTimeout(() => {
      setIdx(idx + 1);
      setSub(0);
    }, pause);
    return () => clearTimeout(id);
  }, [idx, sub, done]);

  return (
    <div className="boot">
      {BOOT_LINES.slice(0, idx).map((l, i) => (
        <div key={i} className={l.cls}>
          {l.t || "\u00a0"}
        </div>
      ))}
      {!done && (
        <div className={BOOT_LINES[idx].cls}>
          {BOOT_LINES[idx].t.slice(0, sub)}
          <span className="caret blink" />
        </div>
      )}
      {done && (
        <div style={{ marginTop: 8 }}>
          <span style={{ color: "var(--accent-3)" }}>daniel@capyos:~$</span>{" "}
          <span className="blink">█</span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="capy-container">
        <div className="hero-grid">
          <div>
            <div className="win" style={{ marginBottom: 16 }}>
              <div className="win-title">
                TERMINAL — boot.log
                <div className="win-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                className="win-body"
                style={{ background: "#1c1109", color: "#e8d199" }}
              >
                <BootSequence />
              </div>
            </div>

            <div className="title-card">
              <h1 className="pixel">
                <span style={{ color: "var(--ink)" }}>BUILD IT.</span>
                <br />
                <span className="accent">SHIP IT.</span>
                <br />
                <span className="plum">PET CAPYBARA.</span>
              </h1>
              <p className="sub">
                I design and build AI systems — RAG pipelines, autonomous
                agents, data platforms, and production web apps. Three years of
                enterprise pre-sales at Dassault Systèmes. Made from Melbourne
                with one (1) very calm rodent.
              </p>
              <div className="badge-row">
                <span className="badge orange">AI ENGINEER</span>
                <span className="badge olive">PRE-SALES</span>
                <span className="badge plum">FULL-STACK</span>
                <span className="badge mustard">MELBOURNE</span>
              </div>
              <div className="cta-row">
                <a href="#work" className="btn primary">
                  &gt; see_work
                </a>
                <a href="#contact" className="btn">
                  get_in_touch.sh
                </a>
              </div>
            </div>
          </div>

          <div>
            <CapyHabitat />
            <div style={{ marginTop: 16 }} className="win">
              <div className="win-title">
                NOW_PLAYING.TXT
                <div className="win-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="win-body" style={{ padding: "14px 16px" }}>
                <div className="term" style={{ color: "var(--ink-soft)" }}>
                  <div>
                    <span style={{ color: "var(--accent)" }}>&gt;&gt;</span>{" "}
                    status:{" "}
                    <span style={{ color: "var(--good)" }}>
                      open to opportunities
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "var(--accent)" }}>&gt;&gt;</span>{" "}
                    role: ai solutions engineering / pre-sales
                  </div>
                  <div>
                    <span style={{ color: "var(--accent)" }}>&gt;&gt;</span>{" "}
                    stack: python · typescript · react · fastapi · llms
                  </div>
                  <div>
                    <span style={{ color: "var(--accent)" }}>&gt;&gt;</span>{" "}
                    based: melbourne · au
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
