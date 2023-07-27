import { Form } from "react-bootstrap";

export default function EatLocationFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="eatLocation">
      <Form.Label className="form-label">Location</Form.Label>
      <Form.Control
        type="text"
        name="eateryLocation"
        value={newMegaState.eateryLocation}
        onChange={handleChange}
      />
      <Form.Text id="eatLocation" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
