const Guardians = () => {
  return (
    <div className="w-full flex flex-col bg-primary h-fit py-24 gap-y-8">
      {/* heading and controls */}
      <div className="px-24 w-full flex items-baseline justify-between">
        {/* heading */}
        <div className="flex flex-col space-y-8">
            <div className="w-[100px] h-[3px] bg-black"></div>
            <p className="text-7xl font-gilroy-extra-bold text-black">Guardians</p>
        </div>

        {/* controls */}
        <div></div>
      </div>


      <div className="flex overflow-x-scroll no-scrollbar">

        <div className="flex gap-x-12 ml-24 ">
 <div className="w-[379px] h-[600px] relative">
            <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154953e15eaf2c_anna-elwart.webp" className="w-full h-full object-cover"/>


            <div className="absolute bottom-5 left-5">
                <p className="text-primary text-3xl font-permanent-marker">Anna Elwart</p>
                <p className="text-white text-xl font-permanent-marker">CEO</p>
            </div>
        </div>

         <div className="w-[379px] h-[600px] relative">
            <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6fd7d4f269b79c769_micha197130-mazur.webp" className="w-full h-full object-cover"/>


            <div className="absolute bottom-5 left-5">
                <p className="text-primary text-3xl font-permanent-marker">Anna Elwart</p>
                <p className="text-white text-xl font-permanent-marker">CEO</p>
            </div>
        </div>

         <div className="w-[379px] h-[600px] relative">
            <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154951e25eaf2d_micha197130-warda.webp" className="w-full h-full object-cover"/>


            <div className="absolute bottom-5 left-5">
                <p className="text-primary text-3xl font-permanent-marker">Anna Elwart</p>
                <p className="text-white text-xl font-permanent-marker">CEO</p>
            </div>
        </div>
         <div className="w-[379px] h-[600px] relative">
            <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/637d67b6ce154951e25eaf2d_micha197130-warda.webp" className="w-full h-full object-cover"/>


            <div className="absolute bottom-5 left-5">
                <p className="text-primary text-3xl font-permanent-marker">Anna Elwart</p>
                <p className="text-white text-xl font-permanent-marker">CEO</p>
            </div>
        </div>
        </div>

       

      </div>
    </div>
  );
};

export default Guardians;
