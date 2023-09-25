import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCategories } from "../utility/localstorege";

const Donation = () => {
  const categories = useLoaderData();

  const [appliedCategroy, setAppliedCategory] = useState([]);

  useEffect(() => {
    const storeCategoryIds = getStoredCategories();

    if (categories.length > 0) {
      const category = categories.filter((category) =>
        storeCategoryIds.includes(category.id)
      );
      setAppliedCategory(category);
    }
  }, [categories]);

  return (
    <div>
      <div className="w-[83%] mx-auto mt-52 md:mt-40 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {appliedCategroy.map((category, idx) => (
          <div
            key={idx}
            className={`flex items-center ${category.color_card_bg} rounded shadow-xl border-2 pr-2 md:p-0`}
          >
            <div>
              <img
                className="h-[210px] w-[250px] bg-black rounded"
                src={category.picture}
                alt=""
              />
            </div>
            <div className="ml-4">
              <h1
                className={`${category.color_category_bg} w-[100px] text-center rounded ${category.color_text_and_button_bg}`}
              >
                {category.category}
              </h1>
              <h2 className="my-3 text-2xl font-bold">
                Clean water for children
              </h2>
              <h2 className={`${category.color_text_and_button_bg} font-bold`}>
                ${category.price}
              </h2>
              <button
                className={`py-2 px-4 my-3 text-white font-bold rounded ${category.btn_bg}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-40 h-20 mx-auto mt-4 mb-14">
        <button className="bg-[#009444] px-8 py-3 rounded-lg text-white text-xl font-bold shadow-xl">
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Donation;
