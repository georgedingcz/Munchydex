import { Form } from "react-bootstrap";

export default function CatNameFormCtrl ({newMegaState, handleChange}) {
    return (
        <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          name="categoryName"
          value={newMegaState.categoryName}
          onChange={handleChange}
        />
      </Form.Group>
    )
}