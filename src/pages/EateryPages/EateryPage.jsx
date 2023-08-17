import { Container, Tab, Tabs } from "react-bootstrap";
import CreateEateryForm from "../../components/Eatery/CreateEateryForm";
import DeleteEateryForm from "../../components/Eatery/DeleteEateryForm";
import EateryListPerCat from "../../components/Eatery/EateryListPerCat";
import UpdateEateryForm from "../../components/Eatery/UpdateEateryForm";

export default function Eatery() {
  return (
    <Container>
      <Tabs defaultActiveKey="createEat" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createEat" title="Create Eatery">
          <CreateEateryForm />
        </Tab>
        <Tab eventKey="updateEat" title="Update Eatery">
          <UpdateEateryForm />
        </Tab>
        <Tab eventKey="deleteEat" title="Delete Eatery">
          <DeleteEateryForm />
        </Tab>
      </Tabs>
      <EateryListPerCat />
    </Container>
  );
}
