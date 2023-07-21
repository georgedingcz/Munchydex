export default function DeleteCatForm({
  existingCategories,
  setExistingCategories,
  newMegaState,
  setNewMegaState,
}) {
  const handleCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory._id === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  const handleCatDelete = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
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
    <form className="section-container">
      <h2>Delete eatery categories</h2>
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
      <button onClick={handleCatDelete}>Submit</button>
    </form>
  );
}
