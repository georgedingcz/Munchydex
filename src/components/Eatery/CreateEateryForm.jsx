import { Button, Form } from "react-bootstrap";
import EatNameFormCtrl from "./EatFormCtrl/EatNameFormCtrl";
import EatLocationFormCtrl from "./EatFormCtrl/EatLocationFormCtrl";
import EatImageFormCtrl from "./EatFormCtrl/EatImageFormCtrl";
import { useContext } from "react";
import { MunchyContext } from "../../pages/App/App";

export default function CreateEateryForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Create eatery</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryID"
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
      <EatNameFormCtrl />
      <EatLocationFormCtrl />
      <EatImageFormCtrl />
      <Button variant="primary" size="lg" onClick={context.handleCreateEatery}>
        Create an eatery
      </Button>
    </Form>
  );
}
