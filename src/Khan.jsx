import "./Khan.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { useEffect, useRef } from "react";

import KhanHero from "./assets/KhanHero.png";
import KhanImg1 from "./assets/KhanImg1.png";
import KhanImg2 from "./assets/KhanImg2.png";
import KhanImg3 from "./assets/KhanImg3.png";
import KhanImg4 from "./assets/KhanImg4.png";

export default function Khan() {
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

  const title = "KHAN BANK";

  return (
    <div className="khan">
      <Cursor />
      <Navbar />

      {/* ── HERO TITLE — mask reveal letter by letter ── */}
     <h1 className="khan__title">
  {title.split("").map((char, i) => (
     <span
    key={i}
    className={`khan__title-letter ${char === " " ? "khan__title-space" : ""}`}
  >
    <span style={{ animationDelay: `${i * 0.03}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  </span>
  ))}
</h1>

      {/* ── HERO ── */}
      <section className="khan__hero-section">
        <div className="khan__hero-img" ref={heroRef}>
          <img src={KhanHero} alt="Khan-hero" />
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <div className="khan__desc">
        <div className="khan__desc-left">
          <h2 className="khan__headline">
            <span className="hl-sans">Growing</span>
            <br />
            <em className="hl-sans">Together.</em>
          </h2>
        </div>
        <div className="khan__desc-right">
          <p>
            <strong>Khan Bank App</strong> is a modern digital banking platform built to make everyday finance seamless, secure, and accessible. It brings together banking, payments, savings, lending, lifestyle services, and smart digital experiences into one intuitive ecosystem designed for speed, convenience, and personalized financial management.
          </p>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="khan__grid">
        <div className="khan__grid-item khan__grid-item--top-left">
          <img src={KhanImg1} alt="Khan branding showcase layout" />
        </div>
        <div className="khan__grid-item khan__grid-item--top-right">
          <img src={KhanImg2} alt="Khan app interface" />
        </div>
        <div className="khan__grid-item khan__grid-item--full-middle">
          <img src={KhanImg3} alt="Khan feature showcase" />
        </div>
        <div className="khan__grid-item khan__grid-item--full-bottom">
          <img src={KhanImg4} alt="Khan user experience" />
        </div>
      </div>

      <Footer />
    </div>
  );
}