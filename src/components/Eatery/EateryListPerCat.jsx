import { Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EateryListPerCat({
  existingEateries,
  handleEatCatSelect,
  existingCategories,
}) {
  const navigate = useNavigate();

  const handleOneEatPage = (id) => {
    navigate(`/eatery/` + id);
    console.log(id);
  };
  return (
    <div className="section-container">
      <h2>View eateries per category:</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory._id}>
              {existingCategory.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {existingEateries.length === 0 ? (
        <>No eateries for this category</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {existingEateries.map((existingEatery, index) => (
            <Col key={index}>
              <Card
                key={index}
                style={{ width: "18rem" }}
                onClick={() => handleOneEatPage(existingEatery?._id)}
              >
                <Card.Img
                  src={existingEatery?.image}
                  alt="eatery"
                  width="50"
                  height="200"
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{existingEatery?.name}</Card.Title>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
