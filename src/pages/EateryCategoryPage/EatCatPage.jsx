import CategoryList from "../../components/Category/CategoryList";
import CreateCatForm from "../../components/Category/CreateCatForm";
import DeleteCatForm from "../../components/Category/DeleteCatForm";
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

  const handleCatSelect = async (evt) => {
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
      {
        <DeleteCatForm
          handleCatSelect={handleCatSelect}
          existingCategories={existingCategories}
          setExistingCategories={setExistingCategories}
          newMegaState={newMegaState}
        />
      }
      {<CategoryList existingCategories={existingCategories} />}
    </div>
  );
}
