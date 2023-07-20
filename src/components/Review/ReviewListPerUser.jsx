import { useEffect } from "react";

export default function ReviewListPerUser({
  existingReviews,
}) {
  

  return (
    <div className="section-container">
      <h2>List of reviews</h2>
      {existingReviews.map((existingReview, index) => (
        <div key={index}>
          <div>Title: {existingReview.title}</div>
          <div>Category: {existingReview.category.name}</div>
          <div>Eatery: {existingReview.name.name} </div>
          <div>Description: {existingReview.desc} </div>
          <div>Date: {existingReview.date} </div>
          <div>Price: {existingReview.price} </div>
          <div>Score: {existingReview.score} </div>
          <div>
            Picture:
            <img
              src={existingReview.image}
              alt="category"
              width="50"
              height="50"
            />
          </div>
        </div>
      ))}
    </div>
  );
}