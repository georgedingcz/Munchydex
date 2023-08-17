import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function CatDescFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="catDesc">
      <Form.Label className="form-label">Description</Form.Label>
      <Form.Control
        type="text"
        name="categoryDesc"
        as="textarea"
        rows={5}
        value={context.newMegaState.categoryDesc}
        onChange={context.handleChange}
      />
      <Form.Text id="catDesc" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
