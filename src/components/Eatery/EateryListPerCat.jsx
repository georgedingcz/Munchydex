import { Card, Form } from "react-bootstrap";

export default function EateryListPerCat({
  existingEateries,
  handleEatCatSelect,
  existingCategories,
}) {
  return (
    <div className="section-container">
      <h2>View eateries per category:</h2>
      <Form.Group className="mb-3">
        <Form.Label className="form-label" controlId="catName">
          Category
        </Form.Label>
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
      {existingEateries.map((existingEatery, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img
            src={existingEatery.image}
            alt="eatery"
            width="50"
            height="200"
            variant="top"
          />
          <Card.Body>
            <Card.Title>{existingEatery.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
