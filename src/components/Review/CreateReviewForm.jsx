import { Button, Form } from "react-bootstrap";
import ReviewTitleFormCtrl from "./ReviewFormCtrl/ReviewTitleFormCtrl";
import ReviewImageFormCtrl from "./ReviewFormCtrl/ReviewImageFormCtrl";
import ReviewDescFormCtrl from "./ReviewFormCtrl/ReviewDescFormCtrl";
import ReviewDateFormCtrl from "./ReviewFormCtrl/ReviewDateFormCtrl";
import ReviewPriceFormCtrl from "./ReviewFormCtrl/ReviewPriceFormCtrl";
import ReviewScoreFormCtrl from "./ReviewFormCtrl/ReviewScoreFormCtrl";

export default function CreateReviewForm({
  user,
  handleCatSelect,
  handleEatSelect,
  handleChange,
  existingCategories,
  existingEateries,
  newMegaState,
  setNewMegaState,
  forReviewFetch,
  setForReviewFetch,
}) {
  const handleCreateReview = async (evt) => {
    evt.preventDefault();
    setNewMegaState({ ...newMegaState });
    console.log(JSON.stringify(newMegaState));
    const reviewData = {
      category: newMegaState.categoryID,
      user: user._id,
      name: newMegaState.eateryID,
      title: newMegaState.reviewTitle,
      image: newMegaState.reviewImage,
      desc: newMegaState.reviewDesc,
      date: newMegaState.reviewDate,
      price: newMegaState.reviewPrice,
      score: newMegaState.reviewScore,
    };
    try {
      const response = await fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      if (response.ok) {
        setForReviewFetch(!forReviewFetch);
      } else {
        console.log("Failed to create review");
      }
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryID: "",
      userID: "",
      eateryID: "",
      reviewTitle: "",
      reviewImage: "",
      reviewDesc: "",
      reviewDate: new Date(),
      reviewPrice: 0,
      reviewScore: 0,
    });
  };
  const reusedProps = {
    user,
    handleCatSelect,
    handleEatSelect,
    handleChange,
    existingCategories,
    existingEateries,
    newMegaState,
    setNewMegaState,
    forReviewFetch,
    setForReviewFetch,
  };
  return (
    <Form className="section-container">
      <h2>Write a review</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingCategory, index) => (
              <option key={index} value={existingCategory._id}>
                {existingCategory.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingEateries
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingEatery, index) => (
              <option key={index} value={existingEatery._id}>
                {existingEatery.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <ReviewTitleFormCtrl {...reusedProps} />
      <ReviewImageFormCtrl {...reusedProps} />
      <ReviewDescFormCtrl {...reusedProps} />
      <ReviewDateFormCtrl {...reusedProps} />
      <ReviewPriceFormCtrl {...reusedProps} />
      <ReviewScoreFormCtrl {...reusedProps} />
      <Button variant="primary" size="lg" onClick={handleCreateReview}>
        Create a review
      </Button>
    </Form>
  );
}
