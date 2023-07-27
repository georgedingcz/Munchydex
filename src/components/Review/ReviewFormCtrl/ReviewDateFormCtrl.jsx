import { Form } from "react-bootstrap";

export default function ReviewDateFormCtrl ({newMegaState, handleChange}) {
    return (
        <Form.Group className="mb-3" controlId="reviewDate">
        <Form.Label className="form-label">Date</Form.Label>
        <Form.Control
          type="date"
          name="reviewDate"
          value={newMegaState.reviewDate}
          onChange={handleChange}
        />
      </Form.Group>
    )
}