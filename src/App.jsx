import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
 import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import FeaturesBar from "./components/FeaturesBar";
import OrderBanner from "./components/OrderBanner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
     <FeaturesBar/>
       <MenuSection />
      <About />
    <OrderBanner />
<TestimonialsSection />
 <Footer />
    </>
  );
}

export default App;