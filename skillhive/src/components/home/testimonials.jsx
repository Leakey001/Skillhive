import React from "react";
import "./testimonials.css";

const testimonialsData = [
  {
    quote:
      "Thanks to Skillive, my workflow has become much simpler and I can spend my time where I'm most useful.",
    author: "Marie Ekeland",
    role: "Co-founder at Daphni",
    rating: 5
  },
  {
    quote:
      "Having someone who can jump on things when I'm running behind, sick, or absent is priceless.",
    author: "Meghna Mann",
    role: "COO at Mati",
    rating: 5
  },
  {
    quote:
      "Hiring support always felt like too much work, until Skillive made it easy.",
    author: "Ilan Abehassera",
    role: "Co-founder at Willo",
    rating: 5
  },
  {
    quote:
      "My assistant through Skillive is amazing, and the platform gives me all the visibility I need.",
    author: "Kevin H",
    role: "VP Engineering at Instacart",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__intro">
        <h2 id="testimonials-heading" className="testimonials__title">
          Trusted by a growing community
        </h2>
        <p className="testimonials__subtitle">
          Thousands of professionals, teams, and freelancers use Skillive to
          simplify their workflows and get more done every day.
        </p>
      </div>

      <div className="testimonials__grid">
        {testimonialsData.map((t, i) => (
          <article className="testimonial-card" key={i}>
            <blockquote className="testimonial-card__quote">
              <span className="testimonial-card__quote-mark">“</span>
              <span>{t.quote}</span>
            </blockquote>

            <div className="testimonial-card__bottom">
              <div
                className="testimonial-card__rating"
                aria-label={`${t.rating} out of 5 stars`}
                title={`${t.rating} out of 5`}
              >
                <span className="rating-value">{t.rating}.0</span>
                <span className="rating-stars" aria-hidden="true">
                  ★★★★★
                </span>
              </div>

              <div className="testimonial-card__author">
                <div className="author-name">{t.author}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
