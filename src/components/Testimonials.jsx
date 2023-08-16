function Testimonials() {
  return (
    <section className="section-testimonials " id="test">
      <div className="testimonials-container ">
        <span className="sub-heading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={require("../img/customers/ben.jpg")}
              alt="customer photo"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={require("../img/customers/dave.jpg")}
              alt="customer photo"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.{" "}
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={require("../img/customers/steve.jpg")}
              alt="customer photo"
            />
            <blockquote className="testimonial-text">
              ZenFood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!{" "}
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>
          <figure className="testimonial">
            <img
              className="testimonial-img"
              src={require("../img/customers/hannah.jpg")}
              alt="customer photo"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery ">
        {Array.from({ length: 12 }, (_, index) => (
          <figure key={index} className="gallery-items">
            <img
              className="gallery-item"
              src={require(`../img/gallery/gallery-${index + 1}.jpg`)}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
