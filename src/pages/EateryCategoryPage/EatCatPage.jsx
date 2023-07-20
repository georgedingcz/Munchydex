import CategoryDetails from "../../components/Category/CategoryDetails";
import CategoryList from "../../components/Category/CategoryList";
import CreateCatForm from "../../components/Category/CreateCatForm";
import UpdateCatForm from "../../components/Category/UpdateCatForm";

export default function CreateEatCat({
  existingCategories,
  setExistingCategories,
  setForCategoryFetch,
  forCategoryFetch,

  newMegaState,
  setNewMegaState,
}) {
  const handleChange = (evt) => {
    setNewMegaState({
      ...newMegaState,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleDelete = async (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setExistingCategories(
      existingCategories.filter((category) => category._id !== evt.target.value)
    );
  };

  const handleCatSelect = async (evt) => {
    console.log(evt.target.value);
    const chosenCat = existingCategories.find(
      (chosenCategory) => chosenCategory.name === evt.target.value
    );
    setNewMegaState({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  return (
    <div className="page-container">
      {
        <CreateCatForm
          newMegaState={newMegaState}
          setNewMegaState={setNewMegaState}
          existingCategories={existingCategories}
          setExistingCategories={setExistingCategories}
          handleChange={handleChange}
        />
      }

      {
        <UpdateCatForm
          newMegaState={newMegaState}
          existingCategories={existingCategories}
          handleChange={handleChange}
          handleCatSelect={handleCatSelect}
          forCategoryFetch={forCategoryFetch}
          setForCategoryFetch={setForCategoryFetch}
        />
      }

      <div className="section-container">
        <CategoryList
          existingCategories={existingCategories}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
