export default function CreateCatForm({
  newMegaState,
  setNewMegaState,
  existingCategories,
  setExistingCategories,
  handleChange,
}) {
  const handleCreateCat = async (evt) => {
    evt.preventDefault();
    const categoryData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
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
    setNewMegaState({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
  };

  return (
    <form className="section-container">
      <h2>Add eatery categories</h2>
      <div className="mb-3">
        <label for="categoryName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="categoryName"
          value={newMegaState.categoryName}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="categoryImage" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          name="categoryImage"
          value={newMegaState.categoryImage}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="categoryDesc" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="categoryDesc"
          value={newMegaState.categoryDesc}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleCreateCat}
      >
        Submit
      </button>
    </form>
  );
}
