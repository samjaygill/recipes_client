import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe } from "../RecipeService";
import { deleteRecipe } from "../RecipeService";
import "./RecipeCard.css";
import placeHolderImage from "../assets/images/new_recipe2.png";
import 'font-awesome/css/font-awesome.min.css';

const RecipesCard = ({
  addToFavourite,
  removeFromFavourite,
  addToShoppingBag,
  removeFromShoppingBag,
  removeRecipe
}) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(id).then((resp) => setRecipe(resp));
  }, [id]);

  const handleButtonClick = () => {
    console.log("item in recipeCard", recipe);
    addToFavourite(recipe);
    navigate("/favourites");
  };

  const handleRemoveClick = () => {
    removeFromFavourite(recipe);
    navigate("/favourites");
  };

  // shopping bag
  const handleButtonBagClick = () => {
    console.log("item in shopping bag", recipe);
    addToShoppingBag(recipe);
    navigate("/shoppinglist");
  };

  // shopping bag
  const handleRemoveBagClick = () => {
    removeFromShoppingBag(recipe);
    navigate("/shoppinglist");
  };

//   const handleDelete = () => {
//     deleteRecipe(recipe._id).then(()=>{
//         removeRecipe(recipe._id);
//     })
// }

const handleDelete = async () => {
  try {
    await deleteRecipe(recipe._id);
    removeRecipe(recipe._id);
    navigate("/allrecipes");
    console.log('Recipe deleted successfully');
  } catch (error) {
    console.error('Error deleting recipe:', error);
  }
};

  if (!recipe) return <p>loading...</p>;

  return (
    <>
      <div className="one-recipe-card">
        <div className="rc-image-wrapper">
          {recipe.meal.favourited ? (
            <button className="fav-button" onClick={handleRemoveClick}>
              Remove From Favourites
            </button>
          ) : (
            <button className="fav-button" onClick={handleButtonClick}>
              Add to Favourites
            </button>
          )}
          {recipe.meal.in_shopping_bag ? (
            <button className="bag-button" onClick={handleRemoveBagClick}>
              Remove From Shopping List
            </button>
          ) : (
            <button className="bag-button" onClick={handleButtonBagClick}>
              Add to Shopping List
            </button>
          )}
          {/*  */}
          <br></br>

          <img
            className="one-recipe-card-image"
            src={recipe.meal.image ? recipe.meal.image : placeHolderImage}
            alt={recipe.meal.name}
          />
          {recipe.meal.image ? (
        null
        ) : <i class="fa fa-trash fa-2x" aria-hidden="true" onClick={handleDelete}></i> }
        
        </div>
        <div className="rc-recipe-wrapper">
          <h4>{recipe.meal.name}</h4>
          <p className="info">{recipe.meal.description}</p>

          <p className="info">
            Vegan:{" "}
            {recipe.meal.vegan ? <span>&#10003;</span> : <span>&#10008;</span>}{" "}
            | Vegetarian:{" "}
            {recipe.meal.vegetarian ? (
              <span>&#10003;</span>
            ) : (
              <span>&#10008;</span>
            )}
          </p>
          <p className="info">
            <b>Preperation time:</b> {recipe.meal.preparation_time} minutes
            <br />
            Cooking time: {recipe.meal.cooking_time} minutes
            <br />
            {recipe.meal.country_of_origin}
          </p>
          <p className="info">
            <b>Nutrition:</b>
            {""}
            {Object.entries(recipe.meal.nutrition).map(([name, nutrition]) => (
              <li className="nutrition" key={name}>
                {name}: {nutrition}
              </li>
            ))}
          </p>
          <p className="info">
            <b>Ingredients:</b>{" "}
            {Object.entries(recipe.meal.ingredients).map(
              ([name, ingredients]) => (
                <li className="ingredients" key={name}>
                  {ingredients}
                </li>
              )
            )}
          </p>
          <p className="info">
            <b>Instructions:</b>{" "}
            {Object.entries(recipe.meal.method).map(([name, method]) => (
              <li className="method" key={name}>
                {method}
              </li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
