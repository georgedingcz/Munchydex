export default function DeleteCatForm({
  existingCategories,
  setExistingCategories,
  newMegaState,
  setNewMegaState,
}) {
  const handleCatSelect = async (evt) => {
    setNewMegaState({
      categoryID: evt.target.value,
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
      if (response.ok) {
        // Update the state after successful deletion
        setExistingCategories(
          existingCategories.filter((category) => category._id !== newMegaState.categoryID)
        );
        console.log("Category deleted successfully!");
      } else {
        console.log("Failed to delete the category.");
      }
    } catch (err) {
      console.log(err);
    }
    // setExistingCategories(
    //   existingCategories.filter((category) => category._id !== newMegaState.categoryID)
    // );
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
