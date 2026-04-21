"use client";

import { useEffect, useState } from "react";

type ThemeKey = "paper" | "mint" | "rose" | "night";

const THEMES: Record<ThemeKey, Record<string, string>> = {
  paper: {
    "--paper": "#f1e4c6",
    "--paper-2": "#e8d8b0",
    "--paper-3": "#d9c393",
    "--ink": "#2b1d12",
    "--ink-soft": "#4a362a",
    "--ink-faint": "#7a6148",
    "--accent": "#c9531f",
    "--accent-2": "#6a7a3a",
    "--accent-3": "#8a4a6a",
    "--accent-4": "#c99a2f",
  },
  mint: {
    "--paper": "#e9ecd7",
    "--paper-2": "#d9e0c0",
    "--paper-3": "#bccb9a",
    "--ink": "#1f2a1a",
    "--ink-soft": "#364530",
    "--ink-faint": "#5a6b50",
    "--accent": "#c9531f",
    "--accent-2": "#4a7a3a",
    "--accent-3": "#8a4a6a",
    "--accent-4": "#c99a2f",
  },
  rose: {
    "--paper": "#f4dcd0",
    "--paper-2": "#e9c7b6",
    "--paper-3": "#d6a28a",
    "--ink": "#2b1818",
    "--ink-soft": "#4a2a2a",
    "--ink-faint": "#7a4848",
    "--accent": "#a4331f",
    "--accent-2": "#6a7a3a",
    "--accent-3": "#6a3a5a",
    "--accent-4": "#c99a2f",
  },
  night: {
    "--paper": "#1a140c",
    "--paper-2": "#241c12",
    "--paper-3": "#352818",
    "--ink": "#f1e4c6",
    "--ink-soft": "#d6c59c",
    "--ink-faint": "#9a8868",
    "--accent": "#ff9a3c",
    "--accent-2": "#a3c77a",
    "--accent-3": "#d68bb0",
    "--accent-4": "#ffd06b",
  },
};

export default function Tweaks() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeKey>("paper");
  const [scanlines, setScanlines] = useState(true);
  const [crt, setCrt] = useState(true);

  useEffect(() => {
    const vars = THEMES[theme];
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scanline-op",
      scanlines ? "0.5" : "0"
    );
  }, [scanlines]);

  useEffect(() => {
    document.documentElement.style.setProperty("--crt-op", crt ? "1" : "0");
  }, [crt]);

  if (!open) {
    return (
      <button
        className="tweaks-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open tweaks panel"
      >
        ⚙ TWEAKS
      </button>
    );
  }

  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        TWEAKS.EXE
        <span
          className="close-x"
          onClick={() => setOpen(false)}
          role="button"
          aria-label="Close"
        >
          ×
        </span>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>PALETTE</label>
          <div className="swatch-row">
            {(Object.keys(THEMES) as ThemeKey[]).map((k) => (
              <button
                key={k}
                type="button"
                title={k}
                className={"swatch " + (theme === k ? "active" : "")}
                style={{
                  background: THEMES[k]["--paper"],
                  boxShadow: `inset 0 -6px 0 ${THEMES[k]["--accent"]}, inset 0 -12px 0 ${THEMES[k]["--ink"]}`,
                }}
                onClick={() => setTheme(k)}
              />
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>SCANLINES</label>
          <div
            className={"toggle " + (scanlines ? "on" : "")}
            onClick={() => setScanlines(!scanlines)}
            role="switch"
            aria-checked={scanlines}
          />
        </div>
        <div className="tweak-row">
          <label>CRT VIGNETTE</label>
          <div
            className={"toggle " + (crt ? "on" : "")}
            onClick={() => setCrt(!crt)}
            role="switch"
            aria-checked={crt}
          />
        </div>
        <div
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: 14,
            color: "var(--ink-soft)",
            borderTop: "1.5px dotted var(--ink)",
            paddingTop: 8,
          }}
        >
          click the capybara ⟶
        </div>
      </div>
    </div>
  );
}
