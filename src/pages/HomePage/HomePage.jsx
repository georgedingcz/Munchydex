import { Container, Form } from "react-bootstrap";
import HomeCatCarousel from "../../components/Home/HomeCatCarousel";
import SiteIntro from "../../components/Home/SiteIntro";
import ReviewListPerCat from "../../components/Review/ReviewListPerCat";
import SearchForm from "../../components/Eatery/SearchForm";

export default function HomePage({
  existingCategories,
  setExistingCategories,
  setNewMegaState,
  setExistingReviews,
  existingReviews,
  formatDate,
  newMegaState,
}) {
  const reusedProps = {
    existingCategories,
    setExistingCategories,
    setNewMegaState,
    setExistingReviews,
    existingReviews,
    formatDate,
    newMegaState,
  };
  return (
    <Container>
      <SiteIntro {...reusedProps} />
      <HomeCatCarousel {...reusedProps} />
      <SearchForm {...reusedProps} />
      <ReviewListPerCat {...reusedProps} />
    </Container>
  );
}
