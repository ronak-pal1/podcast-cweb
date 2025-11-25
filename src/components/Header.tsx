const Header = () => {
  return (
    <header className="w-full py-8 flex items-center justify-center absolute top-0 left-0">
      <div className="w-[60%] flex items-center justify-between">
        <div></div>

        <div className="flex items-center space-x-4">
          <button className="bg-transparent border border-white text-white px-8 py-3 text-base font-semibold rounded-sm">
            Contact us
          </button>
          <button className="bg-primary border border-primary text-black px-8 py-3 text-base font-semibold rounded-sm">
            Listen now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
