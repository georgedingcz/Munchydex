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

      <select
        name="categoryType"
        id="categoryType-select"
        onChange={handleEatCatSelect}
      >
        <option value="">Select a category</option>

        {existingCategories.map((existingCategory, index) => (
          <option key={index} value={existingCategory._id}>
            {existingCategory.name}
          </option>
        ))}
      </select>
      <select
        name="categoryType"
        id="categoryType-select"
        onChange={handleEatSelect}
      >
        <option value="">Select an eatery</option>
        {existingEateries.map((existingEatery, index) => (
          <option key={index} value={existingEatery._id}>
            {existingEatery.name}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete eatery</button>
    </form>
  );
}
