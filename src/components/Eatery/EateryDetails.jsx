export default function EateryDetails({
  handleCatSelect,
  existingCategories,
  newMegaState,
  handleChange,
}) {
  return (
    <>
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
    </>
  );
}
