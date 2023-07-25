import { useEffect } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ReviewListPerUser({ existingReviews, formatDate }) {
  const navigate = useNavigate();

  const handleOneReviewPage = (id) => {
    navigate(`/review/` + id);
    console.log(id);
  };
  return (
    <div className="section-container">
      <h2>List of reviews</h2>
      {existingReviews.length === 0 ? (
        <>You have not reviewed anything yet. Create one now! :)</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {existingReviews.map((existingReview, index) => (
            <Col key={index}>
              <Card
                key={index}
                style={{ width: "18rem" }}
                onClick={() => handleOneReviewPage(existingReview._id)}
              >
                <Card.Img
                  src={existingReview?.image}
                  alt="category"
                  width="50"
                  height="200"
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{existingReview?.title}</Card.Title>
                  <Card.Subtitle>{existingReview?.name.name}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    {formatDate(existingReview?.date)}
                  </ListGroup.Item>
                  <ListGroup.Item>${existingReview?.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Score: {existingReview?.score}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
