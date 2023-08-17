import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { MunchyContext } from "../../pages/App/App";

export default function DeleteCatForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Delete eatery categories</h2>
      <Form.Group className="mb-3">
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleCatSelect}
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
      <Button variant="primary" size="lg" onClick={context.handleCatDelete}>
        Submit
      </Button>
    </Form>
  );
}
