import { useState } from "react";

export default function EateryReview({
  existingCategories,
  user,
  newReview,
  setNewReview,
  existingReviews,
  setExistingReviews,
  existingEateries,
}) {
  const [chosenCatID, setChosenCatID] = useState();

  const handleCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory.name === evt.target.value
    );
    setNewReview({
      ...newReview,
      reviewCategoryID: chosenCat._id,
      //send user info the moment a category is chosen
      reviewUserID: user._id,
    });
    setChosenCatID(chosenCat._id);
    console.log(chosenCatID)
  };

  const handleEatNameSelect = async (evt) => {
    console.log(evt.target.value);
    const eateryData = evt.target.value
    setNewReview({
      ...newReview,
      //to edit this//
      reviewEateryID: eateryData._id,
    });
  };

  const handleChange = (evt) => {
    setNewReview({
      ...newReview,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("new eatery created");
    setNewReview({ ...newReview });
    console.log(JSON.stringify(newReview));
    const reviewData = {
      category: newReview.reviewCategory,
      user: newReview.reviewUserID,
      name: newReview.reviewEateryName,
      image: newReview.reviewImage,
      desc: newReview.reviewDesc,
      date: newReview.reviewDate,
      price: newReview.reviewPrice,
      score: newReview.reviewScore,
    };
    try {
      const response = await fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewReview({
      reviewCategoryID: "",
      reviewUserID: "",
      reviewEateryID: "",
      reviewImage: "",
      reviewDesc: "",
      reviewDate: new Date(),
      reviewPrice: 0,
      reviewScore: 0,
    });
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Write a review</h2>
        <div>User name: {user.name}</div>
        <div>
          Category:
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
        </div>
        Eatery Name:
        <select
          name="eateryName"
          id="eateryName-select"
          onChange={handleEatNameSelect}
        >
          <option value="">Select an eatery</option>

          {existingEateries
            .filter(
              (existingEatery) => existingEatery.category._id === chosenCatID
            )
            .map((existingEatery, index) => (
              <option key={index} value={existingEatery}>
                {existingEatery.name}
              </option>
            ))}
        </select>
        <br />
        Image:
        <input
          type="text"
          name="reviewImage"
          value={newReview.reviewImage}
          onChange={handleChange}
        />
        <br />
        Description:
        <input
          type="text"
          name="reviewDesc"
          value={newReview.reviewDesc}
          onChange={handleChange}
        />
        <br />
        Date:
        <input
          type="date"
          name="reviewDate"
          value={newReview.reviewDate}
          onChange={handleChange}
        />
        <br />
        Price:
        <input
          type="number"
          name="reviewPrice"
          value={newReview.reviewPrice}
          onChange={handleChange}
        />
        <br />
        Score:
        <input
          type="number"
          name="reviewScore"
          value={newReview.reviewScore}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Create a review</button>
      </form>
      {/* <div className="section-container">
        <h2>Eateries available:</h2>
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
        ))}
      </div> */}
    </div>
  );
}
