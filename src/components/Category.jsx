import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, color_card_bg, color_category_bg, color_text_and_button_bg } =
    category;

  return (
    <Link to={`/category/${id}`}>
      <div
        style={{
          backgroundColor: color_card_bg,
        }}
        className={`rounded-lg cursor-pointer shadow-md border-2`}
      >
        <img
          className="w-full rounded-t-lg h-[300px]"
          src={category.picture}
          alt=""
        />
        <div
          style={{ color: color_text_and_button_bg }}
          className={`p-6`}
        >
          <div className="w-[90px] text-center">
            <h3
              style={{ backgroundColor: color_category_bg }}
              className={`rounded my-2`}
            >
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
