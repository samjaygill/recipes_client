import "./Shoppingbag.css";
import { Link } from "react-router-dom";


const ShoppingBag = ({ shoppingBag }) => {
  const nodeBagElements = shoppingBag.map((recipe) => {
    return (
      <Link to={`/recipes/${recipe._id}`} className="recipe-card" key={recipe._id}>
      <div className="shop-card">
        <p className="sb-name"><b>{recipe.meal.name}</b></p>
        <ul>
          {recipe.shopping_list.items.map((item, index) => (
            <li key={index} className="sb-info">{item}</li>
          ))}
        </ul>
      </div>
      </Link>
    );
  });

  return <div className="shop-grid">{nodeBagElements}</div>;
};

export default ShoppingBag;
