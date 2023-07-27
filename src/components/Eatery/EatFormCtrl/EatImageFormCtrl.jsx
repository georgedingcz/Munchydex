import { Form } from "react-bootstrap";

export default function EatImageFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="eatImage">
      <Form.Label className="form-label">Image</Form.Label>
      <Form.Control
        type="text"
        name="eateryImage"
        value={newMegaState.eateryImage}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
