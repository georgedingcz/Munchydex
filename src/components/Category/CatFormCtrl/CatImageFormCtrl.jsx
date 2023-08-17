import { useContext } from "react";
import { Form } from "react-bootstrap";
import { MunchyContext } from "../../../pages/App/App";

export default function CatImageFormCtrl() {
  const context = useContext(MunchyContext);

  return (
    <Form.Group className="mb-3" controlId="catImage">
      <Form.Label className="form-label">Image URL</Form.Label>
      <Form.Control
        type="text"
        name="categoryImage"
        value={context.newMegaState.categoryImage}
        onChange={context.handleChange}
      />
    </Form.Group>
  );
}
