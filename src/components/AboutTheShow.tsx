const AboutTheShow = () => {
  return (
    <div className="w-full bg-primary h-fit py-32 my-14 flex flex-col md:flex-row items-start flex-1 px-8 sm:px-14 gap-y-6 md:gap-x-32">
      {/* left section */}
      <div className="flex-[0.3] flex flex-col space-y-4">
        <div className="relative">
          <div className="w-full h-6 bg-white absolute -top-2 -left-2 z-0"></div>

          <div className="relative z-20">
            {" "}
            {/* Added 'relative' here */}
            <p className="text-black text-2xl font-gilroy-extra-bold uppercase ">
              ABOUT THE SHOW
            </p>
          </div>
        </div>

        <div className="text-black text-3xl md:text-4xl mt-4 uppercase leading-normal font-metropolis">
          Get into the minds of breakthrough business leaders & entrepreneurs
        </div>
      </div>

      {/* right section */}
      <div className="flex-[0.7]">
        <p className="font-metropolis text-lg md:text-xl leading-relaxed">
          Jonaki Vibes is a podcast that brings honest conversations, inspiring stories, and real discussions on social issues, culture, and community change. We highlight voices that matter and shine a light on the people shaping Assam’s tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutTheShow;
