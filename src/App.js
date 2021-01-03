import { Element } from "react-scroll";
import "./App.css";
import Base from "./Base";
import ContactSection from "./component/contact-section/ContactSection";
import Location from "./component/location/Location";
import Product from "./component/product/Product";
import Special from "./component/special/Special";
import Index from "./landing/Index";

function App() {
  return (
    <Base scroll>
      <div className="App">
        <Element name="home">
          <Index />
        </Element>

        <Element name="special">
          <Special />
        </Element>
        <Element name="product">
          <Product />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </div>
    </Base>
  );
}

export default App;
