import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id } = category;

  return (
    <Link to={`/category/${id}`}>
      <div
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
    </Link>
  );
};

export default Category;
