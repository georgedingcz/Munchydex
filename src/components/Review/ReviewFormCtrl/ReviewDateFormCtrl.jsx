import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewDateFormCtrl () {
  const context = useContext(MunchyContext);

    return (
        <Form.Group className="mb-3" controlId="reviewDate">
        <Form.Label className="form-label">Date</Form.Label>
        <Form.Control
          type="date"
          name="reviewDate"
          value={context.newMegaState.reviewDate}
          onChange={context.handleChange}
        />
      </Form.Group>
    )
}