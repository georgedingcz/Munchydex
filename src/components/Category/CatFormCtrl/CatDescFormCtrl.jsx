import { Form } from "react-bootstrap";

export default function CatDescFormCtrl({ newMegaState, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="catDesc">
      <Form.Label className="form-label">Description</Form.Label>
      <Form.Control
        type="text"
        name="categoryDesc"
        as="textarea"
        rows={5}
        value={newMegaState.categoryDesc}
        onChange={handleChange}
      />
    </Form.Group>
  );
}
