import { IoChevronBackSharp } from "react-icons/io5";
import { useRef } from "react";
import { motion } from "framer-motion";
import hostSaddamHussainImg from "../assets/hosts/saddam-hussain.webp";
import hostRahulShaImg from "../assets/hosts/rahul-sha.webp";
import hostSimonChoudhuryImg from "../assets/hosts/simon-choudhury.webp";
import hostRajatSarkarImg from "../assets/hosts/rajat-sarkar.webp";

const GuardianData = [
  {
    image: hostSaddamHussainImg,
    name: "Saddam Hussain",
    title: "Social Worker • Businessman",
  },
   {
    image: hostRajatSarkarImg,
    name: "Rajat Sarkar",
    title: "Content Creator",
  },
  {
    image: hostSimonChoudhuryImg,
    name: "Simon Choudhury",
    title: "Digital Marketer • Social Worker",
  },
  {
    image: hostRahulShaImg,
    name: "Rahul Sha",
    title: "Social Worker • Businessman",
  },
 
]

const GuardianCard = ({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-[379px] h-[600px] relative"
    >
      <img src={image} className="w-full h-full object-cover" />

      <div className="absolute bottom-5 left-5">
        <p className="text-primary text-3xl font-permanent-marker">{name}</p>
        <p className="text-white text-xl font-permanent-marker">{title}</p>
      </div>
    </motion.div>
  );
};

const Guardians = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const moveLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -379,
    });
  };

  const moveRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 379,
    });
  };

  return (
    <div className="w-full flex flex-col bg-primary h-fit py-24 gap-y-8">
      {/* heading and controls */}
      <div className="px-8 sm:px-14 lg:px-24 w-full flex items-end justify-between">
        {/* heading */}
        <div className="flex flex-col space-y-8">
          <div className="w-[100px] h-[3px] bg-black"></div>
          <p className="text-4xl sm:text-5xl md:text-7xl font-gilroy-extra-bold text-black">
            Our Hosts
          </p>
        </div>

        {/* controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={moveLeft}
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
          >
            <IoChevronBackSharp className="text-lg sm:text-xl" />
          </button>

          <button
            onClick={moveRight}
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
          >
            <IoChevronBackSharp className="text-lg sm:text-xl rotate-180" />
          </button>
        </div>
      </div>

      <div
        className="flex overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-x-12 ml-8 sm:ml-14 pr-14 lg:ml-24">
          {GuardianData.map((guardian, index) => (
            <GuardianCard
              key={index}
              image={guardian.image}
              name={guardian.name}
              title={guardian.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guardians;
