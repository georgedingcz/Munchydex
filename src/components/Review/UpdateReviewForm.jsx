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
      Title:
      <input
        type="text"
        name="reviewTitle"
        value={newMegaState.reviewTitle}
        onChange={handleChange}
      />
      <br />
      Image:
      <input
        type="text"
        name="reviewImage"
        value={newMegaState.reviewImage}
        onChange={handleChange}
      />
      <br />
      Description:
      <input
        type="text"
        name="reviewDesc"
        value={newMegaState.reviewDesc}
        onChange={handleChange}
      />
      <br />
      Date:
      <input
        type="date"
        name="reviewDate"
        value={newMegaState.reviewDate}
        onChange={handleChange}
      />
      <br />
      Price:
      <input
        type="number"
        name="reviewPrice"
        value={newMegaState.reviewPrice}
        onChange={handleChange}
      />
      <br />
      Score:
      <input
        type="number"
        name="reviewScore"
        value={newMegaState.reviewScore}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdateReview}>Update a review</button>
    </form>
  );
}
