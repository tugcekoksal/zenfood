import React from "react";
// import headerimage from "../img/header5.webp";

function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const customerImages = [
    require("../img/customers/customer-6.jpg"),
    require("../img/customers/customer-5.jpg"),
    require("../img/customers/customer-4.jpg"),
    require("../img/customers/customer-3.jpg"),
    require("../img/customers/customer-2.jpg"),
    require("../img/customers/customer-1.jpg"),
  ];
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A nutritious meal delivered to your doorstep every day
          </h1>
          <p className="hero-description">
            Introducing our year-round smart food subscription, personalized for
            you, and the key to well-being. Join thousands of satisfied
            customers!
          </p>
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "cta")}
            className="btn btn-full margin-right"
          >
            Start eating well
          </a>
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "how")}
            className="btn btn-outline"
          >
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-faces">
              {customerImages.map((image, index) => {
                return <img key={index} src={image} alt="customer image" />;
              })}
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-image-box">
          <picture>
            <source srcset={require("../img/header5.webp")} type="img/webp" />
            <source srcset={require("../img/header5.png")} type="img/png" />
            <img
              className="hero-img"
              src={require("../img/header5.webp")}
              alt="healthy meal"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
