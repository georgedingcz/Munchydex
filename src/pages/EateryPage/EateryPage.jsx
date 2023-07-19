import EateryDetails from "../../components/Eatery/EateryDetails";
import EateryList from "../../components/Eatery/EateryList";

export default function Eatery({
  existingCategories,
  newEatery,
  setNewEatery,
  existingEateries,
  setExistingEateries,
}) {
  const handleCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory.name === evt.target.value
    );
    setNewEatery({
      ...newEatery,
      eateryCategory: chosenCat._id,
    });
    console.log(JSON.stringify(newEatery));
  };

  const handleChange = (evt) => {
    setNewEatery({
      ...newEatery,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleCreateEatery = async (evt) => {
    evt.preventDefault();
    console.log("new eatery created");
    setNewEatery({ ...newEatery });
    console.log(JSON.stringify(newEatery));
    const eateryData = {
      category: newEatery.eateryCategory,
      name: newEatery.eateryName,
      location: newEatery.eateryLocation,
      image: newEatery.eateryImage,
    };
    try {
      const response = await fetch("/eateries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewEatery({
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
  };

  const handleUpdateEatery = async (evt) => {
    evt.preventDefault();
    console.log("new eatery created");
    setNewEatery({ ...newEatery });
    console.log(JSON.stringify(newEatery));
    const eateryData = {
      category: newEatery.eateryCategory,
      name: newEatery.eateryName,
      location: newEatery.eateryLocation,
      image: newEatery.eateryImage,
    };
    try {
      const response = await fetch("/eateries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewEatery({
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Create eatery</h2>
        <EateryDetails
          handleCatSelect={handleCatSelect}
          existingCategories={existingCategories}
          newEatery={newEatery}
          handleChange={handleChange}
        />
        <button onClick={handleCreateEatery}>Create an eatery</button>
      </form>

      <form className="section-container">
        <h2>Update eatery</h2>
        <EateryDetails
          handleCatSelect={handleCatSelect}
          existingCategories={existingCategories}
          newEatery={newEatery}
          handleChange={handleChange}
        />
        <button onClick={handleUpdateEatery}>Create an eatery</button>
      </form>

      <div className="section-container">
        <EateryList existingEateries={existingEateries} />
      </div>
    </div>
  );
}
