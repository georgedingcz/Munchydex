import CategoryDetails from "../../components/Category/CategoryDetails";
import CategoryList from "../../components/Category/CategoryList";

export default function CreateEatCat({
  newCategory,
  setNewCategory,
  existingCategories,
  setExistingCategories,
}) {
  const fetchCategories = async () => {
    try {
      const response = await fetch("/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setExistingCategories(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (evt) => {
    setNewCategory({
      ...newCategory,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleCreateCat = async (evt) => {
    evt.preventDefault();
    setNewCategory({ ...newCategory });
    console.log(JSON.stringify(newCategory));
    const categoryData = {
      name: newCategory.categoryName,
      image: newCategory.categoryImage,
      briefDesc: newCategory.categoryDesc,
    };
    setExistingCategories([...existingCategories, categoryData]);
    try {
      const response = await fetch("/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
    } catch (err) {
      console.log(err);
    }
    setNewCategory({
      categoryName: "",
      categoryImage: "",
      categoryDesc: "",
    });
  };

  const handleUpdateCat = async (evt) => {
    evt.preventDefault();
    const id = newCategory.categoryID;
    console.log("this thing", JSON.stringify(id));
    const updatedCatData = {
      name: newCategory.categoryName,
      image: newCategory.categoryImage,
      briefDesc: newCategory.categoryDesc,
    };
    try {
      const response = await fetch(`/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCatData),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    fetchCategories();
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
    setNewCategory({
      categoryName: chosenCat.name,
      categoryImage: chosenCat.image,
      categoryDesc: chosenCat.briefDesc,
      categoryID: chosenCat._id,
    });
  };

  return (
    <div className="page-container">
      <form className="section-container">
        <h2>Add eatery categories</h2>
        <CategoryDetails
          newCategory={newCategory}
          handleChange={handleChange}
        />
        <button onClick={handleCreateCat}>Submit</button>
      </form>

      <form className="section-container">
        <h2>Update eatery categories</h2>
        <select
          name="categoryType"
          id="categoryType-select"
          onChange={handleCatSelect}
        >
          <option value="">Select a category</option>
          {existingCategories.map((existingCategory, index) => (
            <option key={index} value={existingCategory.name}>
              {existingCategory.name}
            </option>
          ))}
        </select>
        <CategoryDetails
          newCategory={newCategory}
          handleChange={handleChange}
        />
        <button onClick={handleUpdateCat}>Submit</button>
      </form>

      <div className="section-container">
        <CategoryList
          existingCategories={existingCategories}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
