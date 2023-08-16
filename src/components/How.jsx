import app1 from "../img/app/app-screen-1.png";
import app2 from "../img/app/app-screen-2.png";
import app3 from "../img/app/app-screen-3.png";

function How() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="sub-heading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/*************** STEP01 ***********************/}
        <div className="text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not):
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Zenfood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>

        <div className="img-box">
          <img className="step-img" src={app1} alt=" application image" />
        </div>
        {/*************** STEP02 ***********************/}
        <div className="img-box">
          <img className="step-img" src={app2} alt=" application image" />
        </div>
        <div className="text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan:</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        {/*************** STEP013***********************/}
        <div className="text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">
            Receive meals at convenient time:
          </h3>
          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="img-box">
          <img className="step-img" src={app3} alt=" application image" />
        </div>
      </div>
    </section>
  );
}

export default How;
