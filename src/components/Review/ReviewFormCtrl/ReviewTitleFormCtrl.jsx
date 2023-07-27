import { Form } from "react-bootstrap";

export default function ReviewTitleFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="reviewTitle">
      <Form.Label className="form-label">Title</Form.Label>
      <Form.Control
        type="text"
        name="reviewTitle"
        value={newMegaState.reviewTitle}
        onChange={handleChange}
      />
      <Form.Text id="reviewTitle" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
