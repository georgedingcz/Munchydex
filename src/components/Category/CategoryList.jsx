export default function CategoryList({ existingCategories }) {
  return (
    <div className="section-container">
        <h2>Food categories available:</h2>
        {existingCategories.map((existingCategory, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img
              src={existingCategory.image}
              alt="category"
              width="50"
              height="200"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{existingCategory.name}</h5>
              <p className="card-text">{existingCategory.briefDesc}</p>
            </div>
          </div>
        ))}
      </div>
  );
}
