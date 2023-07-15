import { useState } from "react";

export default function EateryCategoryPage() {
  const [categoryName, setCategoryName] = useState([]);
  const [typedValue, setTypedValue] = useState("")

  const handleChange = (evt) => {
    setTypedValue(evt.target.value);
  };
  const handleSubmit = (evt) => {
    setCategoryName([...categoryName, typedValue]);
    setTypedValue("")
    console.log(JSON.stringify(categoryName));
  };
  return (
    <>
      <h1>To add eatery categories</h1>
      <input type="text" value={typedValue} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Add an eatery</button>
      {categoryName.map((category, index) => (
        <p key={index}>{category}</p>
      ))}
    </>
  );
}
