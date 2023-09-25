import { useEffect, useState } from "react";
import Category from "./Category";

const Categorylist = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-16 w-[85%] mx-auto">
      {categories.map((category, idx) => (
        <Category category={category} key={idx}></Category>
      ))}
    </div>
  );
};

export default Categorylist;
