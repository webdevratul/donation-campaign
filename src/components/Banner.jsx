import "../assets/css/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content text-center">
        <h2 className="text-[#0B0B0B] text-2xl md:text-4xl font-bold pb-8">
          I Grow By Helping People In Need
        </h2>
        <div>
          <input
            type="text"
            className="w-[50%] px-2 py-2 border-none outline-none rounded-l-lg"
          />
          <button className="bg-[#FF444A] py-2 px-4 text-white text-bold rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
