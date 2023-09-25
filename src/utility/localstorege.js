const getStoredCategories = () => {
  const storedCategoryData = localStorage.getItem("job-applications");
  if (storedCategoryData) {
    return JSON.parse(storedCategoryData);
  }
  return [];
};
const saveCategory = (id) => {
  const storedCategoryData = getStoredCategories();
  const exist = storedCategoryData.find((categoryId) => categoryId === id);

  if (!exist) {
    storedCategoryData.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedCategoryData)
    );
  }
};

export { getStoredCategories, saveCategory };
