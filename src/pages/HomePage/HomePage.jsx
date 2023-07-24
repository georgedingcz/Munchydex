import { Container } from "react-bootstrap";
import HomeCatCarousel from "../../components/Home/HomeCatCarousel";
import SiteIntro from "../../components/Home/SiteIntro";

export default function HomePage({
  existingCategories,
  setExistingCategories,
}) {
  return (
    <Container>
      {<SiteIntro />}
      {<HomeCatCarousel existingCategories={existingCategories} />}
      <p>What are some of the reviews available:</p>
    </Container>
  );
}
