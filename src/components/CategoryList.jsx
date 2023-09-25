import { useEffect, useState } from "react";

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
        <div
          key={idx}
          className={`rounded-lg ${category.color_card_bg} cursor-pointer shadow-md`}
        >
          <img
            className="w-full rounded-t-lg h-[300px]"
            src={category.picture}
            alt=""
          />
          <div className={`p-6 ${category.color_text_and_button_bg}`}>
            <div className="w-[90px] text-center">
              <h3 className={`rounded my-2 ${category.color_category_bg}`}>
                {category.category}
              </h3>
            </div>
            <h2 className="font-bold text-xl">{category.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categorylist;
