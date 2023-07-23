export default function CreateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  setNewMegaState,
  existingEateries,
  setExistingEateries,
  forEateryFetch,
  setForEateryFetch,
}) {
  const handleCreateEatery = async (evt) => {
    evt.preventDefault();
    setNewMegaState({ ...newMegaState });
    console.log(JSON.stringify(newMegaState));
    const eateryData = {
      category: newMegaState.categoryID,
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    setExistingEateries([...existingEateries, eateryData]);
    try {
      await fetch("/eateries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryID: eateryData.category,
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
    setForEateryFetch(!forEateryFetch);
  };

  return (
    <form className="section-container">
      <h2>Create eatery</h2>
      <div className="mb-3">
        <label for="eateryCategory" className="form-label">
          Category
        </label>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatCatSelect}
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
        <label for="eateryName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="eateryName"
          value={newMegaState.eateryName}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="eateryLocation" className="form-label">
          Location
        </label>
        <input
          type="text"
          name="eateryLocation"
          value={newMegaState.eateryLocation}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="eateryImage" className="form-label">
          Image
        </label>
        <input
          type="text"
          name="eateryImage"
          value={newMegaState.eateryImage}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleCreateEatery}
      >
        Create an eatery
      </button>
    </form>
  );
}
