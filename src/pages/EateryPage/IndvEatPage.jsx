import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function IndvEat() {
  const [oneEat, setOneEat] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchChosenEat = async () => {
      try {
        const response = await fetch(`/eateries/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOneEat(data);
        } else {
          console.log("Failed to get the chosen eatery");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChosenEat();
  }, []);

  return (
    <Card>
      <Card.Img src={oneEat?.image} alt="eatery" fluid="true" variant="top" />
      <Card.Body>
        <Card.Title>{oneEat?.name}</Card.Title>
        <Card.Text>{oneEat?.location}</Card.Text>
      </Card.Body>
    </Card>
  );
}
