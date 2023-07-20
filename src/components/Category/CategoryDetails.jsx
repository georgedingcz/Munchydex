export default function CategoryDetails({ newMegaState, handleChange }) {
  return (
    <>
      Name:
      <input
        type="text"
        name="categoryName"
        value={newMegaState.categoryName}
        onChange={handleChange}
      />
      <br />
      Image URL:
      <input
        type="text"
        name="categoryImage"
        value={newMegaState.categoryImage}
        onChange={handleChange}
      />
      <br />
      Description:
      <input
        type="text"
        name="categoryDesc"
        value={newMegaState.categoryDesc}
        onChange={handleChange}
      />
      <br />
    </>
  );
}
