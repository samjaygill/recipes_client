import "./Shoppingbag.css";
import { Link } from "react-router-dom";


const ShoppingBag = ({ shoppingBag }) => {
  const nodeBagElements = shoppingBag.map((recipe) => {
    return (
      <Link to={`/recipes/${recipe._id}`} className="recipe-card" key={recipe._id}>
      <div className="shop-card">
        <p>{recipe.meal.name}</p>
        <ul>
          {recipe.meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      </Link>
    );
  });

  return <div className="shop-grid">{nodeBagElements}</div>;
};

export default ShoppingBag;
