import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewScoreFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="reviewScore">
      <Form.Label className="form-label">Score</Form.Label>
      <Form.Control
        type="number"
        name="reviewScore"
        value={context.newMegaState.reviewScore}
        onChange={context.handleChange}
      />
      <Form.Text id="reviewScore" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
