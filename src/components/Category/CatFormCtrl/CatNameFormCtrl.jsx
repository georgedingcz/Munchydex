import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function CatNameFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="catName">
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control
        type="text"
        name="categoryName"
        value={context.newMegaState.categoryName}
        onChange={context.handleChange}
      />
      <Form.Text id="catName" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
