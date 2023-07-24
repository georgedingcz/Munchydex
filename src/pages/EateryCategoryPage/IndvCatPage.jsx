import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function IndvCat({ setExistingCategories, existingCategories }) {
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
          setExistingCategories(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChosenCat();
  }, []);

  return (
    <Card>
      <Card.Img
        src={existingCategories.image}
        alt="category"
        fluid
        variant="top"
      />
      <Card.Body>
        <Card.Title>{existingCategories.name}</Card.Title>
        <Card.Text>{existingCategories.briefDesc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
