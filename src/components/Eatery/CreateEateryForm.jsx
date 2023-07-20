export default function CreateEateryForm({
  existingCategories,
  handleCatSelect,
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
      <button onClick={handleCreateEatery}>Create an eatery</button>
    </form>
  );
}
