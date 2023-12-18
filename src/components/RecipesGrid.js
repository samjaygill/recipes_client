import "./RecipesGrid.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import placeHolderImage from "../assets/images/new_recipe2.png";

// make the description on grid not too long
const description_length = 100;

const RecipesGrid = ({ recipes, handleSearch, showSearchBar = true }) => {
  // sorts into alphabetical order
  const sortedRecipes = recipes.sort((a, b) =>
    a.meal.name.localeCompare(b.meal.name)
  );

  return (
    <>
      <div className="recipies-grid">
        {showSearchBar && <SearchBar handleSearch={handleSearch} />}

        <div className="all-recipes-container">
          {sortedRecipes &&
            sortedRecipes.map((recipe) => (
              <Link
                to={`/recipes/${recipe._id}`}
                className="recipe-card"
                key={recipe._id}
              >
                <div className="fav-hearts">
                  {recipe.meal.favourited === true ? (
                    <span>
                      <FaHeart />
                    </span>
                  ) : (
                    <span>
                      <FaRegHeart />
                    </span>
                  )}
                </div>

                <img
                  className="small-img"
                  src={recipe.meal.image ? recipe.meal.image : placeHolderImage}
                  alt={recipe.meal.name}
                />
                <div></div>
                <p className="recipe-name">{recipe.meal.name}</p>
                <p className="recipe-description">
                  {recipe.meal.description.length > description_length
                    ? `${recipe.meal.description.slice(
                        0,
                        description_length
                      )}...`
                    : recipe.meal.description}
                </p>
                <div className="recipe-details">
                  <p className="recipe-vegan">
                    Vegan:{" "}
                    {recipe.meal.vegan ? (
                      <span>&#10003;</span>
                    ) : (
                      <span>&#10008;</span>
                    )}
                  </p>
                  <p className="recipe-vegetarian">
                    Vegetarian:{" "}
                    {recipe.meal.vegetarian ? (
                      <span>&#10003;</span>
                    ) : (
                      <span>&#10008;</span>
                    )}
                  </p>

                  <p className="recipe-country">
                    {recipe.meal.country_of_origin}
                  </p>
                  <p className="recipe-cooktime">
                    {recipe.meal.cooking_time + recipe.meal.preparation_time}{" "}
                    mins
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipesGrid;
