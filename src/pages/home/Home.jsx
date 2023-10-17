import ScrollToTop from "../../components/ScrollToTop";
import ChooseUs from "./ChooseUs";
import Dashboard from "./Dashboard";
import Hero from "./Hero";
import Popular from "./Popular";
import Pricing from "./Pricing";
import Products from "./Products";
import WorldWide from "./WorldWide";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Dashboard />
      <Popular />
      <WorldWide />
      <ChooseUs />
      <Pricing />
      <div className={`fixed z-30 bottom-24 right-10 duration-500`}>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;
