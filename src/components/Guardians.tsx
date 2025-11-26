import { IoChevronBackSharp } from "react-icons/io5";
import { useRef } from "react";
import { motion } from "framer-motion";

const GuardianData = [
  {
    image:
      "https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154953e15eaf2c_anna-elwart.webp",
    name: "Anna Elwart",
    title: "CEO",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6fd7d4f269b79c769_micha197130-mazur.webp",
    name: "Michael Mazur",
    title: "CTO",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154951e25eaf2d_micha197130-warda.webp",
    name: "Michael Warda",
    title: "CMO",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154953e15eaf2c_anna-elwart.webp",
    name: "Anna Elwart",
    title: "CEO",
  },
  {
    image:
      "https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6fd7d4f269b79c769_micha197130-mazur.webp",
    name: "Michael Mazur",
    title: "CTO",
  },
];

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
      <div className="px-14 lg:px-24 w-full flex items-end justify-between">
        {/* heading */}
        <div className="flex flex-col space-y-8">
          <div className="w-[100px] h-[3px] bg-black"></div>
          <p className="text-5xl md:text-7xl font-gilroy-extra-bold text-black">
            Guardians
          </p>
        </div>

        {/* controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={moveLeft}
            className="w-[48px] h-[48px] border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
          >
            <IoChevronBackSharp className="text-xl" />
          </button>

          <button
            onClick={moveRight}
            className="w-[48px] h-[48px] border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200"
          >
            <IoChevronBackSharp className="text-xl rotate-180" />
          </button>
        </div>
      </div>

      <div
        className="flex overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-x-12 ml-14 pr-14 lg:ml-24">
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
