/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Category from "./Category";


const Categorylist = ({ data }) => {
  const { inputValue } = data;

  const inputValueLowerCase = inputValue ? inputValue.toLowerCase() : "";

  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => {
        if (inputValueLowerCase === "health") {
          const healthCategories = data.filter(
            (category) => category.category === "Health"
          );
          setCategory(healthCategories);
        } else if (inputValueLowerCase === "clothing") {
          const ClothingCategories = data.filter(
            (category) => category.category === "Clothing"
          );
          setCategory(ClothingCategories);
        } else if (inputValueLowerCase === "education") {
          const EducationCategories = data.filter(
            (category) => category.category === "Education"
          );
          setCategory(EducationCategories);
        } else if (inputValueLowerCase === "food") {
          const FoodCategories = data.filter(
            (category) => category.category === "Food"
          );
          setCategory(FoodCategories);
        } else {
          setCategory(data);
        }
      });
  }, [inputValue]);

  

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-16 w-[85%] mx-auto">
        {categories.map((category, idx) => (
          <Category category={category} key={idx}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categorylist;
