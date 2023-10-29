import Home from "./Components/Home/Home";
import About from "./Components/about/about";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Pricing from "./Components/Pricing/Pricing";
import Testimonial from "./Components/Testimonial/Testimonial";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Achievements from "./Components/Achievements/Achievements";
import Footer from "./Components/Footer/Footer";
import CopyRight from "./Components/CopyRight/CopyRight";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Services />
      <Achievements />
      <Work />
      <Pricing />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
