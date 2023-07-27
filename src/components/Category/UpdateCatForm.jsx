import { Button, Form } from "react-bootstrap";
import CatNameFormCtrl from "./CatFormCtrl/CatNameFormCtrl";
import CatImageFormCtrl from "./CatFormCtrl/CatImageFormCtrl";
import CatDescFormCtrl from "./CatFormCtrl/CatDescFormCtrl";

export default function UpdateCatForm({
  newMegaState,
  existingCategories,
  handleChange,
  forCategoryFetch,
  setForCategoryFetch,
  setNewMegaState,
  setExistingCategories,
}) {
  const handleUpdateCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory._id === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  const handleUpdateCat = async (evt) => {
    evt.preventDefault();
    const id = newMegaState.categoryID;
    const updatedCatData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCatData),
      });
      if (response.ok) {
        setForCategoryFetch(!forCategoryFetch);
      } else {
        console.log("Failed to update category");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const reusedProps = {
    newMegaState,
    setNewMegaState,
    existingCategories,
    setExistingCategories,
    handleChange,
  };

  return (
    <Form className="section-container">
      <h2>Update eatery categories</h2>
      <Form.Group className="mb-3">
        <Form.Select
          name="categoryType"
          id="categoryType-select"
          onChange={handleUpdateCatSelect}
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
      <CatNameFormCtrl {...reusedProps} />
      <CatImageFormCtrl {...reusedProps} />
      <CatDescFormCtrl {...reusedProps} />
      <Button variant="primary" size="lg" onClick={handleUpdateCat}>
        Submit
      </Button>
    </Form>
  );
}
