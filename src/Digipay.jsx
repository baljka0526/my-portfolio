import "./Digipay.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { useEffect, useRef } from "react";

import digipayHero from "./assets/digipay-hero.png";
import digipayImg1 from "./assets/digipay-img1.png";
import digipayImg2 from "./assets/digipay-img2.png";
import digipayImg3 from "./assets/digipay-img3.png";
import digipayImg4 from "./assets/digipay-img4.png";

export default function Digipay() {
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

  const title = "DIGIPAY";

  return (
    <div className="dp">
      <Cursor />
      <Navbar />

      {/* ── HERO TITLE — mask reveal letter by letter ── */}
     <h1 className="dp__title">
  {title.split("").map((char, i) => (
    <span key={i} className="dp__title-letter">
      <span style={{ animationDelay: `${i * 0.03}s` }}>{char}</span>
    </span>
  ))}
</h1>

      {/* ── HERO ── */}
      <section className="dp__hero-section">
        <div className="dp__hero-img" ref={heroRef}>
          <img src={digipayHero} alt="Digipay hero" />
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <div className="dp__desc">
        <div className="dp__desc-left">
          <h2 className="dp__headline">
            <span className="hl-sans">Built to</span>
            <br />
            <em className="hl-serif">Last.</em>
          </h2>
        </div>
        <div className="dp__desc-right">
          <p>
            <strong>Digi Pay</strong> is a next-generation Mongolian superapp
            designed to simplify everyday financial life through one connected
            digital ecosystem. It combines payments, banking, lifestyle
            services, and mini-app experiences into a single platform built for
            speed, convenience, and personalization.
          </p>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="dp__grid">
        <div className="dp__grid-item dp__grid-item--full-top">
          <img src={digipayImg1} alt="Digipay branding showcase layout" />
        </div>
        <div className="dp__grid-item dp__grid-item--left">
          <img src={digipayImg2} alt="Digipay app interface" />
        </div>
        <div className="dp__grid-item dp__grid-item--right-tall">
          <img src={digipayImg3} alt="Digipay feature showcase" />
        </div>
        <div className="dp__grid-item dp__grid-item--left-bottom">
          <img src={digipayImg4} alt="Digipay user experience" />
        </div>
      </div>

      <Footer />
    </div>
  );
}