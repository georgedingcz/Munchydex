import { Container } from "react-bootstrap";
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
      {<CreateCatForm {...reusedProps} />}
      {<UpdateCatForm {...reusedProps} />}
      {<DeleteCatForm {...reusedProps} />}
      {<CategoryList {...reusedProps} />}
    </Container>
  );
}
