import CountryCarousel from "./CountryCarousel";
import RecipesGrid from "./RecipesGrid";
import "./Home.css";

const Home = ({ randomRecipes }) => {
  return (
    <>
      <CountryCarousel />
      <p className="suggestion"><button onClick={()=>window.location.reload()} className="refresh-button">&#8635;</button>{" "}Need some inspiration? How about one of these...</p>
      <RecipesGrid recipes={randomRecipes} showSearchBar={false} />
    </>
  );
};

export default Home;
