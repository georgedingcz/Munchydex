export default function CategoryDetails({ newCategory, handleChange }) {
  return (
    <>
      Name:
      <input
        type="text"
        name="categoryName"
        value={newCategory.categoryName}
        onChange={handleChange}
      />
      <br />
      Image URL:
      <input
        type="text"
        name="categoryImage"
        value={newCategory.categoryImage}
        onChange={handleChange}
      />
      <br />
      Description:
      <input
        type="text"
        name="categoryDesc"
        value={newCategory.categoryDesc}
        onChange={handleChange}
      />
      <br />
    </>
  );
}
