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
    <form className="section-container">
      <h2>Write a review</h2>
      <div className="mb-3">
        <label for="reviewCategory" className="form-label">
          Category
        </label>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select a category</option>

          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label for="reviewName" className="form-label">
          Eatery Name
        </label>
        <select
          name="eateryName"
          id="eateryName-select"
          onChange={handleEatSelect}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select an eatery</option>
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label for="reviewTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="reviewTitle"
          value={newMegaState.reviewTitle}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="reviewImage" className="form-label">
          Image
        </label>
        <input
          type="text"
          name="reviewImage"
          value={newMegaState.reviewImage}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="reviewDesc" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="reviewDesc"
          value={newMegaState.reviewDesc}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="reviewDate" className="form-label">
          Date
        </label>
        <input
          type="date"
          name="reviewDate"
          value={newMegaState.reviewDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="reviewPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          name="reviewPrice"
          value={newMegaState.reviewPrice}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label for="reviewScore" className="form-label">
          Score
        </label>
        <input
          type="number"
          name="reviewScore"
          value={newMegaState.reviewScore}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleCreateReview}
      >
        Create a review
      </button>
    </form>
  );
}
