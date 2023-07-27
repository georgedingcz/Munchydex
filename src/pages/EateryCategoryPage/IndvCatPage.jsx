import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function IndvCat({
  setNewMegaState,
  newMegaState,
  setForEateryFetch,
  forEateryFetch,
  existingEateries,
}) {
  const [oneCat, setOneCat] = useState({});

  const navigate = useNavigate();

  const handleOneEatPage = (id) => {
    navigate(`/eatery/` + id);
    console.log(id);
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchChosenCat = async () => {
      try {
        const response = await fetch(`/categories/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOneCat(data);

          //
          await setNewMegaState({
            ...newMegaState,
            categoryID: id,
          });
          setForEateryFetch(!forEateryFetch);
          //
        } else {
          console.log("Failed to get the chosen category");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChosenCat();
  }, []);

  return (
    <Container>
      <Card>
        <Card.Img src={oneCat?.image} alt="category" fluid variant="top" />
        <Card.Body>
          <Card.Title>{oneCat?.name}</Card.Title>
          <Card.Text>{oneCat?.briefDesc}</Card.Text>
        </Card.Body>
      </Card>
      <Container>
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
      </Container>
    </Container>
  );
}
