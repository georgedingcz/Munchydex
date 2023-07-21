import { set } from "mongoose";
import { useState } from "react";

export default function UpdateReviewForm({
  user,
  handleChange,
  existingCategories,
  existingEateries,
  newMegaState,
  setNewMegaState,
  existingReviews,
  setExistingReviews,
  forReviewFetch,
  setForReviewFetch,
}) {
  const handleUpdateReview = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.reviewID;
    const updatedReviewData = {
      title: newMegaState.reviewTitle,
      image: newMegaState.reviewImage,
      desc: newMegaState.reviewDesc,
      date: newMegaState.reviewDate,
      price: newMegaState.reviewPrice,
      score: newMegaState.reviewScore,
    };
    try {
      await fetch(`/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReviewData),
      });
    } catch (err) {
      console.log(err);
    }
    setForReviewFetch(!forReviewFetch);
  };

  const [filteredReviewsByCat, setFilteredReviewsByCat] = useState([]);
  const [filteredReviewsByEatery, setFilteredReviewsByEatery] = useState([]);

  const handleUserCatSelect = async (evt) => {
    const userChosenCat = existingReviews.find(
      (existingReview) => existingReview.category.name === evt.target.value
    );
    const userChosenCatID = userChosenCat.category._id;
    await setNewMegaState({
      ...newMegaState,
      categoryID: userChosenCatID,
    });
    setFilteredReviewsByCat(
      existingReviews.filter(
        (review) => review.category._id === userChosenCatID
      )
    );
  };

  const handleUserEatSelect = async (evt) => {
    console.log(evt.target.value);
    const userChosenEat = existingReviews.find(
      (chosenEatery) => chosenEatery.name.name === evt.target.value
    );
    const userChosenEateryID = userChosenEat.name._id;
    await setNewMegaState({
      ...newMegaState,
      eateryID: userChosenEateryID,
    });
    setFilteredReviewsByEatery(
      filteredReviewsByCat.filter(
        (review) => review.name._id === userChosenEateryID
      )
    );
  };

  const handleUserTitleSelect = async (evt) => {
    const userChosenReview = existingReviews.find(
      (chosenReview) => chosenReview._id === evt.target.value
    );
    setNewMegaState({
      reviewTitle: userChosenReview.title,
      reviewImage: userChosenReview.image,
      reviewDesc: userChosenReview.desc,
      reviewDate: userChosenReview.date,
      reviewPrice: userChosenReview.price,
      reviewScore: userChosenReview.score,
      reviewID: userChosenReview._id,
    });
  };

  return (
    <form className="section-container">
      <h2>Update a review</h2>
      <div>
        Category:
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleUserCatSelect}
        >
          <option value="">Select a category</option>
          {[
            ...new Set(
              existingReviews.map(
                (existingReview) => existingReview.category.name
              )
            ),
          ].map((categoryName, index) => (
            <option key={index} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </select>
      </div>
      Eatery Name:
      <select
        name="eateryName"
        id="eateryName-select"
        onChange={handleUserEatSelect}
      >
        <option value="">Select an eatery</option>
        {[
          ...new Set(
            filteredReviewsByCat.map(
              (filteredReview) => filteredReview.name.name
            )
          ),
        ].map((eateryName, index) => (
          <option key={index} value={eateryName}>
            {eateryName}
          </option>
        ))}
      </select>
      <br />
      Select title:
      <select name="title" id="title-select" onChange={handleUserTitleSelect}>
        <option value="">Select a title</option>
        {filteredReviewsByEatery.map((filteredReview, index) => (
          <option key={index} value={filteredReview._id}>
            {filteredReview.title}
          </option>
        ))}
      </select>
      Title:
      <input
        type="text"
        name="reviewTitle"
        value={newMegaState.reviewTitle}
        onChange={handleChange}
      />
      <br />
      Image:
      <input
        type="text"
        name="reviewImage"
        value={newMegaState.reviewImage}
        onChange={handleChange}
      />
      <br />
      Description:
      <input
        type="text"
        name="reviewDesc"
        value={newMegaState.reviewDesc}
        onChange={handleChange}
      />
      <br />
      Date:
      <input
        type="date"
        name="reviewDate"
        value={newMegaState.reviewDate}
        onChange={handleChange}
      />
      <br />
      Price:
      <input
        type="number"
        name="reviewPrice"
        value={newMegaState.reviewPrice}
        onChange={handleChange}
      />
      <br />
      Score:
      <input
        type="number"
        name="reviewScore"
        value={newMegaState.reviewScore}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdateReview}>Update a review</button>
    </form>
  );
}
