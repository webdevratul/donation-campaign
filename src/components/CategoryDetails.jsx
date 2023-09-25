import { useLoaderData, useParams } from "react-router-dom";
import "../assets/css/CategoryDetails.css";
import { saveCategory } from "../utility/localstorege";

const CategoryDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const category = categories.find((category) => category.id === idInt);

  const handleCategoryData = () => {
    saveCategory(idInt);
  };

  return (
    <div className="w-[75%] mx-auto mt-56 md:mt-36">
      <div className="category">
        <img
          className="w-full h-[50vh] md:h-[80vh] my-8 rounded-lg"
          src={category.picture}
          alt=""
        />
      </div>
      <button
        onClick={handleCategoryData}
        className={`${category.btn_bg} text-white px-6 py-3 rounded absolute top-[86%] z-10 left-[15%] font-bold text-xl`}
      >
        Donate ${category.price}
      </button>
      <h2 className="text-2xl font-bold pb-4">{category.title}</h2>
      <p className="pb-12 text-justify">{category.description}</p>
    </div>
  );
};

export default CategoryDetails;
