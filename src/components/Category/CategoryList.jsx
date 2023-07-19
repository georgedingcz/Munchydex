export default function CategoryList({ existingCategories, handleDelete }) {
  return (
    <>
      <h2>Food categories available:</h2>
      {existingCategories.map((existingCategory, index) => (
        <div key={index}>
          <div>Category: {existingCategory.name}</div>
          <div>
            <img
              src={existingCategory.image}
              alt="category"
              width="50"
              height="50"
            />
          </div>
          <div>Description: {existingCategory.briefDesc}</div>
          <br />
          <button value={existingCategory._id} onClick={handleDelete}>
            Delete {existingCategory.name}
          </button>
        </div>
      ))}
    </>
  );
}
