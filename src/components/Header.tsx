import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-montserrat mb-2">
          Наш код вашей креативности
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
