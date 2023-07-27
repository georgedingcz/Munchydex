import { Form } from "react-bootstrap";

export default function ReviewScoreFormCtrl ({newMegaState, handleChange}) {
    return (
        <Form.Group className="mb-3" controlId="reviewScore">
        <Form.Label className="form-label">Score</Form.Label>
        <Form.Control
          type="number"
          name="reviewScore"
          value={newMegaState.reviewScore}
          onChange={handleChange}
        />
      </Form.Group>
    )
}