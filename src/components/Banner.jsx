import { useState } from "react";
import "../assets/css/Banner.css";

const Banner = ({ handleButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="banner">
      <div className="banner-content text-center">
        <h2 className="text-[#0B0B0B] text-2xl md:text-4xl font-bold pb-8">
          I Grow By Helping People In Need
        </h2>
        <div>
          <input
            type="text"
            placeholder="Search Here..."
            className="w-[50%] px-4 py-3  border outline-none rounded-l-lg"
            onChange={handleInputChange}
          />
          <button
            onClick={() => handleButtonClick(inputValue)}
            className="bg-[#FF444A] py-3 px-6 text-white text-bold rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
