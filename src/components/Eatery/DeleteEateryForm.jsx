import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { MunchyContext } from "../../pages/App/App";

export default function DeleteEateryForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Delete eatery</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleEatCatSelect}
        >
          <option value="">Select a category</option>
          {context.existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingCategory, index) => (
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
          onChange={context.handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {context.existingEateries
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingEatery, index) => (
              <option key={index} value={existingEatery._id}>
                {existingEatery.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={context.handleDelete}>
        Delete eatery
      </Button>
    </Form>
  );
}
