import { useState } from "react";

export default function EateryCategoryPage() {
  const [category, setCategory] = useState({
    categoryName: "",
    categoryImage: "",
    categoryDesc: "",
  });

  const handleChange = (evt) => {
    setCategory({
      ...category,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("test");
    setCategory({ category });
  };
  return (
    <>
      <h1>To add eatery categories</h1>
      <form>
        Name:
        <input
          type="text"
          name="categoryName"
          value={category.categoryName}
          onChange={handleChange}
        />
        <br />
        Image URL:
        <input
          type="text"
          name="categoryImage"
          value={category.categoryImage}
          onChange={handleChange}
        />
        <br />
        Description:
        <input
          type="text"
          name="categoryDesc"
          value={category.categoryDesc}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Add an eatery</button>
      </form>

    </>
  );
}
