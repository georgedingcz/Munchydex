import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";

export default function CategoryList({ existingCategories }) {
  const [index, setIndex] = useState(0);

  const handleCarousel = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="section-container">
      <Carousel
        activeIndex={index}
        onSelect={handleCarousel}
        data-bs-theme="light"
        className="carousel-container"
      >
        {existingCategories.map((existingCategory, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block w-100"
              src={existingCategory.image}
              alt="category"
              fluid
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: 0,
                color: "white",
              }}
            >
              <h3>{existingCategory.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
