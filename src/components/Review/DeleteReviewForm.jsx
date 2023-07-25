import { Button, Form } from "react-bootstrap";

export default function DeleteReviewForm({
  handleUserCatSelect,
  existingReviews,
  handleUserEatSelect,
  filteredReviewsByCat,
  handleUserTitleSelect,
  filteredReviewsByEatery,
  newMegaState,
  setForReviewFetch,
  forReviewFetch,
}) {
  const handleDeleteReview = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.reviewID;
    try {
      const response = await fetch(`/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setForReviewFetch(!forReviewFetch);
      } else {
        console.log("Failed to delete review")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form className="section-container">
      <h2>Delete a review</h2>
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
          ].map((categoryName, index) => (
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
          ].map((eateryName, index) => (
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
          {filteredReviewsByEatery.map((filteredReview, index) => (
            <option key={index} value={filteredReview._id}>
              {filteredReview.title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleDeleteReview}>
        Delete a review
      </Button>
    </Form>
  );
}
