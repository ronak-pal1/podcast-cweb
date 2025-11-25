import { BsArrowDownLeft } from "react-icons/bs";
import heroImg from "../assets/hero.jpg";
import heroMP4Video from "../assets/hero.mp4";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen flex items-center justify-center relative">
        <Header />

        <div className="absolute bottom-10 right-10 flex items-center space-x-4">
          <BsArrowDownLeft className="text-white text-2xl" />
          <p className="text-white font-permanent-marker text-xl">SCROLL</p>
        </div>

        <div className="w-[70%]">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <source src={heroMP4Video} type="video/mp4" />
          </video>

          <div className="w-full -mt-[300px] flex flex-col items-center space-y-5">
            <p className="text-primary font-permanent-marker text-[40px] ">
              Season Two
            </p>

            <div className="flex flex-col items-center justify-center space-y-1">
              <h1 className="text-[7rem] leading-none text-primary font-gilroy">
                PODCAST
              </h1>
              <h1 className="text-[6rem] leading-none text-white font-gilroy">
                JONAKI
              </h1>
              <h1 className="text-[7rem] leading-none text-primary font-gilroy">
                VIBES
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-2">
        <p className="text-fade text-2xl max-w-xl text-center font-metropolis-extra-light uppercase">
          We talk about design, development, business AND how to reconcile all
          the arguments in IT.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
