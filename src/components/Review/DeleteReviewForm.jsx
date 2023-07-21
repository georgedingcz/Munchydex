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
      await fetch(`/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
    setForReviewFetch(!forReviewFetch);
  };
  return (
    <form className="section-container">
      <h2>Delete a review</h2>
      <div>
        Category:
        <select
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
        </select>
      </div>
      Eatery Name:
      <select
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
      </select>
      <br />
      Select title:
      <select name="title" id="title-select" onChange={handleUserTitleSelect}>
        <option value="">Select a title</option>
        {filteredReviewsByEatery.map((filteredReview, index) => (
          <option key={index} value={filteredReview._id}>
            {filteredReview.title}
          </option>
        ))}
      </select>
      <button onClick={handleDeleteReview}>Delete a review</button>
    </form>
  );
}
