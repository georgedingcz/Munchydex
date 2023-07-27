import { Form } from "react-bootstrap";

export default function EatNameFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="eatName">
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control
        type="text"
        name="eateryName"
        value={newMegaState.eateryName}
        onChange={handleChange}
      />
      <Form.Text id="eatName" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
