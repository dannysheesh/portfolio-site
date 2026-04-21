"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const clockStr = time ? time.toTimeString().slice(0, 8) : "--:--:--";

  return (
    <nav className="capy-nav">
      <div className="capy-nav-inner">
        <Link
          href="/"
          className="capy-nav-title"
          style={{ color: "var(--paper)", textDecoration: "none" }}
        >
          <span className="dot" />
          <span>DANIEL.MANGELSDORF</span>
          <span
            style={{
              color: "var(--accent-4)",
              fontFamily: "var(--font-vt323), monospace",
              fontSize: 15,
              marginLeft: 2,
            }}
          >
            [CAPYOS]
          </span>
        </Link>
        <div className="capy-nav-spacer" />
        <Link href="/#about">ABOUT</Link>
        <Link href="/#work">WORK</Link>
        <Link href="/#approach">APPROACH</Link>
        <Link href="/#contact">CONTACT</Link>
        <span className="capy-nav-clock" suppressHydrationWarning>
          {clockStr}
        </span>
      </div>
    </nav>
  );
}
