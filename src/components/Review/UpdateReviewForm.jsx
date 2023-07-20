export default function UpdateReviewForm ({
    user,
  
    handleCatSelect,
    handleEatSelect,
    handleChange,
  
    existingCategories,
    existingEateries,
  
    newMegaState,
    setNewMegaState,
  
    existingReviews,
    setExistingReviews,
  
    forReviewFetch,
    setForReviewFetch,
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
            onChange={handleCatSelect}
          >
            <option value="">Select a category</option>
  
            {/* {existingReviews.map((existingReview, index) => (
              <option key={index} value={existingReview.category.name}>
                {existingReview.category.name}
              </option>
            ))} */}
            {[...new Set(existingReviews.map((existingReview) => existingReview.name.name))].map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
          </select>
        </div>
        Eatery Name:
        <select
          name="eateryName"
          id="eateryName-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingReviews.map((existingReview, index) => (
            <option key={index} value={existingReview.name.name}>
              {existingReview.name.name}
            </option>
          ))}
        </select>
        <br />
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
        <button onClick={handleUpdateReview}>Create a review</button>
      </form>

    );
}