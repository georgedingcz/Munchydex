import { useEffect } from "react";

export default function ReviewListPerUser({ existingReviews }) {
  return (
    <div className="section-container">
      <h2>List of reviews</h2>
      {existingReviews.map((existingReview, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div>
            Picture:
            <img
              src={existingReview.image}
              alt="category"
              width="50"
              height="200"
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{existingReview.title}</h5>

            <p className="card-text">
              Category: {existingReview.category.name}
            </p>
            <p className="card-text">Eatery: {existingReview.name.name} </p>
            <p className="card-text">Description: {existingReview.desc} </p>
            <p className="card-text">Date: {existingReview.date} </p>
            <p className="card-text">Price: {existingReview.price} </p>
            <p className="card-text">Score: {existingReview.score} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
