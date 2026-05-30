import "./Dataschool.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { useEffect, useRef } from "react";

import DataschoolHero from "./assets/DataschoolHero.png";
import DataschoolImg1 from "./assets/DataschoolImg1.png";
import DataschoolImg2 from "./assets/DataschoolImg2.png";
import DataschoolImg3 from "./assets/DataschoolImg3.png";
import DataschoolImg4 from "./assets/DataschoolImg4.png";

export default function Dataschool() {
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

  const title = " DATA SCHOOL";

  return (
    <div className="dataschool">
      <Cursor />
      <Navbar />

      {/* ── HERO TITLE — mask reveal letter by letter ── */}
     <h1 className="dataschool__title">
  {title.split("").map((char, i) => (
     <span
    key={i}
    className={`dataschool__title-letter ${char === " " ? "dataschool__title-space" : ""}`}
  >
    <span style={{ animationDelay: `${i * 0.03}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  </span>
  ))}
</h1>

      {/* ── HERO ── */}
      <section className="dataschool__hero-section">
        <div className="dataschool__hero-img" ref={heroRef}>
          <img src={DataschoolHero} alt="Dataschool-hero" />
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <div className="dataschool__desc">
        <div className="dataschool__desc-left">
          <h2 className="dataschool__headline">
            <span className="hl-sans">Think in</span>
            <br />
            <em className="hl-serif">Data.</em>
          </h2>
        </div>
        <div className="dataschool__desc-right">
          <p>
            <strong>Dataschool  App</strong> is a modern learning platform designed to make data and AI education accessible to everyone. It brings together expert-led courses, practical projects, and career-focused learning paths in one unified ecosystem.
          </p>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="ds_grid">
        <div className="ds_grid-item ds_grid-item--full-top">
          <img src={DataschoolImg1} alt="Dataschool branding showcase layout" />
        </div>
        <div className="ds_grid-item ds_grid-item--left">
          <img src={DataschoolImg2} alt="Dataschool app interface" />
        </div>
        <div className="ds_grid-item ds_grid-item--right">
          <img src={DataschoolImg3} alt="Dataschool feature showcase" />
        </div>
        <div className="ds_grid-item ds_grid-item--full-bottom">
          <img src={DataschoolImg4} alt="Dataschool user experience" />
        </div>
      </div>

      <Footer />
    </div>
  );
}