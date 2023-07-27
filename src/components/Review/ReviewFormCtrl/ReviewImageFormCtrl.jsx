import { Form } from "react-bootstrap";

export default function ReviewImageFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="reviewImage">
      <Form.Label className="form-label">Image</Form.Label>
      <Form.Control
        type="text"
        name="reviewImage"
        value={newMegaState.reviewImage}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
