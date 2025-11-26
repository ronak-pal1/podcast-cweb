import { FaFacebookSquare } from "react-icons/fa";
import { FaSpotify, FaSquareInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center ">
      <div className="w-[90%] lg:w-[80%] border-t-[3px] border-t-primary flex flex-col space-y-24 py-24">
        <div className="w-full flex md:flex-row flex-col gap-y-10 md:gap-y-0 items-start justify-between">
          <div className="">
            <h3 className="text-base font-metropolis-extra-light text-white">
              Make a project with us
            </h3>
            <p className="text-xl font-gilroy-extra-bold text-primary">
              jonakivibes@gmail.com
            </p>
          </div>

          <div className="">
            <h3 className="text-base font-metropolis-extra-light text-white">
              Join us
            </h3>
            <p className="text-xl font-gilroy-extra-bold text-primary">
              jonakivibes@gmail.com
            </p>
          </div>

          <div className="">
            <h3 className="text-base font-metropolis-extra-light text-white">
              Visit us!
            </h3>
            <p className="text-xl font-gilroy-extra-bold text-primary">
              Bongaigaon, Assam, India
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">

          <div>
            <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/6357bbe62b80e459e24367da_Iteracja%20logo-1.svg" alt="Jonaki Vibes Logo" className="w-[100px] object-contain"/>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-3 text-4xl text-primary">
                <FaSquareInstagram className="hover:scale-105 transition-transform duration-200 cursor-pointer" />
                <FaFacebookSquare className="hover:scale-105 transition-transform duration-200 cursor-pointer" />
                <FaSpotify className="hover:scale-105 transition-transform duration-200 cursor-pointer" />
                <FaYoutube className="hover:scale-105 transition-transform duration-200 cursor-pointer" />
            </div>
            <p className="text-sm font-metropolis-extra-light text-fade2">
              © 2025 Jonaki Vibes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
