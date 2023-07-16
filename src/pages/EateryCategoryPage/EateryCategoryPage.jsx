import { useEffect, useState } from "react";

export default function EateryCategoryPage({ newCategory, setNewCategory }) {
  const [existingCategories, setExistingCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/categories", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setExistingCategories(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

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
      {existingCategories.map((existingCategory, index) => (
        <div key={index}>
          <br />
          <div>Name: {existingCategory.name}</div>
          <img
            src={existingCategory.image}
            alt="category"
            width="50"
            height="50"
          />
          <div>Description: {existingCategory.briefDesc}</div>
          <br />
        </div>
      ))}
    </>
  );
}
