import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function EatLocationFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="eatLocation">
      <Form.Label className="form-label">Location</Form.Label>
      <Form.Control
        type="text"
        name="eateryLocation"
        value={context.newMegaState.eateryLocation}
        onChange={context.handleChange}
      />
      <Form.Text id="eatLocation" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
