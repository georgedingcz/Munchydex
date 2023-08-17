import { useContext } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { MunchyContext } from "../../pages/App/App";

export default function EateryListPerCat() {
  const context = useContext(MunchyContext);

  return (
    <div className="section-container">
      <h2>View eateries per category:</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={context.handleEatCatSelect}
        >
          <option value="">Select a category</option>
          {context.existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingCategory, index) => (
              <option key={index} value={existingCategory._id}>
                {existingCategory.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      {context.existingEateries.length === 0 ? (
        <>No eateries for this category</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {context.existingEateries.map((existingEatery, index) => (
            <Col key={index}>
              <Card
                key={index}
                style={{ width: "18rem" }}
                onClick={() => context.handleOneEatPage(existingEatery?._id)}
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
