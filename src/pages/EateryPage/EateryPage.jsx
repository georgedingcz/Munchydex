import CreateEateryForm from "../../components/Eatery/CreateEateryForm";
import DeleteEateryForm from "../../components/Eatery/DeleteEateryForm";
import UpdateEateryForm from "../../components/Eatery/UpdateEateryForm";

export default function Eatery({
  existingCategories,
  existingEateries,
  setExistingEateries,
  setForEateryFetch,
  forEateryFetch,

  newMegaState,
  setNewMegaState,
}) {
  const handleCatSelect = async (evt) => {
    await setNewMegaState({
      ...newMegaState,
      categoryID: evt.target.value,
    });
    setForEateryFetch(!forEateryFetch);
  };

  const handleChange = (evt) => {
    setNewMegaState({
      ...newMegaState,
      [evt.target.name]: evt.target.value,
    });
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

  return (
    <div className="page-container">
      {
        <CreateEateryForm
          existingCategories={existingCategories}
          handleCatSelect={handleCatSelect}
          handleChange={handleChange}
          newMegaState={newMegaState}
          setNewMegaState={setNewMegaState}
          existingEateries={existingEateries}
          setExistingEateries={setExistingEateries}
          forEateryFetch={forEateryFetch}
          setForEateryFetch={setForEateryFetch}
        />
      }

      {
        <UpdateEateryForm
          existingCategories={existingCategories}
          handleCatSelect={handleCatSelect}
          handleChange={handleChange}
          newMegaState={newMegaState}
          existingEateries={existingEateries}
          forEateryFetch={forEateryFetch}
          setForEateryFetch={setForEateryFetch}
          handleEatSelect={handleEatSelect}
        />
      }

      {
        <DeleteEateryForm
          handleCatSelect={handleCatSelect}
          handleEatSelect={handleEatSelect}
          existingCategories={existingCategories}
          existingEateries={existingEateries}
          setExistingEateries={setExistingEateries}
          forEateryFetch={forEateryFetch}
          setForEateryFetch={setForEateryFetch}
          newMegaState={newMegaState}
        />
      }

      {/* <div className="section-container">
        <h2>Category eateries:</h2>
        {existingEateries.map((existingEatery, index) => (
          <div key={index}>
            <div>Name: {existingEatery.name}</div>
            <div>
              <img
                src={existingEatery.image}
                alt="eatery"
                width="50"
                height="50"
              />
            </div>
            <div>Category: {existingEatery.category.name}</div>
            <br />
            <button value={existingEatery._id} onClick={handleDelete}>
              Delete {existingEatery.name}
            </button>
          </div>
        ))}{" "}
      </div> */}
    </div>
  );
}
