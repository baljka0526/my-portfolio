import { useEffect, useRef } from "react";
import LogoSvg from "./assets/Logo.svg";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () =>
      navRef.current?.classList.toggle("nav--scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // not on homepage — navigate first then scroll
      navigate("/");
      setTimeout(() => {
        document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="nav" ref={navRef}>
      <Link to="/" className="nav__brand" onClick={() => window.scrollTo(0, 0)}>
        <img src={LogoSvg} alt="Logo" className="nav__logo" />
        <span className="nav__name">Baljka</span>
      </Link>

      <div className="nav__links">
        <span className="nav__link" onClick={() => scrollTo(".fw")}>Works</span>
        <span className="nav__link" onClick={() => scrollTo(".mo")}>Contact</span>
      </div>

      <a className="nav__cta" href="mailto:baljaatemka@gmail.com">
  Get started
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M8 3l5 5-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>
    </nav>
  );
}