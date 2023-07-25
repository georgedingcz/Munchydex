import { Button, Form } from "react-bootstrap";

export default function DeleteEateryForm({
  handleEatCatSelect,
  handleEatSelect,
  existingCategories,
  existingEateries,
  setExistingEateries,
  forEateryFetch,
  setForEateryFetch,
  newMegaState,
  setExistingCategories,
}) {
  const handleDelete = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.eateryID;
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setExistingEateries(
          existingEateries.filter(
            (eatery) => eatery._id !== newMegaState.eateryID
          )
        );
        setForEateryFetch(!forEateryFetch);
      } else {
        console.log("Failed to delete eatery");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form className="section-container">
      <h2>Delete eatery</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
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
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleDelete}>
        Delete eatery
      </Button>
    </Form>
  );
}
