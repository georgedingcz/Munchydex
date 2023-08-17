import { useContext, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MunchyContext } from "../App/App";

export default function IndvReview() {
  const context = useContext(MunchyContext);

  const [oneReview, setOneReview] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchChosenReview = async () => {
      try {
        const response = await fetch(`/reviews/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOneReview(data);
        } else {
          console.log("Failed to get chosen review");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChosenReview();
  }, []);
  console.log(JSON.stringify(oneReview));

  return (
    <Card>
      <Card.Img src={oneReview?.image} alt="category" fluid variant="top" />
      <Card.Body>
        <Card.Title>{oneReview?.title}</Card.Title>
        <Card.Text>{oneReview?.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Eatery: {oneReview?.name?.name}</ListGroup.Item>
        <ListGroup.Item>{context.formatDate(oneReview?.date)}</ListGroup.Item>
        <ListGroup.Item>${oneReview?.price}</ListGroup.Item>
        <ListGroup.Item>Score: {oneReview?.score}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
