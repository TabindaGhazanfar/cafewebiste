import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import FeaturesBar from "./components/FeaturesBar";
import OrderBanner from "./components/OrderBanner";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/db.json", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Dot notation or bracket notation to safeguard data
        setMenuData(data?.menu || []);
        setTestimonialsData(data?.testimonials || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch Error:", err);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesBar />
      <MenuSection menuItemsData={menuData} isLoading={loading} />
      <About />
      <OrderBanner />
      <TestimonialsSection testimonialsDataFromDb={testimonialsData} isLoading={loading} />
      <Footer />
    </>
  );
}

export default App;