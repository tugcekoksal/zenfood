import meal1 from "../img/meals/meal-1.jpg";
import meal2 from "../img/meals/meal-2.jpg";
import { PiForkKnife, PiFire, PiStar, PiCheckBold } from "react-icons/pi";

function Meals() {
  return (
    <section className="section-meals" id="meals">
      <div className="container text-align">
        <span className="sub-heading">Meals</span>
        <h2 className="heading-secondary">
          ZenFood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols">
        <div className="meal">
          <img src={meal1} alt="gyozas" className="meal-img" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>

            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                {" "}
                <PiFire className="meal-icon" />
                <span>
                  <strong>650</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <PiForkKnife className="meal-icon" />
                <span>
                  {" "}
                  NutriScore &reg; <strong>74</strong>{" "}
                </span>
              </li>
              <li className="meal-attribute">
                <PiStar className="meal-icon" />
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal">
          <img src={meal2} alt="gyozas" className="meal-img" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>

            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                {" "}
                <PiFire className="meal-icon" />
                <span>
                  <strong>400</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <PiForkKnife className="meal-icon" />
                <span>
                  {" "}
                  NutriScore &reg; <strong>92</strong>{" "}
                </span>
              </li>
              <li className="meal-attribute">
                <PiStar className="meal-icon" />
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Keto</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
