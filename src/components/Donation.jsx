import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCategories } from "../utility/localstorege";

const Donation = () => {
  const categories = useLoaderData();

  const [appliedCategroy, setAppliedCategory] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storeCategoryIds = getStoredCategories();

    if (categories.length > 0) {
      const jobsApplied = [];
      for (const id of storeCategoryIds) {
        const job = categories.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedCategory(jobsApplied);
    }
  }, [categories]);

  return (
    <div>
      <div className="w-[83%] mx-auto mt-52 md:mt-40 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {appliedCategroy.slice(0, dataLength).map((category, idx) => (
          <div
            style={{ backgroundColor: category.color_card_bg }}
            key={idx}
            className={`flex items-center rounded shadow-xl border-2 pr-2 md:p-0`}
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
                style={{ backgroundColor: category.color_category_bg }}
                className={`w-[100px] text-center rounded ${category.color_text_and_button_bg}`}
              >
                {category.category}
              </h1>
              <h2 className="my-3 text-2xl font-bold">
                Clean water for children
              </h2>
              <h2
                style={{ color: category.color_text_and_button_bg }}
                className={`font-bold`}
              >
                ${category.price}
              </h2>
              <button
                style={{ backgroundColor: category.color_text_and_button_bg }}
                className={`py-2 px-4 my-3 text-white font-bold rounded`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={` mx-auto w-[15%] my-28 ${
          dataLength < appliedCategroy.length ? "" : "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(appliedCategroy.length)}
          className="bg-[#009444] px-8 py-3 rounded-lg text-white text-xl font-bold shadow-xl"
        >
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Donation;


