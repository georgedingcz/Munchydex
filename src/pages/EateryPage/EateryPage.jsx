import { useEffect, useState } from "react";
import EateryDetails from "../../components/Eatery/EateryDetails";
import EateryList from "../../components/Eatery/EateryList";

export default function Eatery({
  existingCategories,
  newEatery,
  setNewEatery,
  existingEateries,
  setExistingEateries,
}) {
  const fetchOneCatEateries = async () => {
    try {
      const id = newEatery.eateryCategory;
      const response = await fetch(`/eateries/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExistingEateries(data);
      } else {
        console.log("Problem with the response");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneCatEateries();
  }, [newEatery.eateryCategory]);


  const handleCatSelect = async (evt) => {
    await setNewEatery({
      ...newEatery,
      eateryCategory: evt.target.value,
    });

    // fetchOneCatEateries()

  };

  const handleChange = (evt) => {
    setNewEatery({
      ...newEatery,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleCreateEatery = async (evt) => {
    evt.preventDefault();
    setNewEatery({ ...newEatery });
    console.log(JSON.stringify(newEatery));
    const eateryData = {
      category: newEatery.eateryCategory,
      name: newEatery.eateryName,
      location: newEatery.eateryLocation,
      image: newEatery.eateryImage,
    };
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
    setNewEatery({
      eateryCategory: eateryData.category,
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
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
