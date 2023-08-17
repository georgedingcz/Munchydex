import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewImageFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="reviewImage">
      <Form.Label className="form-label">Image</Form.Label>
      <Form.Control
        type="text"
        name="reviewImage"
        value={context.newMegaState.reviewImage}
        onChange={context.handleChange}
      />
    </Form.Group>
  );
}
