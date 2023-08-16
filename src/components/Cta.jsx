function Cta() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta-box">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form action="#" className="cta-form">
              <div>
                <label for="fullname">Full Name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label for="email">Email Adress</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label for="select-where">Where did you hear from us?</label>
                <select id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and Familt</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn-form">Sign Up Now!</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-aria-label="woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
