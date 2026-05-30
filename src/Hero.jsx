import Navbar from "./Navbar";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="port">
      <div className="noise" aria-hidden="true" />

      <Navbar />

      {/* ── Hero top: text + stacked badges ── */}
      <div className="hero__top">
        <div className="hero__text">
          <div className="hero__greeting">
            <span className="hero__greeting-text">hi, I'm Baljka</span>
            <span className="hero__greeting-wave" aria-hidden="true">👋</span>
          </div>
          <h1 className="hero__headline">
            <span className="hl-sans">Digital Experience </span><br />
            <em className="hl-serif">Creator</em>
          </h1>
        </div>

        {/* Stacked badges — purple behind, orange on top; hover fans them out */}
        <div className="badge-stack" role="group" aria-label="Availability status">
          <div className="badge badge--purple">
            <span className="badge__label">Not so sure? Let's talk</span>
          </div>
          <div className="badge badge--orange">
            <span className="badge__label">Open to work! Let's collab</span>
          </div>
        </div>
      </div>

      {/* ── About gradient block ── */}
      <div className="hero__about">
        <p className="hero__bio">
          I design products people trust. As a UX Designer with expertise in
          business, finance, and digital innovation, I create experiences that
          balance user needs with business growth. From banking apps to AI
          products, I focus on turning complexity into clarity.
        </p>
        <p className="hero__sub">Creating Meaning</p>
      </div>
    </div>
  );
}