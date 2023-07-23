import { Card } from "react-bootstrap";

export default function CategoryList({ existingCategories }) {
  return (
    <div className="section-container">
      <h2>Food categories available:</h2>
      {existingCategories.map((existingCategory, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img
            src={existingCategory.image}
            alt="category"
            width="50"
            height="200"
            variant="top"
          />
          <Card.Body>
            <Card.Title>{existingCategory.name}</Card.Title>
            <Card.Text>{existingCategory.briefDesc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
