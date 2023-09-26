import { useState } from "react";
import Banner from "./Banner";
import Categorylist from "./Categorylist";

const Home = () => {
  const [data, setData] = useState({});

  const handleButtonClick = (inputValue) => {
    setData({ ...data, inputValue });
  };

  return (
    <div>
      <Banner handleButtonClick={handleButtonClick}></Banner>
      <Categorylist data={data}></Categorylist>
    </div>
  );
};

export default Home;
