import { Button, Form } from "react-bootstrap";

export default function CreateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  setNewMegaState,
  existingEateries,
  setExistingEateries,
  forEateryFetch,
  setForEateryFetch,
}) {
  const handleCreateEatery = async (evt) => {
    evt.preventDefault();
    setNewMegaState({ ...newMegaState });
    console.log(JSON.stringify(newMegaState));
    const eateryData = {
      category: newMegaState.categoryID,
      name: newMegaState.eateryName,
      location: newMegaState.eateryLocation,
      image: newMegaState.eateryImage,
    };
    setExistingEateries([...existingEateries, eateryData]);
    try {
      await fetch("/eateries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryID: eateryData.category,
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
    setForEateryFetch(!forEateryFetch);
  };

  return (
    <Form className="section-container">
      <h2>Create eatery</h2>
      <Form.Group className="mb-3" controlId="catName">
        <Form.Label className="form-label">Category</Form.Label>
        <Form.Select
          name="categoryID"
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
        <Form.Control
          type="text"
          name="eateryName"
          value={newMegaState.eateryName}
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
      <Button variant="primary" size="lg" onClick={handleCreateEatery}>
        Create an eatery
      </Button>
    </Form>
  );
}
