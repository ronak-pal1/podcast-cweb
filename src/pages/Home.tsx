import AboutTheShow from "../components/AboutTheShow";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Guardians from "../components/Guardians";
import HeroSection from "../components/HeroSection";
import LatestEpisodes from "../components/LatestEpisodes";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutTheShow />
      <LatestEpisodes />
      <Guardians />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
