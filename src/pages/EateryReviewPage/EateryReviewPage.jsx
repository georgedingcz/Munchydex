import { useState, useEffect } from "react";
import CreateReviewForm from "../../components/Review/CreateReviewForm";
import UpdateReviewForm from "../../components/Review/UpdateReviewForm";

import ReviewListPerUser from "../../components/Review/ReviewListPerUser";
import DeleteReviewForm from "../../components/Review/DeleteReviewForm";

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
  handleChange,
}) {
  const [filteredReviewsByCat, setFilteredReviewsByCat] = useState([]);
  const [filteredReviewsByEatery, setFilteredReviewsByEatery] = useState([]);

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

  const commonProps = {
    user,
    handleCatSelect,
    handleEatSelect,
    handleChange,
    handleUserCatSelect,
    handleUserEatSelect,
    handleUserTitleSelect,
    existingCategories,
    existingEateries,
    existingReviews,
    setExistingReviews,
    newMegaState,
    setNewMegaState,
    forReviewFetch,
    setForReviewFetch,
    filteredReviewsByCat,
    filteredReviewsByEatery,
  };

  return (
    <div className="page-container">
      {<CreateReviewForm {...commonProps} />}
      {<UpdateReviewForm {...commonProps} />}
      {<DeleteReviewForm {...commonProps} />}
      {<ReviewListPerUser {...commonProps} />}
    </div>
  );
}
