import "./FeaturedWorks.css";
import digipayImg from "./assets/digipay.png";
import khanImg from "./assets/khan.png";
import dataschoolImg from "./assets/dataschool.png";
import LetsreadImg from "./assets/LetsreadImg.png";
import digipayLogo from "./assets/digipayLogo.svg";
import khanLogo from "./assets/khanLogo.svg";
import dataschoolLogo from "./assets/dataschoolLogo.svg";
import LetsreadLogo from "./assets/LetsreadLogo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ArrowDiagonal = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M4 4h10v10M4 14 14 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const projects = [
  {
    id: "digipay",
    tag: "Mobile App, Branding",
    title: "Digipay Super app",
    subtitle: "One app that handles everything",
    bg: "card__img--digipay",
    image: digipayImg,
    logo: digipayLogo,
    href: "/digipay",
  },
  {
    id: "khan",
    tag: "Mobile app, Web, Kiosk",
    title: "Khan Bank",
    subtitle: "Largest bank in Mongolia",
    bg: "card__img--khan",
    image: khanImg,
    logo: khanLogo,
    href: "/khan",
  },
  {
    id: "dataschool",
    tag: "Web, Branding",
    title: "Data-School.mn",
    subtitle: "Online learning platform",
    bg: "card__img--dataschool",
    image: dataschoolImg,
    logo: dataschoolLogo,
    href: "/dataschool",
  },
  {
    id: "letsread",
    tag: "Mobile app",
    title: "Let's Read",
    subtitle: "Online book reading platform for kids",
    bg: "card__img--letsread",
    image: LetsreadImg,
    logo: LetsreadLogo,
    href: "/letsread",
  },
];

export default function FeaturedWorks() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="fw">
      <h2 className="fw__heading">Featured works</h2>

      <div className="fw__grid">
        {projects.map((p) => (
          <Link key={p.id} to={p.href} className="card">
            <div className={`card__img ${p.bg}`}>
              {p.logo && (
                <img
                  src={p.logo}
                  alt={`${p.title} logo`}
                  className="card__logo"
                />
              )}
              <img src={p.image} alt={p.title} className="card__photo" />
              <span className="card__tag">{p.tag}</span>
            </div>

            <div className="card__body">
              <div className="card__info">
                <span className="card__title">{p.title}</span>
                <span className="card__sub">{p.subtitle}</span>
              </div>
              <div className="card__arrow">
                <ArrowDiagonal />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}