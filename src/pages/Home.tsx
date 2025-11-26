import AboutTheShow from "../components/AboutTheShow";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Guardians from "../components/Guardians";
import HeroSection from "../components/HeroSection";
import LatestEpisodes from "../components/LatestEpisodes";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutTheShow />
      <LatestEpisodes />
      <Guardians />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
