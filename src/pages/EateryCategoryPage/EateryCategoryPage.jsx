import { useState } from "react";

export default function EateryCategoryPage({category, setCategory}) {
  const handleChange = (evt) => {
    setCategory({
      ...category,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setCategory({ ...category });
    console.log(JSON.stringify(category));
    const categoryData = {
        name: category.categoryName,
        image: category.categoryImage,
        briefDesc: category.categoryDesc
    }
    try {
      const response = await fetch("/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
    } catch (err) {
      console.log(err);
    }
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
