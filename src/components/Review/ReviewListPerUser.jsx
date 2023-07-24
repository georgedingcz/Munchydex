import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function ReviewListPerUser({ existingReviews, formatDate }) {
  return (
    <div className="section-container">
      <h2>List of reviews</h2>
      {existingReviews.map((existingReview, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img
            src={existingReview.image}
            alt="category"
            width="50"
            height="200"
            variant="top"
          />
          <Card.Body>
            <Card.Title>{existingReview.title}</Card.Title>
            <Card.Subtitle>{existingReview.name.name}</Card.Subtitle>
            <Card.Text>{existingReview.desc}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{formatDate(existingReview.date)}</ListGroup.Item>
            <ListGroup.Item>${existingReview.price}</ListGroup.Item>
            <ListGroup.Item>Score: {existingReview.score}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}
