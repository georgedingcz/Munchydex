import { Form } from "react-bootstrap";

export default function ReviewDescFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="reviewDesc">
      <Form.Label className="form-label">Description</Form.Label>
      <Form.Control
        type="text"
        name="reviewDesc"
        as="textarea"
        rows={5}
        value={newMegaState.reviewDesc}
        onChange={handleChange}
      />
      <Form.Text id="reviewDesc" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
