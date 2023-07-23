import { Container } from "react-bootstrap";
import HomeCatCarousel from "../../components/Home/HomeCatCarousel";

export default function HomePage({
  existingCategories,
  setExistingCategories,
}) {
  return (
    <Container>
      <h1>HomePage</h1>
      <p>Website introduction:</p>
      {<HomeCatCarousel existingCategories={existingCategories} />}
      <p>What are some of the reviews available:</p>
    </Container>
  );
}
