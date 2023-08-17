import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MunchyContext } from "../../pages/App/App";

export default function SearchForm() {
  const context = useContext(MunchyContext);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={context.allEateries.map((eatery) => eatery.name)}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} label="Eatery Search" size="small" />
        )}
        inputValue={context.searchName}
        onInputChange={(event, value) => {
          context.setSearchName(value);
        }}
        value={context.searchName}
        onChange={(event, value) => {
          context.setSearchName(value);
        }}
      />
      <Button
        variant="primary"
        size="sm"
        onClick={context.handleSearch}
        type="submit"
      >
        Submit
      </Button>
    </>
  );
}
