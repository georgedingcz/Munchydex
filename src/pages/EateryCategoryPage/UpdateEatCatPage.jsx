import { useEffect, useState } from "react";

export default function UpdateEatCat({
  newCategory,
  setNewCategory,
  existingCategories,
  setExistingCategories,
}) {

  const handleChange = (evt) => {
    setNewCategory({
      ...newCategory,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleUpdate = async (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    console.log("this thing", JSON.stringify(evt.target.value));
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(categoryData),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCatSelect = async (evt) => {
    console.log("cat selected");
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Update eatery categories</h2>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory.name}>
              {existingCategory.name}
            </option>
          ))}
        </select>
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
        <button onClick={handleUpdate}>Update an eatery</button>
      </form>

      <div className="section-container">
        <h2>Food categories available:</h2>
        {existingCategories.map((existingCategory, index) => (
          <div key={index}>
            <div>Category: {existingCategory.name}</div>
            <div>
              <img
                src={existingCategory.image}
                alt="category"
                width="50"
                height="50"
              />
            </div>
            <div>Description: {existingCategory.briefDesc}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
