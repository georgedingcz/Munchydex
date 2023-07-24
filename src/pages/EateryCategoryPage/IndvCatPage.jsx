import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewListPerCat from "../../components/Review/ReviewListPerCat";

export default function IndvCat() {
  const [oneCat, setOneCat] = useState({});

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
    </Container>
  );
}
