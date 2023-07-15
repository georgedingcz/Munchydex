import { useState } from "react";

export default function EateryCategoryPage() {
  const [categoryName, setCategoryName] = useState([]);
  const [categoryImage, setCategoryImage] = useState([]);
  const [categoryDesc, setCategoryDesc] = useState([]);

  const [nameTypedValue, setNameTypedValue] = useState("");
  const [imageTypedValue, setImageTypedValue] = useState("");
  const [descTypedValue, setDescTypedValue] = useState("");

  const handleNameChange = (evt) => {
    setNameTypedValue(evt.target.value);
  };

  const handleImageChange = (evt) => {
    setImageTypedValue(evt.target.value);
  };

  const handleDescChange = (evt) => {
    setDescTypedValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setCategoryName([...categoryName, nameTypedValue]);
    setCategoryImage([...categoryImage, imageTypedValue]);
    setCategoryDesc([...categoryDesc, descTypedValue]);

    setNameTypedValue("");
    setImageTypedValue("");
    setDescTypedValue("");
  };
  return (
    <>
      <h1>To add eatery categories</h1>
      <form>
        Name:
        <input type="text" value={nameTypedValue} onChange={handleNameChange} />
        <br />
        Image URL:
        <input
          type="text"
          value={imageTypedValue}
          onChange={handleImageChange}
        />
        <br />
        Description:
        <input type="text" value={descTypedValue} onChange={handleDescChange} />
        <br />
        <button onClick={handleSubmit}>Add an eatery</button>
      </form>

      <div>
        {categoryName.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
        {categoryImage.map((image, index) => (
          <p key={index}>{image}</p>
        ))}
        {categoryDesc.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </>
  );
}
