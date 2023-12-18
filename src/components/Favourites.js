import React from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";

const description_length = 100;

const Favourites = ({ favourites }) => {

  const nodeElements = favourites.map((recipe) => {
    return (
      <div className="favourites-grid">
        <Link to={`/recipes/${recipe._id}`} className="recipe-card" key={recipe._id}>
          <div className="fav-recipe-card">
            <img
              className="fav-small-img"
              src={recipe.meal.image}
              alt={recipe.meal.name}
            />
            <div></div>
            <p className="fav-recipe-name">{recipe.meal.name}</p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="fav-recipe-container">{nodeElements}</div>;
};

export default Favourites;
