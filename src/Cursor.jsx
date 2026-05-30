import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const move = (e) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor--work");
        cursor.innerHTML = "See Work";
      });
      card.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor--work");
        cursor.innerHTML = "";
      });
    });

    const hoverables = document.querySelectorAll("button, a");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!cursor.classList.contains("cursor--work")) {
          cursor.classList.add("cursor--hover");
        }
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor--hover");
      });
    });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="custom-cursor"></div>;
}