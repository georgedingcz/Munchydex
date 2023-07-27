import { Form } from "react-bootstrap";

export default function ReviewPriceFormCtrl ({newMegaState, handleChange}) {
    return (
        <Form.Group className="mb-3" controlId="reviewPrice">
        <Form.Label className="form-label">Price</Form.Label>
        <Form.Control
          type="number"
          name="reviewPrice"
          value={newMegaState.reviewPrice}
          onChange={handleChange}
        />
      </Form.Group>
    )
}