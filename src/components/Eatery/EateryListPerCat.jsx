export default function EateryListPerCat({
  existingEateries,
  handleEatCatSelect,
  existingCategories,
}) {
  return (
    <div className="section-container">
      <h2>View eateries per category:</h2>
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
      {existingEateries.map((existingEatery, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div>
            <img
              src={existingEatery.image}
              alt="eatery"
              width="50"
              height="200"
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{existingEatery.name}</h5>
            <p className="card-title">{existingEatery.category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
