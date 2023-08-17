import { Button, Form } from "react-bootstrap";
import ReviewTitleFormCtrl from "./ReviewFormCtrl/ReviewTitleFormCtrl";
import ReviewImageFormCtrl from "./ReviewFormCtrl/ReviewImageFormCtrl";
import ReviewDescFormCtrl from "./ReviewFormCtrl/ReviewDescFormCtrl";
import ReviewDateFormCtrl from "./ReviewFormCtrl/ReviewDateFormCtrl";
import ReviewPriceFormCtrl from "./ReviewFormCtrl/ReviewPriceFormCtrl";
import ReviewScoreFormCtrl from "./ReviewFormCtrl/ReviewScoreFormCtrl";
import { useContext } from "react";
import { MunchyContext } from "../../pages/App/App";

export default function CreateReviewForm() {
  const context = useContext(MunchyContext);

  return (
    <Form className="section-container">
      <h2>Write a review</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleCatSelect}
        >
          <option value="">Select a category</option>
          {context.existingCategories
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
          onChange={context.handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {context.existingEateries
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
      <ReviewTitleFormCtrl />
      <ReviewImageFormCtrl />
      <ReviewDescFormCtrl />
      <ReviewDateFormCtrl />
      <ReviewPriceFormCtrl />
      <ReviewScoreFormCtrl />
      <Button variant="primary" size="lg" onClick={context.handleCreateReview}>
        Create a review
      </Button>
    </Form>
  );
}
