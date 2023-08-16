import React from "react";
import Hero from "./components/HeroSection";
import Header from "./components/Header";
import How from "./components/How";
import Featured from "./components/Featured";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <How />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
