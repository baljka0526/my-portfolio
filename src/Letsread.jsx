import "./Letsread.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { useEffect, useRef } from "react";

import LetsreadHero from "./assets/LetsreadHero.png";
import LetsreadImg1 from "./assets/LetsreadImg1.png";
import LetsreadImg2 from "./assets/LetsreadImg2.png";
import LetsreadImg3 from "./assets/LetsreadImg3.png";
import LetsreadImg4 from "./assets/LetsreadImg4.png";

export default function Letsread() {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // HERO CINEMATIC SCROLL MORPH
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight;
      const progress = 1 - Math.min(Math.max(rect.top / start, 0), 1);

      const width = 1080 + (window.innerWidth - 1080) * progress;
      const height = 849 + (window.innerHeight - 849) * progress;
      const radius = 24 * (1 - progress);
      const scale = 0.82 + (1 - 0.82) * progress;

      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.borderRadius = `${radius}px`;
      el.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const title = " LET'S READ";

  return (
    <div className="lr">
      <Cursor />
      <Navbar />

      {/* ── HERO TITLE — mask reveal letter by letter ── */}
     <h1 className="lr__title">
  {title.split("").map((char, i) => (
    <span
    key={i}
    className={`lr__title-letter ${char === " " ? "lr__title-space" : ""}`}
  >
    <span style={{ animationDelay: `${i * 0.03}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  </span>
  ))}
</h1>

      {/* ── HERO ── */}
      <section className="lr__hero-section">
        <div className="lr__hero-img" ref={heroRef}>
          <img src={LetsreadHero} alt="Letsread-hero" />
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <div className="lr__desc">
        <div className="lr__desc-left">
          <h2 className="lr__headline">
            <span className="hl-sans">Connect, Create,</span>
            <br />
            <em className="hl-sans">Read, Thrive.</em>
          </h2>
        </div>
        <div className="lr__desc-right">
          <p>
            <strong>Let's Read</strong> is a digital learning platform designed to support children's reading and literacy development. It brings together engaging stories, educational books, and interactive learning experiences in one safe and accessible environment.
          </p>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="lr__grid">
        <div className="lr__grid-item lr__grid-item--full-top">
          <img src={LetsreadImg1} alt="Letsread branding showcase layout" />
        </div>
        <div className="lr__grid-item lr__grid-item--right">
          <img src={LetsreadImg2} alt="Letsread app interface" />
        </div>
        <div className="lr__grid-item lr__grid-item--left-tall">
          <img src={LetsreadImg3} alt="Letsread feature showcase" />
        </div>
        <div className="lr__grid-item lr__grid-item--right-bottom">
          <img src={LetsreadImg4} alt="Letsread user experience" />
        </div>
      </div>

      <Footer />
    </div>
  );
}