import {
  PiXBold,
  PiCheckBold,
  PiInfinity,
  PiPauseCircle,
  PiLeaf,
} from "react-icons/pi";
import { IoNutritionOutline } from "react-icons/io5";

function Pricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container ">
        <span className="sub-heading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan pricing-plan-starter">
          <header className="plan-header">
            <p className="plan-name">Starter: </p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's just $13 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>1 Meal per day</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Order from 11 am to 9 pm</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <PiXBold className="list-icon" />
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full margin-right">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan-complete">
          <header className="plan-header">
            <p className="plan-name"> Complete: </p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month.That's just $11 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>
                <strong>2 Meal</strong> per day
              </span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Free delivery</span>
            </li>
            <li className="list-item">
              <PiCheckBold className="list-icon" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full margin-right">
              Start eating well
            </a>
          </div>
        </div>
      </div>
      <div className="container ">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plan includes:
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        <div className="feature">
          <PiInfinity className="feature-icon" />
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <IoNutritionOutline className="feature-icon" />
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <PiLeaf className="feature-icon" />
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <PiPauseCircle className="feature-icon" />
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
