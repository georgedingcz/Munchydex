import { Container, Tab, Tabs } from "react-bootstrap";
import CategoryList from "../../components/Category/CategoryList";
import CreateCatForm from "../../components/Category/CreateCatForm";
import DeleteCatForm from "../../components/Category/DeleteCatForm";
import UpdateCatForm from "../../components/Category/UpdateCatForm";

export default function EatCat({
  existingCategories,
  setExistingCategories,
  setForCategoryFetch,
  forCategoryFetch,
  newMegaState,
  setNewMegaState,

  handleChange,
}) {
  const reusedProps = {
    existingCategories,
    setExistingCategories,
    setForCategoryFetch,
    forCategoryFetch,
    newMegaState,
    setNewMegaState,

    handleChange,
  };

  return (
    <Container>
      <Tabs defaultActiveKey="createCat" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createCat" title="Create Category">
          <CreateCatForm {...reusedProps} />
        </Tab>
        <Tab eventKey="updateCat" title="Update Category">
          <UpdateCatForm {...reusedProps} />
        </Tab>
        <Tab eventKey="deleteCat" title="Delete Category">
          <DeleteCatForm {...reusedProps} />
        </Tab>
      </Tabs>
      <CategoryList {...reusedProps} />
    </Container>
  );
}
