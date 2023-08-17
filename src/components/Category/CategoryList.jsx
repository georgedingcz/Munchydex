import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MunchyContext } from "../../pages/App/App";

export default function CategoryList() {
  const context = useContext(MunchyContext);

  const navigate = useNavigate();
  const handleOneCatPage = (id) => {
    navigate(`/eatcat/` + id);
    console.log(id);
  };
  return (
    <div className="section-container">
      <h2>Food categories available:</h2>
      {context.existingCategories.length === 0 ? (
        <>There are no categories</>
      ) : (
        <Row xs={1} md={2} lg={3}>
          {context.existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingCategory, index) => (
              <Col key={index}>
                <Card
                  key={index}
                  style={{ width: "18rem" }}
                  onClick={() => handleOneCatPage(existingCategory?._id)}
                >
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
