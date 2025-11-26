import { FaSpotify, FaYoutube } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

const CircleImgBundle = ({ imgURLs }: { imgURLs: string[] }) => {
  return (
    <div className="flex">
      <img src={imgURLs[0]} className="w-14 h-14 rounded-full z-10" />
      <img
        src={imgURLs[1]}
        className="w-14 h-14 rounded-full -ml-5 z-0 relative"
      />
    </div>
  );
};

const EpisodeCard = ({ theme = "dark" }: { theme?: "light" | "dark" }) => {
  return (
    <div
      className={`w-full  h-fit p-8 md:p-16 relative flex md:flex-row flex-col items-start gap-14 ${
        theme === "light" ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] shrink-0">
        <img
          src="https://cdn.prod.website-files.com/642d8d2499daed761b59cab1/6746e2cc9cc3f946f812fb7a_shots%20(2).png"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <h2
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } font-gilroy-extra-bold text-3xl`}
        >
          Business with a mission, or values ​​in the VC world
        </h2>

        <p className="text-fade2 text-sm font-metropolis-extra-light">
          Małgorzata Walczak on how to combine values ​​with business in the
          world of venture capital. How can we create innovations that impact
          national development?
        </p>

        <div className="flex items-center gap-x-5">
          <CircleImgBundle
            imgURLs={[
              "https://cdn.prod.website-files.com/642d8d2499daed761b59cab1/673325078b12262000f1579e_avatar%20(5).png",
              "https://cdn.prod.website-files.com/642d8d2499daed761b59cab1/648ac402eb8ed148bda04be3_ania-circle.png",
            ]}
          />

          <div className="text-sm text-fade2 font-metropolis-extra-light space-y-1">
            <p>Margaret Walczak (Investment Director at PFR)</p>
            <p>Anna Elwart (CEO)</p>
          </div>
        </div>

        <div
          className={`${
            theme === "light" ? "text-black" : "text-primary"
          } flex items-center gap-x-7 mt-4`}
        >
          <FaSpotify className="text-4xl " />
          <FaYoutube className="text-4xl" />
          <SiApplepodcasts className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

const LatestEpisodes = () => {
  return (
    <div className="w-full my-32 flex justify-center items-center">
      <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-center space-y-10">
        {/* heading */}
        <div className="w-full space-y-10">
          <div className="w-[200px] h-[3px] bg-white"></div>
          <p className="text-white font-gilroy-extra-bold  text-5xl md:text-7xl">
            The latest episode
          </p>
        </div>

        {/* latest episodes banner */}
        <div className="w-full flex flex-col space-y-6">
          <EpisodeCard theme="light" />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
        </div>

        <div className="w-full flex justify-center mt-8">
          <button className="bg-primary border border-primary text-black px-8 py-3 font-semibold rounded-sm text-base hover:scale-105 transition-transform cursor-pointer">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestEpisodes;
