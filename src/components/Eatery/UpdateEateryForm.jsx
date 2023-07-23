export default function UpdateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  existingEateries,
  forEateryFetch,
  setForEateryFetch,
  handleEatSelect,
}) {
  const handleUpdateEat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.eateryID;
    const updatedEatData = {
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEatData),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setForEateryFetch(!forEateryFetch);
  };
  return (
    <form className="section-container">
      <h2>Update eatery</h2>
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
        onClick={handleUpdateEat}
      >
        Update an eatery
      </button>
    </form>
  );
}
