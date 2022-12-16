import "./css/Carousel.css";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import CarImg from "../assets/Grace-Riviera.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [CarImg, CarImg, CarImg, CarImg, CarImg];

const MultiCarousel = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      infinite
      showDots
      sliderClass="react-multi-carousel-track"
      containerClass="react-multi-carousel-list"
    >
      {images.slice(0, 5).map((image) => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default MultiCarousel;
