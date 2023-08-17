import { useState, useEffect } from "react";
import CreateReviewForm from "../../components/Review/CreateReviewForm";
import UpdateReviewForm from "../../components/Review/UpdateReviewForm";
import ReviewListPerUser from "../../components/Review/ReviewListPerUser";
import DeleteReviewForm from "../../components/Review/DeleteReviewForm";
import { Container, Tab, Tabs } from "react-bootstrap";

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
  formatDate,
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
        } else {
          console.log("Failed to get reviews for one user");
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
    formatDate,
  };

  return (
    <Container>
      <Tabs defaultActiveKey="createReview" id="auth-tab" className="mb-3" fill>
        <Tab eventKey="createReview" title="Create Review">
          <CreateReviewForm {...commonProps} />
        </Tab>
        <Tab eventKey="updateReview" title="Update Review">
          <UpdateReviewForm {...commonProps} />
        </Tab>
        <Tab eventKey="deleteReview" title="Delete Review">
          <DeleteReviewForm {...commonProps} />
        </Tab>
      </Tabs>
      <ReviewListPerUser {...commonProps} />
    </Container>
  );
}