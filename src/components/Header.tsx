const Header = () => {
  return (
    <header className="w-full py-8 flex items-center justify-center absolute top-0 left-0 z-50">
      <div className="w-[60%] flex items-center justify-between">
        <div>
          <img src="https://cdn.prod.website-files.com/6357ba166a2a7d36261b1875/6357bbe62b80e459e24367da_Iteracja%20logo-1.svg" alt="Jonaki Vibes Logo" className="w-[120px] object-contain"/>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-transparent border border-white text-white px-8 py-3 text-base font-semibold rounded-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
            Contact us
          </button>
          <button className="bg-primary border border-primary text-black px-8 py-3 text-base font-semibold rounded-sm cursor-pointer transition-colors">
            Listen now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
