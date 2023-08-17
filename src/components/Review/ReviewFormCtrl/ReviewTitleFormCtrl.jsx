import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function ReviewTitleFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="reviewTitle">
      <Form.Label className="form-label">Title</Form.Label>
      <Form.Control
        type="text"
        name="reviewTitle"
        value={context.newMegaState.reviewTitle}
        onChange={context.handleChange}
      />
      <Form.Text id="reviewTitle" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
