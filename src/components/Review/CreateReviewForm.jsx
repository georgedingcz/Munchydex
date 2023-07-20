export default function CreateReviewForm({
  user,
  
  handleCatSelect,
  handleEatSelect,
  handleChange,

  existingCategories,
  existingEateries,

  newMegaState,
  setNewMegaState,
}) {
  const handleCreateReview = async (evt) => {
    evt.preventDefault();
    console.log("new eatery created");
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
    <form className="section-container">
      <h2>Write a review</h2>
      <div>User name: {user.name}</div>
      <div>
        Category:
        <select
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
        </select>
      </div>
      Eatery Name:
      <select
        name="eateryName"
        id="eateryName-select"
        onChange={handleEatSelect}
      >
        <option value="">Select an eatery</option>
        {existingEateries.map((existingEatery, index) => (
          <option key={index} value={existingEatery.name}>
            {existingEatery.name}
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
      <button onClick={handleCreateReview}>Create a review</button>
    </form>
  );
}
