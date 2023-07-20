export default function UpdateCatForm({
  newMegaState,
  existingCategories,
  handleChange,
  handleCatSelect,
  forCategoryFetch,
  setForCategoryFetch
}) {
  const handleUpdateCat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    console.log("this thing", JSON.stringify(id));
    const updatedCatData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCatData),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setForCategoryFetch(!forCategoryFetch);
  };
  return (
    <form className="section-container">
      <h2>Update eatery categories</h2>
      <select
        name="categoryType"
        id="categoryType-select"
        onChange={handleCatSelect}
      >
        <option value="">Select a category</option>
        {existingCategories.map((existingCategory, index) => (
          <option key={index} value={existingCategory._id}>
            {existingCategory.name}
          </option>
        ))}
      </select>
      Name:
      <input
        type="text"
        name="categoryName"
        value={newMegaState.categoryName}
        onChange={handleChange}
      />
      <br />
      Image URL:
      <input
        type="text"
        name="categoryImage"
        value={newMegaState.categoryImage}
        onChange={handleChange}
      />
      <br />
      Description:
      <input
        type="text"
        name="categoryDesc"
        value={newMegaState.categoryDesc}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdateCat}>Submit</button>
    </form>
  );
}
