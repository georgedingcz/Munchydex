import { Card, Col, Row } from "react-bootstrap";

export default function CategoryList({ existingCategories }) {
  return (
    <div className="section-container">
      <h2>Food categories available:</h2>
      {existingCategories.length === 0 ? (
        <>There are no categories</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {existingCategories.map((existingCategory, index) => (
            <Col key={index}>
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img
                  src={existingCategory?.image}
                  alt="category"
                  width="50"
                  height="200"
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>{existingCategory?.name}</Card.Title>
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
