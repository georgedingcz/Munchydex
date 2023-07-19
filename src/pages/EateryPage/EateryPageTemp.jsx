import { useState } from "react";
import EateryDetails from "../../components/Eatery/EateryDetails";
import EateryList from "../../components/Eatery/EateryList";

export default function Eatery({
  existingCategories,
  newEatery,
  setNewEatery,
  existingEateries,
  setExistingEateries,
}) {
  const [chosenCatID, setChosenCatID] = useState()

  console.log(JSON.stringify(existingEateries))

  const handleCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory.name === evt.target.value
    );

    setChosenCatID(chosenCat._id);

    const fetchEateries = async (chosenCatID) => {
      const id = chosenCatID;
      try {
        const response = await fetch(`/eateries/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingEateries(data);
          console.log(JSON.stringify(existingEateries))
        } else {
          console.log("problem is with the response")
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEateries(chosenCatID)
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
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          <option value="">Select a category</option>

          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory.name}>
              {existingCategory.name}
            </option>
          ))}
        </select>
        Eatery Name:
        <select
          name="eateryName"
          id="eateryName-select"
          // onChange={handleEatNameSelect}
        >
          <option value="">Select an eatery</option>
          <option value={existingEateries}>{existingEateries.name}</option>

          {/* {existingEateries
            .map((existingEatery, index) => (
              <option key={index} value={existingEatery}>
                {existingEatery.name}
              </option>
            ))} */}
        </select>
        <br />
        Location:
        <input
          type="text"
          name="eateryLocation"
          value={newEatery.eateryLocation}
          onChange={handleChange}
        />
        <br />
        Image:
        <input
          type="text"
          name="eateryImage"
          value={newEatery.eateryImage}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleUpdateEatery}>Create an eatery</button>
      </form>

      <div className="section-container">
        <EateryList existingEateries={existingEateries} />
      </div>
    </div>
  );
}
