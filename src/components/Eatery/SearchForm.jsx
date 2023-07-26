import { useEffect, useState } from "react";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [allEateries, setAllEateries] = useState([]);

  useEffect(() => {
    const fetchEateries = async () => {
      try {
        const response = await fetch("/eateries", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAllEateries(data);
        } else {
          console.log("Failed to get categories");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEateries();
  }, []);

  const [searchName, setSearchName] = useState("");
  const [filteredEat, setFilteredEat] = useState([]);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
    setFilteredEat(
      allEateries.filter((eatery) =>
        eatery.name.toLowerCase().startsWith(searchName.toLowerCase())
      )
    );
  };

  const navigate = useNavigate();

  const handleSearch = async (evt) => {
    const chosenEatery = allEateries.find(
      (eatery) => eatery.name.toLowerCase() === searchName
    );
    navigate(`/eatery/` + chosenEatery._id);
    console.log(chosenEatery._id);
  };
  return (
    <Form className="section-container">
      <Form.Group className="mb-3" controlId="searchEatery">
        <Form.Control
          type="text"
          placeholder="Search Eateries"
          className=" mr-sm-2"
          value={searchName}
          onChange={handleSearchChange}
        />
        <ListGroup>
          {filteredEat.map((eatery) => (
            <ListGroup.Item key={eatery._id}>{eatery.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Form.Group>
      <Button onClick={handleSearch} type="submit">
        Submit
      </Button>
    </Form>
  );
}
