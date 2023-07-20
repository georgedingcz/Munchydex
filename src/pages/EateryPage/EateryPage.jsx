import EateryDetails from "../../components/Eatery/EateryDetails";
import EateryList from "../../components/Eatery/EateryList";

export default function Eatery({
  existingCategories,
  newEatery,
  setNewEatery,
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

  const handleCreateEatery = async (evt) => {
    evt.preventDefault();
    setNewMegaState({ ...newMegaState });
    console.log(JSON.stringify(newMegaState));
    const eateryData = {
      category: newMegaState.categoryID,
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    setExistingEateries([...existingEateries, eateryData]);
    try {
      await fetch("/eateries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryID: eateryData.category,
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
    setForEateryFetch(!forEateryFetch);
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setExistingEateries(
      existingEateries.filter((eatery) => eatery._id !== evt.target.value)
    );
    setForEateryFetch(!forEateryFetch);
  };

  const handleEatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenEat = existingEateries.find(
      (chosenEatery) => chosenEatery.name === evt.target.value
    );
    setNewMegaState({
      eateryName: chosenEat.name,
      eateryLocation: chosenEat.location,
      eateryImage: chosenEat.image,
      eateryID: chosenEat._id,
    });
  };

  const handleUpdateEat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.eateryID;
    console.log("this thing", JSON.stringify(id));
    const updatedEatData = {
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEatData),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setForEateryFetch(!forEateryFetch);
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Create eatery</h2>
        <EateryDetails
          handleCatSelect={handleCatSelect}
          existingCategories={existingCategories}
          newMegaState={newMegaState}
          handleChange={handleChange}
        />
        <button onClick={handleCreateEatery}>Create an eatery</button>
      </form>

      <form className="section-container">
        <h2>Update eatery</h2>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery.name}>
              {existingEatery.name}
            </option>
          ))}
        </select>
        <EateryDetails
          handleCatSelect={handleCatSelect}
          existingCategories={existingCategories}
          newMegaState={newMegaState}
          handleChange={handleChange}
        />
        <button onClick={handleUpdateEat}>Update an eatery</button>
      </form>

      <div className="section-container">
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
      </div>
    </div>
  );
}
