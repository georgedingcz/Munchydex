import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CatNameFormCtrl from "./CatFormCtrl/CatNameFormCtrl";
import CatImageFormCtrl from "./CatFormCtrl/CatImageFormCtrl";
import CatDescFormCtrl from "./CatFormCtrl/CatDescFormCtrl";

export default function CreateCatForm({
  newMegaState,
  setNewMegaState,
  existingCategories,
  setExistingCategories,
  handleChange,
}) {
  const handleCreateCat = async (evt) => {
    evt.preventDefault();
    const categoryData = {
      name: newMegaState.categoryName,
      image: newMegaState.categoryImage,
      briefDesc: newMegaState.categoryDesc,
    };
    try {
      const response = await fetch("/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      if (response.ok) {
        setExistingCategories([...existingCategories, categoryData]);
      } else {
        console.log("Failed to create category");
      }
    } catch (err) {
      console.log(err);
    }
    setNewMegaState({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
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
      <h2>Add eatery categories</h2>
      <CatNameFormCtrl {...reusedProps} />
      <CatImageFormCtrl {...reusedProps} />
      <CatDescFormCtrl {...reusedProps} />
      <Button variant="primary" size="lg" onClick={handleCreateCat}>
        Submit
      </Button>
    </Form>
  );
}
