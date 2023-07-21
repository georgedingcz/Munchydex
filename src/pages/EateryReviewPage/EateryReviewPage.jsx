import { useState, useEffect } from "react";
import CreateReviewForm from "../../components/Review/CreateReviewForm";
import UpdateReviewForm from "../../components/Review/UpdateReviewForm";

import ReviewListPerUser from "../../components/Review/ReviewListPerUser";

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
  forReviewFetch,
  setForReviewFetch,
  handleChange
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
      (chosenEatery) => chosenEatery._id === evt.target.value
    );
    setNewMegaState({
      ...newMegaState,
      eateryID: chosenEat._id,
    });
  };

  useEffect(() => {
    const fetchOneUserReviews = async () => {
      try {
        const id = user._id;
        const response = await fetch(`/reviews/user/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingReviews(data);
          console.log(existingReviews);
        } else {
          console.log("Problem with the response");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneUserReviews();
  }, [forReviewFetch]);

  const commonProps = {
    user,
    handleCatSelect,
    handleEatSelect,
    handleChange,
    existingCategories,
    existingEateries,
    newMegaState,
    setNewMegaState,
    existingReviews,
    setExistingReviews,
    forReviewFetch,
    setForReviewFetch,
  };

  return (
    <div className="page-container">
      {<CreateReviewForm {...commonProps} />}
      {<UpdateReviewForm {...commonProps} />}
      {<ReviewListPerUser {...commonProps} />}
    </div>
  );
}
