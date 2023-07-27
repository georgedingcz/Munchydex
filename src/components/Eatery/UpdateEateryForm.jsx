import { Button, Form } from "react-bootstrap";
import EatNameFormCtrl from "./EatFormCtrl/EatNameFormCtrl";
import EatLocationFormCtrl from "./EatFormCtrl/EatLocationFormCtrl";
import EatImageFormCtrl from "./EatFormCtrl/EatImageFormCtrl";

export default function UpdateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  existingEateries,
  forEateryFetch,
  setForEateryFetch,
  handleEatSelect,
  setNewMegaState,
  setExistingEateries,
}) {
  const handleUpdateEat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.eateryID;
    const updatedEatData = {
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    try {
      const response = await fetch(`/eateries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEatData),
      });
      if (response.ok) {
        setForEateryFetch(!forEateryFetch);
      } else {
        console.log("Failed to update eatery");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const reusedProps = {
    existingCategories,
    handleEatCatSelect,
    handleChange,
    newMegaState,
    setNewMegaState,
    existingEateries,
    setExistingEateries,
  };
  return (
    <Form className="section-container">
      <h2>Update eatery</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingCategory, index) => (
              <option key={index} value={existingCategory._id}>
                {existingCategory.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleEatSelect}
        >
          <option value="">Select an eatery</option>
          {existingEateries
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
            })
            .map((existingEatery, index) => (
              <option key={index} value={existingEatery._id}>
                {existingEatery.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <EatNameFormCtrl {...reusedProps} />
      <EatLocationFormCtrl {...reusedProps} />
      <EatImageFormCtrl {...reusedProps} />
      <Button variant="primary" size="lg" onClick={handleUpdateEat}>
        Update an eatery
      </Button>
    </Form>
  );
}
