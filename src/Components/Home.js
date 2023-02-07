import "./Home.css";
import LatestSection from "./LatestSection";
import BannerSection from "./BannerSection";
import FoodSection from "./FoodSection";
import Bollywood from "./Bollywood";
import TechnologySection from "./TechnologySection";
import Hollywood from "./Hollywood";
import FitnessSection from "./FitnessSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <LatestSection />
      <Bollywood />
      <TechnologySection />
      <Hollywood />
      <FitnessSection />
      <FoodSection />
    </>
  );
};

export default Home;
