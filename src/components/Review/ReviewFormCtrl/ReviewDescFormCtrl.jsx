import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewDescFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="reviewDesc">
      <Form.Label className="form-label">Description</Form.Label>
      <Form.Control
        type="text"
        name="reviewDesc"
        as="textarea"
        rows={5}
        value={context.newMegaState.reviewDesc}
        onChange={context.handleChange}
      />
      <Form.Text id="reviewDesc" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
