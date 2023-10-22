import {
  PiFacebookLogoDuotone,
  PiInstagramLogo,
  PiTwitterLogoDuotone,
} from "react-icons/pi";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container grid grid--5-cols">
        <div className="footer-logo-col">
          <a href="javascript:void(0)" className="footer-logo">
            <img
              src={require("../img/zenfood-logo.png")}
              alt="footer logo"
              className="logo"
            />
          </a>

          <ul className="footer-icons">
            <li>
              <a className="footer-link" href="/#">
                <PiFacebookLogoDuotone className="footer-icon" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                <PiInstagramLogo className="fooer-icon" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                <PiTwitterLogoDuotone className="footer-icon" />
              </a>
            </li>
          </ul>
          <p className="copy-right">
            Copyright &copy; {currentYear} by Zenfood,Inc. All rights reserved.
          </p>
        </div>

        <div className="footer-adress-col">
          <p className="footer-title">Contact us</p>
          <address className="footer-adress">
            <p className="adress">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <a className="footer-link" href="/#">
              415-201-6370
            </a>
            <br />
            <a className="footer-link" href="/#">
              hello@zenfood.com
            </a>
          </address>
        </div>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Create account
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Sign in
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                IOS app
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="/#">
                About Zenfood
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                For Business
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Cooking partners
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Recipe directory
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="/#">
                Help center
              </a>
            </li>

            <li className="nav-el">
              <a className="footer-link" href="/#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
