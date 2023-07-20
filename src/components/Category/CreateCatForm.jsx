export default function CreateCatForm({
  newMegaState,
  setNewMegaState,
  existingCategories,
  setExistingCategories,
  handleChange,
}) {
  const handleCreateCat = async (evt) => {
    evt.preventDefault();
    setNewMegaState({ ...newMegaState });
    console.log(JSON.stringify(newMegaState));
    const categoryData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    setExistingCategories([...existingCategories, categoryData]);
    try {
      const response = await fetch("/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
  };
  return (
    <form className="section-container">
      <h2>Add eatery categories</h2>
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
      <button onClick={handleCreateCat}>Submit</button>
    </form>
  );
}
