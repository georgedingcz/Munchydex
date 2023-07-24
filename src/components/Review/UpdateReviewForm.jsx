import { Button, Form } from "react-bootstrap";

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
      await fetch(`/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReviewData),
      });
    } catch (err) {
      console.log(err);
    }
    setForReviewFetch(!forReviewFetch);
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
      <Form.Group className="mb-3" controlId="reviewTitle">
        <Form.Label className="form-label">Title</Form.Label>
        <Form.Control
          type="text"
          name="reviewTitle"
          value={newMegaState.reviewTitle}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewImage">
        <Form.Label className="form-label">Image</Form.Label>
        <Form.Control
          type="text"
          name="reviewImage"
          value={newMegaState.reviewImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewDesc">
        <Form.Label className="form-label">Description</Form.Label>
        <Form.Control
          type="text"
          name="reviewDesc"
          value={newMegaState.reviewDesc}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewDate">
        <Form.Label className="form-label">Date</Form.Label>
        <Form.Control
          type="date"
          name="reviewDate"
          value={newMegaState.reviewDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewPrice">
        <Form.Label className="form-label">Price</Form.Label>
        <Form.Control
          type="number"
          name="reviewPrice"
          value={newMegaState.reviewPrice}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewScore">
        <Form.Label className="form-label">Score</Form.Label>
        <Form.Control
          type="number"
          name="reviewScore"
          value={newMegaState.reviewScore}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleUpdateReview}>
        Update a review
      </Button>
    </Form>
  );
}
