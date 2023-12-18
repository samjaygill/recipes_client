import { Carousel } from "react-responsive-3d-carousel";
import italian from "../assets/images/italian.png";
import chinese from "../assets/images/chinese.png";
import irish from "../assets/images/irish.png";
import american from "../assets/images/american.png";
import english from "../assets/images/english.png";
import thai from "../assets/images/thai.png";
import indian from "../assets/images/indian.png";
import french from "../assets/images/french.png";
import mexican from "../assets/images/mexican.png";
import spanish from "../assets/images/spanish.png";

import { useNavigate } from "react-router-dom";
import "./CountryCarousel.css";

const CountryCarousel = ({ onImageClick }) => {
  const navigate = useNavigate();

  const recipes = [
    {
      country: "Italian",
      image: italian,
      cuisine: "Italian",
    },
    {
      country: "Chinese",
      image: chinese,
      cuisine: "Chinese",
    },
    {
      country: "Irish",
      image: irish,
      cuisine: "Irish",
    },
    {
      country: "American",
      image: american,
      cuisine: "American",
    },
    {
      country: "British",
      image: english,
      cuisine: "British",
    },
    {
      country: "Thai",
      image: thai,
      cuisine: "Thai",
    },
    {
      country: "Indian",
      image: indian,
      cuisine: "Indian",
    },
    {
      country: "French",
      image: french,
      cuisine: "French",
    },
    {
      country: "Mexican",
      image: mexican,
      cuisine: "Mexican",
    },
    {
      country: "Spanish",
      image: spanish,
      cuisine: "Spanish",
    },
  ];
  return (
    <div className="carousel-container">
      <Carousel autoPlay={false} showIndicators={false} showStatus={false}>
        {recipes.map(({ country, image, cuisine }) => (
          <div
            className="carousel-element"
            onClick={() => navigate(`/cuisine/${country}`)}
            key={country}
          >
            <div className="country-image">
              <p>{cuisine}</p>
              <img src={image} alt={country} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CountryCarousel;
