export default function DeleteEateryForm({
  handleEatCatSelect,
  handleEatSelect,
  existingCategories,
  existingEateries,
  setExistingEateries,
  forEateryFetch,
  setForEateryFetch,
  newMegaState,
}) {
  const handleDelete = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.eateryID;
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setExistingEateries(
      existingEateries.filter((eatery) => eatery._id !== evt.target.value)
    );
    setForEateryFetch(!forEateryFetch);
  };
  return (
    <form className="section-container">
      <h2>Delete eatery</h2>

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
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select an eatery</option>
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleDelete}>
        Delete eatery
      </button>
    </form>
  );
}
