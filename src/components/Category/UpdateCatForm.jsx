import { Button, Form } from "react-bootstrap";

export default function UpdateCatForm({
  newMegaState,
  existingCategories,
  handleChange,
  forCategoryFetch,
  setForCategoryFetch,
  setNewMegaState,
}) {
  const handleUpdateCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory._id === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  const handleUpdateCat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    const updatedCatData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCatData),
      });
      if (response.ok) {
        setForCategoryFetch(!forCategoryFetch);
      } else {
        console.log("Failed to update category")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="section-container">
      <h2>Update eatery categories</h2>
      <Form.Group className="mb-3">
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleUpdateCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          name="categoryName"
          value={newMegaState.categoryName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="catImage">
        <Form.Label className="form-label">Image URL</Form.Label>
        <Form.Control
          type="text"
          name="categoryImage"
          value={newMegaState.categoryImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="catDesc">
        <Form.Label className="form-label">Description</Form.Label>
        <Form.Control
          type="text"
          name="categoryDesc"
          as="textarea"
          rows={5}
          value={newMegaState.categoryDesc}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleUpdateCat}>
        Submit
      </Button>
    </Form>
  );
}
