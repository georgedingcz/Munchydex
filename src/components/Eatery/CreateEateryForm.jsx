import { Button, Form } from "react-bootstrap";
import EatNameFormCtrl from "./EatFormCtrl/EatNameFormCtrl";
import EatLocationFormCtrl from "./EatFormCtrl/EatLocationFormCtrl";
import EatImageFormCtrl from "./EatFormCtrl/EatImageFormCtrl";

export default function CreateEateryForm({
  existingCategories,
  handleEatCatSelect,
  handleChange,
  newMegaState,
  setNewMegaState,
  existingEateries,
  setExistingEateries,
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
    try {
      const response = await fetch("/eateries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eateryData),
      });
      if (response.ok) {
        setExistingEateries([...existingEateries, eateryData]);
      } else {
        console.log("Failed to create eatery");
      }
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryID: eateryData.category,
      eateryName: "",
      eateryLocation: "",
      eateryImage: "",
    });
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
      <EatNameFormCtrl {...reusedProps} />
      <EatLocationFormCtrl {...reusedProps} />
      <EatImageFormCtrl {...reusedProps} />
      <Button variant="primary" size="lg" onClick={handleCreateEatery}>
        Create an eatery
      </Button>
    </Form>
  );
}
