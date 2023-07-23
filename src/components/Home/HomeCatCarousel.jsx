import { useState } from "react";
import { Accordion, Card, Carousel } from "react-bootstrap";

export default function CategoryList({ existingCategories }) {
  const [index, setIndex] = useState(0);

  const handleCarousel = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="section-container">
      <h2>Food categories available:</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleCarousel}
        data-bs-theme="dark"
        className="carousel-container"
      >
        {existingCategories.map((existingCategory, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={existingCategory.image}
              alt="category"
            />
            {/* <Carousel.Caption>
              <h5> {existingCategory.name}</h5>
              <p>{existingCategory.briefDesc}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
