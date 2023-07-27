import { Form } from "react-bootstrap";

export default function CatImageFormCtrl ({newMegaState, handleChange}) {
    return (
        <Form.Group className="mb-3" controlId="catImage">
        <Form.Label className="form-label">Image URL</Form.Label>
        <Form.Control
          type="text"
          name="categoryImage"
          value={newMegaState.categoryImage}
          onChange={handleChange}
        />
      </Form.Group>
    )
}