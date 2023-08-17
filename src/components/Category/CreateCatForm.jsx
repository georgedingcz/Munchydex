import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CatNameFormCtrl from "./CatFormCtrl/CatNameFormCtrl";
import CatImageFormCtrl from "./CatFormCtrl/CatImageFormCtrl";
import CatDescFormCtrl from "./CatFormCtrl/CatDescFormCtrl";
import { useContext } from "react";
import { MunchyContext } from "../../pages/App/App";

export default function CreateCatForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Add eatery categories</h2>
      <CatNameFormCtrl />
      <CatImageFormCtrl />
      <CatDescFormCtrl />
      <Button variant="primary" size="lg" onClick={context.handleCreateCat}>
        Submit
      </Button>
    </Form>
  );
}
