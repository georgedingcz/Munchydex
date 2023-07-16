import { useState } from "react";

export default function EateryCategoryPage(props) {
  const handleChange = (evt) => {
    props.setCategory({
      ...props.category,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setCategory({ ...props.category });
    console.log(JSON.stringify(props.category));
  };
  return (
    <>
      <h1>To add eatery categories</h1>
      <form>
        Name:
        <input
          type="text"
          name="categoryName"
          value={props.category.categoryName}
          onChange={handleChange}
        />
        <br />
        Image URL:
        <input
          type="text"
          name="categoryImage"
          value={props.category.categoryImage}
          onChange={handleChange}
        />
        <br />
        Description:
        <input
          type="text"
          name="categoryDesc"
          value={props.category.categoryDesc}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Add an eatery</button>
      </form>
    </>
  );
}
