import { Container, Tab, Tabs } from "react-bootstrap";
import CategoryList from "../../components/Category/CategoryList";
import CreateCatForm from "../../components/Category/CreateCatForm";
import DeleteCatForm from "../../components/Category/DeleteCatForm";
import UpdateCatForm from "../../components/Category/UpdateCatForm";

export default function EatCat() {
  return (
    <Container>
      <Tabs defaultActiveKey="createCat" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createCat" title="Create Category">
          <CreateCatForm />
        </Tab>
        <Tab eventKey="updateCat" title="Update Category">
          <UpdateCatForm />
        </Tab>
        <Tab eventKey="deleteCat" title="Delete Category">
          <DeleteCatForm />
        </Tab>
      </Tabs>
      <CategoryList />
    </Container>
  );
}
