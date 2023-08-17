import { Button, Form } from "react-bootstrap";
import ReviewTitleFormCtrl from "./ReviewFormCtrl/ReviewTitleFormCtrl";
import ReviewImageFormCtrl from "./ReviewFormCtrl/ReviewImageFormCtrl";
import ReviewDescFormCtrl from "./ReviewFormCtrl/ReviewDescFormCtrl";
import ReviewDateFormCtrl from "./ReviewFormCtrl/ReviewDateFormCtrl";
import ReviewPriceFormCtrl from "./ReviewFormCtrl/ReviewPriceFormCtrl";
import ReviewScoreFormCtrl from "./ReviewFormCtrl/ReviewScoreFormCtrl";
import { useContext } from "react";
import { MunchyContext } from "../../pages/App/App";

export default function UpdateReviewForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Update a review</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleUserCatSelect}
        >
          <option value="">Select a category</option>
          {[
            ...new Set(
              context?.existingReviews.map(
                (existingReview) => existingReview?.category?.name
              )
            ),
          ]
            .sort((a, b) => {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((categoryName, index) => (
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
          onChange={context.handleUserEatSelect}
        >
          <option value="">Select an eatery</option>
          {[
            ...new Set(
              context.filteredReviewsByCat.map(
                (filteredReview) => filteredReview.name.name
              )
            ),
          ]
            .sort((a, b) => {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((eateryName, index) => (
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
          onChange={context.handleUserTitleSelect}
        >
          <option value="">Select a title</option>
          {context.filteredReviewsByEatery
            .sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((filteredReview, index) => (
              <option key={index} value={filteredReview._id}>
                {filteredReview.title}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <ReviewTitleFormCtrl />
      <ReviewImageFormCtrl />
      <ReviewDescFormCtrl />
      <ReviewDateFormCtrl />
      <ReviewPriceFormCtrl />
      <ReviewScoreFormCtrl />
      <Button variant="primary" size="lg" onClick={context.handleUpdateReview}>
        Update a review
      </Button>
    </Form>
  );
}
