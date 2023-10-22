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
              <a className="footer-link" href="javascript:void(0)">
                <PiFacebookLogoDuotone className="footer-icon" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="javascript:void(0)">
                <PiInstagramLogo className="fooer-icon" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="javascript:void(0)">
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
            <a className="footer-link" href="javascript:void(0)">
              415-201-6370
            </a>
            <br />
            <a className="footer-link" href="javascript:void(0)">
              hello@zenfood.com
            </a>
          </address>
        </div>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Create account
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Sign in
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                IOS app
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                About Zenfood
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                For Business
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Cooking partners
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav-col">
          <p className="footer-title">Account</p>
          <ul className="nav-list">
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Recipe directory
              </a>
            </li>
            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
                Help center
              </a>
            </li>

            <li className="nav-el">
              <a className="footer-link" href="javascript:void(0)">
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
