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
    <div className="page-container">
      {<CreateEateryForm {...reusedProps} />}
      {<UpdateEateryForm {...reusedProps} />}
      {<DeleteEateryForm {...reusedProps} />}
      {<EateryListPerCat {...reusedProps} />}
    </div>
  );
}
