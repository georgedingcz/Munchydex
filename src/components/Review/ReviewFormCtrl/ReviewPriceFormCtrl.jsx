import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewPriceFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="reviewPrice">
      <Form.Label className="form-label">Price</Form.Label>
      <Form.Control
        type="number"
        name="reviewPrice"
        value={context.newMegaState.reviewPrice}
        onChange={context.handleChange}
      />
      <Form.Text id="reviewPrice" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
