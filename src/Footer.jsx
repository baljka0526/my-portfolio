import "./Footer.css";

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top — heading + CTA */}
      <div className="footer__top">
        <div className="footer__heading">
          <p className="footer__h1">Have a project in mind?</p>
          <span className="footer__h2" aria-hidden="true">Let's talk!</span>
        </div>
        <a href="mailto:baljaatemka@gmail.com" className="footer__btn">
          Send me an E-mail <ArrowRight />
        </a>
      </div>

      {/* Bottom — contact + socials */}
      <div className="footer__bottom">
        <div className="footer__col">
          <span className="footer__col-label">Contact me:</span>
          <div className="footer__col-links">
            <a href="mailto:baljaatemka@gmail.com">baljaatemka@gmail.com</a>
            <span>+976 8601-0973</span>
          </div>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Other channels:</span>
          <div className="footer__col-links">
            <a href="https://www.instagram.com/baljka_0526/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/tbaljinnyam/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </div>

    </footer>
  );
}