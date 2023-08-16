import logo1 from "../img/logos/business-insider.png";
import logo2 from "../img/logos/forbes.png";
import logo3 from "../img/logos/techcrunch.png";
import logo4 from "../img/logos/the-new-york-times.png";
import logo5 from "../img/logos/usa-today.png";

function Featured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">as featured in </h2>
        <div className="logos">
          <img src={logo1} alt="business insider" />
          <img src={logo2} alt="forbes" />
          <img src={logo3} alt="techcrunch" />
          <img src={logo4} alt="the new york times" />
          <img src={logo5} alt="usa today" />
        </div>
      </div>
    </section>
  );
}

export default Featured;
