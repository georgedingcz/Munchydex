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

  const handleChange = (evt) => {
    setNewMegaState({
      ...newMegaState,
      [evt.target.name]: evt.target.value,
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
          console.log(existingReviews)
        } else {
          console.log("Problem with the response");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneUserReviews();
  }, [forReviewFetch]);

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
          existingReviews={existingReviews}
          setExistingReviews={setExistingReviews}
          forReviewFetch={forReviewFetch}
          setForReviewFetch={setForReviewFetch}
        />
      }
      {
        <UpdateReviewForm
          user={user}
          handleCatSelect={handleCatSelect}
          handleEatSelect={handleEatSelect}
          handleChange={handleChange}
          existingCategories={existingCategories}
          existingEateries={existingEateries}
          newMegaState={newMegaState}
          setNewMegaState={setNewMegaState}
          existingReviews={existingReviews}
          setExistingReviews={setExistingReviews}
          forReviewFetch={forReviewFetch}
          setForReviewFetch={setForReviewFetch}
        />
      }
      {
        <ReviewListPerUser
          existingReviews={existingReviews}
        />
      }
    </div>
  );
}
