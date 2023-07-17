import { useEffect, useState } from "react";

export default function CreateEatCat({
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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setNewCategory({ ...newCategory });
    console.log(JSON.stringify(newCategory));
    const categoryData = {
      name: newCategory.categoryName,
      image: newCategory.categoryImage,
      briefDesc: newCategory.categoryDesc,
    };
    setExistingCategories([...existingCategories, categoryData]);
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
    setNewCategory({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setExistingCategories(
      existingCategories.filter((category) => category._id !== evt.target.value)
    );
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Add eatery categories</h2>
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
            <button value={existingCategory._id} onClick={handleDelete}>
              Delete {existingCategory.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
