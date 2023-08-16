import logo from "../img/zenfood-logo.png";
import { PiList, PiX } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();
  const [isInterSecting, setIsIntersecting] = useState(true);

  // // *************METHOD-1-**************

  // const headerRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = (entries) => {
  //     if (!entries[0].isIntersecting) {
  //       setIsIntersecting(false);
  //     } else {
  //       setIsIntersecting(true);
  //     }
  //   };

  //   const observer = new IntersectionObserver(handleScroll, {
  //     root: null, // viewport
  //     rootMargin: "500px",
  //     threshold: 0,
  //   });

  //   if (headerRef.current) {
  //     observer.observe(headerRef.current);
  //   }

  //   // Cleanup the observer on component unmount
  //   return () => {
  //     if (headerRef.current) {
  //       observer.unobserve(headerRef.current);
  //     }
  //   };
  // }, []);

  // ...

  // *************METHOD-2-**************
  // const { ref: headerRef, inView: isInterSecting } = useInView({
  //   threshold: 0,
  //   rootMargin: "600px 0px 0px 0px",
  // });

  // ************* METHOD-3-************

  useEffect(() => {
    function changeNav() {
      if (window.scrollY > 690) {
        setIsIntersecting(false);
      } else {
        setIsIntersecting(true);
      }
    }
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      toggleNav();
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.toggle("nav-open");
  };
  return (
    <header className={!isInterSecting ? "header sticky" : "header "}>
      <a href="#">
        <img className="logo" src={logo} alt="zenfood logo" />
      </a>
      <nav ref={navRef}>
        <ul className="main-nav-list  ">
          <li>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "how")}
              className="main-nav-link"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#m"
              onClick={(e) => scrollToSection(e, "meals")}
              className="main-nav-link"
            >
              Meals
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "test")}
              className="main-nav-link"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="main-nav-link"
            >
              Pricings
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "cta")}
              className="main-nav-link nav-last"
            >
              Try for free!
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={toggleNav}>
        <PiList
          className={
            isNavOpen
              ? "icon-nav icon-open display-close"
              : "icon-nav icon-open"
          }
        />
        <PiX
          className={
            isNavOpen
              ? "icon-nav icon-close display-open"
              : "icon-nav icon-close"
          }
        />
      </button>
    </header>
  );
}

export default Header;
