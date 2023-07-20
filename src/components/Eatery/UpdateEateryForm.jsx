export default function UpdateEateryForm({
  existingCategories,
  handleCatSelect,
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
    console.log("this thing", JSON.stringify(id));
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
      <select
        name="categoryType"
        id="categoryType-select"
        onChange={handleEatSelect}
      >
        <option value="">Select an eatery</option>
        {existingEateries.map((existingEatery, index) => (
          <option key={index} value={existingEatery.name}>
            {existingEatery.name}
          </option>
        ))}
      </select>
      Name:
      <input
        type="text"
        name="eateryName"
        value={newMegaState.eateryName}
        onChange={handleChange}
      />
      <br />
      Location:
      <input
        type="text"
        name="eateryLocation"
        value={newMegaState.eateryLocation}
        onChange={handleChange}
      />
      <br />
      Image:
      <input
        type="text"
        name="eateryImage"
        value={newMegaState.eateryImage}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdateEat}>Update an eatery</button>
    </form>
  );
}
