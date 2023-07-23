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
    <form className="section-container">
      <h2>Update a review</h2>
      <div className="mb-3">
        <label for="reviewCategory" className="form-label">
          Category
        </label>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleUserCatSelect}
          className="form-select"
          aria-label="Default select example"
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
        </select>
      </div>
      <div className="mb-3">
        <label for="reviewName" className="form-label">
          Eatery
        </label>
        <select
          name="eateryName"
          id="eateryName-select"
          onChange={handleUserEatSelect}
          className="form-select"
          aria-label="Default select example"
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
        </select>
      </div>
      <div className="mb-3">
        <label for="reviewTitle" className="form-label">
          Title
        </label>
        <select
          name="title"
          id="title-select"
          onChange={handleUserTitleSelect}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select a title</option>
          {filteredReviewsByEatery.map((filteredReview, index) => (
            <option key={index} value={filteredReview._id}>
              {filteredReview.title}
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
        onClick={handleUpdateReview}
      >
        Update a review
      </button>
    </form>
  );
}
