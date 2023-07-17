export default function CreateEatery({
  existingCategories,
  newEatery,
  setNewEatery,
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

  const handleSubmit = async (evt) => {
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

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Create eatery</h2>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory.name}>
              {existingCategory.name}
            </option>
          ))}
        </select>
        Name:
        <input
          type="text"
          name="eateryName"
          value={newEatery.eateryName}
          onChange={handleChange}
        />
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
        <button onClick={handleSubmit}>Create an eatery</button>
      </form>
      <div className="section-container">
        <h2>Food categories available:</h2>
        {existingCategories.map((existingCategory, index) => (
          <div key={index}>
            <div>Category: {existingCategory.name}</div>
            <div>
              <img
                src={existingCategory.image}
                alt="category"
                width="50"
                height="50"
              />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
