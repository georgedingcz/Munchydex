import { Button, Form } from "react-bootstrap";

export default function UpdateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  existingEateries,
  forEateryFetch,
  setForEateryFetch,
  handleEatSelect,
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
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setForEateryFetch(!forEateryFetch);
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
          {existingCategories.map((existingCategory, index) => (
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
          {existingEateries.map((existingEatery, index) => (
            <option key={index} value={existingEatery._id}>
              {existingEatery.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          name="categoryName"
          value={newMegaState.categoryName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatLocation">
        <Form.Label className="form-label">Location</Form.Label>
        <Form.Control
          type="text"
          name="eateryLocation"
          value={newMegaState.eateryLocation}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eatImage">
        <Form.Label className="form-label">Image</Form.Label>
        <Form.Control
          type="text"
          name="eateryImage"
          value={newMegaState.eateryImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={handleUpdateEat}>
        Update an eatery
      </Button>
    </Form>
  );
}
