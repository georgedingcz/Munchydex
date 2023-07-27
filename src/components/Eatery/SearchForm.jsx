import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
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

  const navigate = useNavigate();

  const handleSearch = async (evt) => {
    const chosenEatery = allEateries.find(
      (eatery) => eatery.name.toLowerCase() === searchName.toLowerCase()
    );

    if (chosenEatery) {
      navigate(`/eatery/` + chosenEatery._id);
      console.log(chosenEatery._id);
    } else {
      console.log("No matching eatery found");
      console.log(JSON.stringify(chosenEatery));
    }
  };
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={allEateries.map((eatery) => eatery.name)}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} label="Eatery Search" size="small" />
        )}
        inputValue={searchName}
        onInputChange={(event, value) => {
          setSearchName(value);
        }}
        value={searchName}
        onChange={(event, value) => {
          setSearchName(value);
        }}
      />
      <Button variant="primary" size="sm" onClick={handleSearch} type="submit">
        Submit
      </Button>
    </>
  );
}
