import { useState } from "react";
import CreateReviewForm from "../../components/Review/CreateReviewForm";

export default function EateryReview({
  existingCategories,
  user,
  existingReviews,
  setExistingReviews,
  existingEateries,
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

  const handleEatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenEat = existingEateries.find(
      (chosenEatery) => chosenEatery.name === evt.target.value
    );
    setNewMegaState({
      ...newMegaState,
      eateryID: chosenEat._id,
    });
  };

  const handleChange = (evt) => {
    setNewMegaState({
      ...newMegaState,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="page-container">
      {
        <CreateReviewForm
          user={user}
          handleCatSelect={handleCatSelect}
          handleEatSelect={handleEatSelect}
          handleChange={handleChange}
          existingCategories={existingCategories}
          existingEateries={existingEateries}
          newMegaState={newMegaState}
          setNewMegaState={setNewMegaState}
        />
      }
    </div>
  );
}
