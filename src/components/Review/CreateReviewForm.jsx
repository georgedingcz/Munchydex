import { Button, Form } from "react-bootstrap";

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
      await fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
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
    setForReviewFetch(!forReviewFetch);
  };

  return (
    <Form className="section-container">
      <h2>Write a review</h2>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="catName">
          Category
        </Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="eatName">
          Name
        </Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewTitle">
          Title
        </Form.Label>
        <Form.Control
          type="text"
          name="reviewTitle"
          value={newMegaState.reviewTitle}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewImage">
          Image
        </Form.Label>
        <Form.Control
          type="text"
          name="reviewImage"
          value={newMegaState.reviewImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewDesc">
          Description
        </Form.Label>
        <Form.Control
          type="text"
          name="reviewDesc"
          value={newMegaState.reviewDesc}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewDate">
          Date
        </Form.Label>
        <Form.Control
          type="date"
          name="reviewDate"
          value={newMegaState.reviewDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewPrice">
          Price
        </Form.Label>
        <Form.Control
          type="number"
          name="reviewPrice"
          value={newMegaState.reviewPrice}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="reviewScore">
          Score
        </Form.Label>
        <Form.Control
          type="number"
          name="reviewScore"
          value={newMegaState.reviewScore}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleCreateReview}>
        Create a review
      </Button>
    </Form>
  );
}
