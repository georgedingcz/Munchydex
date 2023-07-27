import { Button, Form } from "react-bootstrap";
import ReviewTitleFormCtrl from "./ReviewFormCtrl/ReviewTitleFormCtrl";
import ReviewImageFormCtrl from "./ReviewFormCtrl/ReviewImageFormCtrl";
import ReviewDescFormCtrl from "./ReviewFormCtrl/ReviewDescFormCtrl";
import ReviewDateFormCtrl from "./ReviewFormCtrl/ReviewDateFormCtrl";
import ReviewPriceFormCtrl from "./ReviewFormCtrl/ReviewPriceFormCtrl";
import ReviewScoreFormCtrl from "./ReviewFormCtrl/ReviewScoreFormCtrl";

export default function UpdateReviewForm({
  handleChange,
  newMegaState,
  existingReviews,
  forReviewFetch,
  setForReviewFetch,
  handleUserCatSelect,
  handleUserEatSelect,
  filteredReviewsByCat,
  handleUserTitleSelect,
  filteredReviewsByEatery,
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
      const response = await fetch(`/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReviewData),
      });
      if (response.ok) {
        setForReviewFetch(!forReviewFetch);
      } else {
        console.log("Failed to update review");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const reusedProps = {
    handleChange,
    newMegaState,
    existingReviews,
    forReviewFetch,
    setForReviewFetch,
    handleUserCatSelect,
    handleUserEatSelect,
    filteredReviewsByCat,
    handleUserTitleSelect,
    filteredReviewsByEatery,
  };
  return (
    <Form className="section-container">
      <h2>Update a review</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
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
          ].sort((a, b) => {if (a < b) {
            return -1
          }}).map((categoryName, index) => (
            <option key={index} value={categoryName}>
              {categoryName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatName">
        <Form.Label className="form-label">Eatery</Form.Label>
        <Form.Select
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
          ].sort((a, b) => {if (a < b) {
            return -1
          }}).map((eateryName, index) => (
            <option key={index} value={eateryName}>
              {eateryName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewTitle">
        <Form.Label className="form-label">Title</Form.Label>
        <Form.Select
          name="title"
          id="title-select"
          onChange={handleUserTitleSelect}
        >
          <option value="">Select a title</option>
          {filteredReviewsByEatery.sort((a, b) => {if (a.title < b.title) {
              return -1
            }}).map((filteredReview, index) => (
            <option key={index} value={filteredReview._id}>
              {filteredReview.title}
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
      <Button variant="primary" size="lg" onClick={handleUpdateReview}>
        Update a review
      </Button>
    </Form>
  );
}
