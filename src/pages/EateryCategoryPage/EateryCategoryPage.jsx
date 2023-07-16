import { useEffect, useState } from "react";

export default function EateryCategoryPage({ newCategory, setNewCategory }) {

  const handleChange = (evt) => {
    setNewCategory({
      ...newCategory,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setNewCategory({ ...newCategory });
    console.log(JSON.stringify(newCategory));
    const categoryData = {
      name: newCategory.categoryName,
      image: newCategory.categoryImage,
      briefDesc: newCategory.categoryDesc,
    };
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
          value={newCategory.categoryName}
          onChange={handleChange}
        />
        <br />
        Image URL:
        <input
          type="text"
          name="categoryImage"
          value={newCategory.categoryImage}
          onChange={handleChange}
        />
        <br />
        Description:
        <input
          type="text"
          name="categoryDesc"
          value={newCategory.categoryDesc}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Add an eatery</button>
      </form>
    </>
  );
}
