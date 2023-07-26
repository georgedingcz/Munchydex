import { useEffect } from "react";
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ReviewListPerCat({
  setExistingReviews,
  existingReviews,
  formatDate,
  newMegaState,
  existingCategories,
  setNewMegaState,
}) {
  const handleUpdateCatSelect = async (evt) => {
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory._id === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };
  const navigate = useNavigate();

  const id = newMegaState.categoryID;

  const handleOneReviewPage = (id) => {
    navigate(`/review/` + id);
  };

  useEffect(() => {
    const fetchOneCatReviews = async () => {
      try {
        const response = await fetch(`/reviews/category/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setExistingReviews(data);
        } else {
          console.log("Failed to get reviews for one category");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOneCatReviews();
  }, [newMegaState.categoryID]);
  return (
    <div className="section-container">
      <Form>
        <Form.Group className="mb-3">
          <Form.Select
            name="categoryType"
            id="categoryType-select"
            onChange={handleUpdateCatSelect}
          >
            <option value="">View Reviews Per Category</option>
            {existingCategories.map((existingCategory, index) => (
              <option key={index} value={existingCategory._id}>
                {existingCategory.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      {existingReviews.length === 0 ? (
        <>No existing reviews for this category</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {existingReviews.map((existingReview, index) => (
            <Col key={index}>
              <Card
                key={index}
                style={{ width: "18rem" }}
                onClick={() => handleOneReviewPage(existingReview?._id)}
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
                  <Card.Subtitle>{existingReview?.name?.name}</Card.Subtitle>
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
