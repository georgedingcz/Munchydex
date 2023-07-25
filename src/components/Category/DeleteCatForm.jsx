import { Button, Form } from "react-bootstrap";

export default function DeleteCatForm({
  existingCategories,
  setExistingCategories,
  newMegaState,
  setNewMegaState,
}) {
  const handleCatSelect = async (evt) => {
    setNewMegaState({
      categoryID: evt.target.value,
    });
  };

  const handleCatDelete = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setExistingCategories(
          existingCategories.filter(
            (category) => category._id !== newMegaState.categoryID
          )
        );
      } else {
        console.log("Failed to delete category.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="section-container">
      <h2>Delete eatery categories</h2>
      <Form.Group className="mb-3">
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleCatDelete}>
        Submit
      </Button>
    </Form>
  );
}
