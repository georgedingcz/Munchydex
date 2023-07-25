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
        console.log("Failed to create review")
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
          {existingCategories.map((existingCategory, index) => (
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
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
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
          as="textarea"
          rows={5}
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
      <Button variant="primary" size="lg" onClick={handleCreateReview}>
        Create a review
      </Button>
    </Form>
  );
}
