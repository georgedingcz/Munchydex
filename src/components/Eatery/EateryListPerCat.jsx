export default function EateryListPerCat({
  existingEateries,
  handleEatCatSelect,
  existingCategories,
}) {
  return (
    <div className="section-container">
      <h2>View eateries per category:</h2>
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
      {existingEateries.map((existingEatery, index) => (
        <div key={index}>
          <div>Name: {existingEatery.name}</div>
          <div>
            <img
              src={existingEatery.image}
              alt="eatery"
              width="50"
              height="50"
            />
          </div>
          <div>Category: {existingEatery.category.name}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
