import Test from "./Test";
import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/*<section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>/*/}
      <section id="About">
        <Parallax text="Who Am I?" />
      </section>
      <section>
      <About/>
      </section>
      <section id="Portfolio">
        <Parallax text="What We Do?" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
