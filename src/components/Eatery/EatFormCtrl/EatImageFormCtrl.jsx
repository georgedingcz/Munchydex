import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function EatImageFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="eatImage">
      <Form.Label className="form-label">Image</Form.Label>
      <Form.Control
        type="text"
        name="eateryImage"
        value={context.newMegaState.eateryImage}
        onChange={context.handleChange}
      />
    </Form.Group>
  );
}
