import CategoryList from "../../components/Category/CategoryList";

export default function HomePage({
  existingCategories,
  setExistingCategories,
}) {
  return (
    <div className="page-container">
      <h1>HomePage</h1>
      <p>Website introduction:</p>
      {<CategoryList existingCategories={existingCategories} />}
      <p>What are some of the reviews available:</p>
    </div>
  );
}
