import { Container } from "react-bootstrap";
import HomeCatCarousel from "../../components/Home/HomeCatCarousel";
import SiteIntro from "../../components/Home/SiteIntro";
import ReviewListPerCat from "../../components/Review/ReviewListPerCat";

export default function HomePage() {
  return (
    <Container>
      <SiteIntro />
      <HomeCatCarousel />
      <ReviewListPerCat />
    </Container>
  );
}
