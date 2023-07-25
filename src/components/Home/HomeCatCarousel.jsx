import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CategoryList({ existingCategories }) {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleCarousel = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleOneCatPage = (id) => {
    navigate(`/eatcat/` + id);
    console.log(id)
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
          <Carousel.Item
            key={index}
            onClick={() => handleOneCatPage(existingCategory?._id)}
          >
            <Image
              className="d-block w-100"
              src={existingCategory?.image}
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
              <h3>{existingCategory?.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
