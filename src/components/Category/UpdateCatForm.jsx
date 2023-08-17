import { Button, Form } from "react-bootstrap";
import CatNameFormCtrl from "./CatFormCtrl/CatNameFormCtrl";
import CatImageFormCtrl from "./CatFormCtrl/CatImageFormCtrl";
import CatDescFormCtrl from "./CatFormCtrl/CatDescFormCtrl";
import { useContext } from "react";
import { MunchyContext } from "../../pages/App/App";

export default function UpdateCatForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Update eatery categories</h2>
      <Form.Group className="mb-3">
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleUpdateCatSelect}
        >
          <option value="">Select a category</option>
          {context?.existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((existingCategory, index) => (
              <option key={index} value={existingCategory?._id}>
                {existingCategory?.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <CatNameFormCtrl />
      <CatImageFormCtrl />
      <CatDescFormCtrl />
      <Button variant="primary" size="lg" onClick={context.handleUpdateCat}>
        Submit
      </Button>
    </Form>
  );
}
