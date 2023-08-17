import { Container, Tab, Tabs } from "react-bootstrap";
import CreateEateryForm from "../../components/Eatery/CreateEateryForm";
import DeleteEateryForm from "../../components/Eatery/DeleteEateryForm";
import EateryListPerCat from "../../components/Eatery/EateryListPerCat";
import UpdateEateryForm from "../../components/Eatery/UpdateEateryForm";

export default function Eatery({
  existingCategories,
  existingEateries,
  setExistingEateries,
  forEateryFetch,
  setForEateryFetch,
  newMegaState,
  setNewMegaState,
  handleChange,
}) {
  const handleEatCatSelect = async (evt) => {
    await setNewMegaState({
      ...newMegaState,
      categoryID: evt.target.value,
    });
    setForEateryFetch(!forEateryFetch);
  };

  const handleEatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenEat = existingEateries.find(
      (chosenEatery) => chosenEatery._id === evt.target.value
    );
    setNewMegaState({
      eateryName: chosenEat.name,
      eateryLocation: chosenEat.location,
      eateryImage: chosenEat.image,
      eateryID: chosenEat._id,
    });
  };

  const reusedProps = {
    existingCategories,
    existingEateries,
    setExistingEateries,
    forEateryFetch,
    setForEateryFetch,
    newMegaState,
    setNewMegaState,
    handleChange,
    handleEatCatSelect,
    handleEatSelect,
  };

  return (
    <Container>
      <Tabs defaultActiveKey="createEat" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createEat" title="Create Eatery">
          <CreateEateryForm {...reusedProps} />
        </Tab>
        <Tab eventKey="updateEat" title="Update Eatery">
          <UpdateEateryForm {...reusedProps} />
        </Tab>
        <Tab eventKey="deleteEat" title="Delete Eatery">
          <DeleteEateryForm {...reusedProps} />
        </Tab>
      </Tabs>
      <EateryListPerCat {...reusedProps} />
    </Container>
  );
}
