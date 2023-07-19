export default function EateryDetails({
  handleCatSelect,
  existingCategories,
  newEatery,
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
          <option key={index} value={existingCategory.name}>
            {existingCategory.name}
          </option>
        ))}
      </select>
      Name:
      <input
        type="text"
        name="eateryName"
        value={newEatery.eateryName}
        onChange={handleChange}
      />
      <br />
      Location:
      <input
        type="text"
        name="eateryLocation"
        value={newEatery.eateryLocation}
        onChange={handleChange}
      />
      <br />
      Image:
      <input
        type="text"
        name="eateryImage"
        value={newEatery.eateryImage}
        onChange={handleChange}
      />
      <br />
    </>
  );
}
