import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function CreateCatForm({
  newMegaState,
  setNewMegaState,
  existingCategories,
  setExistingCategories,
  handleChange,
}) {
  const handleCreateCat = async (evt) => {
    evt.preventDefault();
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
    <Form className="section-container">
      <h2>Add eatery categories</h2>
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
          value={newMegaState.categoryDesc}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleCreateCat}>
        Submit
      </Button>
    </Form>
  );
}
