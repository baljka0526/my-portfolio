import "./MyOffers.css";


const offers = [
  {
    id: "uxui",
    name: "UX/UI Project",
    desc: "Web, App, Complex systems anything.",
    price: "from 2,499$",
    items: [
      "UI/UX design tailored to your product goals and users",
      "Wireframes, user flows, and clickable prototypes",
      "Clean, functional interfaces focused on usability",
      "Consistent design system to keep your product scalable",
      "End-to-end design from idea to developer-ready screens",
    ],
  },
  {
    id: "consulting",
    name: "Design consulting or Audit",
    desc: "What you need? Actually, what you don't need?",
    price: "from 999$",
    items: [
      "UX/UI consulting to improve your product experience",
      "Design audit to find usability issues and gaps",
      "Review of user flows and journeys",
      "Clear, actionable improvement suggestions",
      "Consistency check across all screens",
      "Practical feedback you can implement right away",
    ],
  },
];

export default function MyOffers() {
  return (
    <section className="mo">
      {/* Heading */}
      <div className="mo__header">
        <h2 className="mo__title">My offers</h2>
        <p className="mo__sub">Straight to the business, right? I'll make it simple.</p>
      </div>

      {/* Cards — badge is absolute inside here, behind first card */}
      <div className="mo__cards">

        {/* Badge tucked behind the first card */}
        <div className="mo__badge">Kind of Bestseller</div>

        {offers.map((o) => (
          <div key={o.id} className="offer">
            <div className="offer__top">
              <div className="offer__meta">
                <span className="offer__name">{o.name}</span>
                <span className="offer__desc">{o.desc}</span>
              </div>
              <span className="offer__price">{o.price}</span>
            </div>

            <div className="offer__divider" />

            <ul className="offer__list">
              {o.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}