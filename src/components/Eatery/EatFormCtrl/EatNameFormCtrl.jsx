import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function EatNameFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="eatName">
      <Form.Label className="form-label">Name</Form.Label>
      <Form.Control
        type="text"
        name="eateryName"
        value={context.newMegaState.eateryName}
        onChange={context.handleChange}
      />
      <Form.Text id="eatName" muted>
        (Required)
      </Form.Text>
    </Form.Group>
  );
}
