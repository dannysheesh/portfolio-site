"use client";

import { useEffect, useState } from "react";

// Pixel palette map — drives the capybara drawings
const PAL: Record<string, string> = {
  B: "var(--capy-body, #8a5a2b)",
  D: "var(--capy-dark, #2b1d12)",
  L: "var(--capy-leg,  #6a4220)",
  E: "var(--capy-eye,  #1a0e05)",
  N: "var(--capy-nose, #2b1d12)",
  O: "var(--capy-spot, #c9531f)",
};

// 22x14 side-view capybara
const CAPY_MAP = [
  "......DDDDDD..........",
  ".....DBBBBBBD.........",
  "....DBBBBBBBBDDDDDDD..",
  "....DBBBBBBBBBBBBBBD..",
  "...DBEBBBBOOBBBBBBBBD.",
  "...DBBBBBBOOBBBBBBBBD.",
  "...DNBBBBBBBBBBBBBBBD.",
  "....DBBLLBBLLBBLLBBBD.",
  "....DBBLLBBLLBBLLBBBD.",
  ".....DLL..DLL..DLL.D..",
  ".....DD....D....D.....",
  "......................",
  "......................",
  "......................",
];

// 40x19 face-on sitting capybara (detailed)
const CAPY_BIG = [
  "..............DDDDDDDDDDDD..............",
  "............DDBBBBBBBBBBBBDD............",
  "..........DDBBBBBBBBBBBBBBBBDD..........",
  ".........DBBBBBBBBBBBBBBBBBBBBD.........",
  "........DBBBBBBBBBBBBBBBBBBBBBBD........",
  ".......DBBDDBBBBBBBBBBBBBBDDBBBBD.......",
  "......DBBDDDBBBBBBBBBBBBBBDDDBBBBD......",
  "......DBBBBBBBEEBBBBBBEEBBBBBBBBBD......",
  "......DBBBBBBBEEBBBBBBEEBBBBBBBBBD......",
  "......DBBBBBBBBBBBBBBBBBBBBBBBBBBD......",
  "......DBBBBBBBBOOOOOOOOBBBBBBBBBBD......",
  "......DBBBBBBBBNNNNNNNNBBBBBBBBBBD......",
  "......DBBBBBBBBBBBBBBBBBBBBBBBBBBD......",
  "......DBBBBBBBBBBBBBBBBBBBBBBBBBBD......",
  ".....DBBBBBBBBBBBBBBBBBBBBBBBBBBBBD.....",
  ".....DBBLLLBBBBBLLBBBBLLBBBBBLLLBBD.....",
  ".....DBLLLLLBBBLLLLBBLLLLBBBLLLLLBD.....",
  "......DLL.LLDDDLL.LLDLL.LLDDDLL.LLD.....",
  ".......DD...DDDD...DDD...DDDD...DD......",
];

function renderPixelMap(rows: string[], px: number) {
  const cells: React.ReactNode[] = [];
  rows.forEach((row, y) => {
    row.split("").forEach((c, x) => {
      if (c === "." || !PAL[c]) return;
      cells.push(
        <div
          key={`${x}-${y}`}
          style={{
            position: "absolute",
            left: x * px,
            top: y * px,
            width: px,
            height: px,
            background: PAL[c],
          }}
        />
      );
    });
  });
  return cells;
}

export function CapyPixelGrid({ scale = 4, flip = false }: { scale?: number; flip?: boolean }) {
  const w = CAPY_MAP[0].length;
  const h = CAPY_MAP.length;
  return (
    <div
      style={{
        position: "relative",
        width: w * scale,
        height: h * scale,
        imageRendering: "pixelated",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      {renderPixelMap(CAPY_MAP, scale)}
    </div>
  );
}

export function CapyBig({ scale = 5 }: { scale?: number }) {
  const w = CAPY_BIG[0].length;
  const h = CAPY_BIG.length;
  return (
    <div
      className="capy-big"
      style={{
        position: "relative",
        width: w * scale,
        height: h * scale,
        imageRendering: "pixelated",
      }}
    >
      {renderPixelMap(CAPY_BIG, scale)}
    </div>
  );
}

type Mood = "idle" | "happy" | "sleep";

export default function CapyHabitat() {
  const [clicks, setClicks] = useState(0);
  const [mood, setMood] = useState<Mood>("idle");
  const [scale, setScale] = useState(5);

  useEffect(() => {
    const update = () => setScale(window.innerWidth < 480 ? 4 : 5);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const moods: Record<Mood, string> = {
    idle: "just vibing",
    happy: "!!! yes !!!",
    sleep: "zzz...",
  };

  return (
    <div className="habitat">
      <span className="habitat-label">HABITAT.EXE</span>

      <div className="habitat-sky">
        <div className="cloud" style={{ top: 26 }} />
        <div className="cloud b" />
      </div>
      <div className="habitat-ground">
        {Array.from({ length: 26 }).map((_, i) => (
          <div
            key={i}
            className="blade"
            style={{
              left: `${(i * 100) / 26}%`,
              animationDelay: `${(i % 5) * 0.3}s`,
            }}
          />
        ))}

        <div className="capy-stage">
          <div
            className="bob"
            style={{ cursor: "pointer", position: "relative" }}
            onClick={() => {
              setClicks((c) => c + 1);
              setMood("happy");
              setTimeout(() => setMood("idle"), 1200);
            }}
            onMouseEnter={() => mood === "idle" && setMood("happy")}
            onMouseLeave={() => setMood("idle")}
            title="click to pet"
          >
            <CapyBig scale={scale} />
            {mood !== "idle" && (
              <div
                style={{
                  position: "absolute",
                  top: -28,
                  left: "100%",
                  marginLeft: 6,
                  background: "var(--paper)",
                  border: "2px solid var(--ink)",
                  padding: "2px 8px 1px",
                  fontFamily: "var(--font-silkscreen), monospace",
                  fontSize: 9,
                  letterSpacing: ".08em",
                  whiteSpace: "nowrap",
                  boxShadow: "2px 2px 0 var(--ink)",
                }}
              >
                {moods[mood]}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 6,
          right: 10,
          fontFamily: "var(--font-vt323), monospace",
          fontSize: 14,
          color: "var(--ink)",
        }}
      >
        pets: {clicks.toString().padStart(3, "0")}
      </div>
    </div>
  );
}
