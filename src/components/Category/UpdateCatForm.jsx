export default function UpdateCatForm({
  newMegaState,
  existingCategories,
  handleChange,
  forCategoryFetch,
  setForCategoryFetch,
  setNewMegaState,
}) {
  const handleUpdateCatSelect = async (evt) => {
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
      <div className="mb-3">
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleUpdateCatSelect}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </select>
      </div>
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
        onClick={handleUpdateCat}
      >
        Submit
      </button>
    </form>
  );
}
