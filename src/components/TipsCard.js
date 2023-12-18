import React, { useEffect, useState } from "react";
import { getKitchenTip } from "../RecipeService";
import { useParams } from "react-router-dom";
import "./TipsCard.css"

function TipsCard() {
  const [tip, setTip] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getKitchenTip(id)
      .then((resp) => setTip(resp))
      .catch((error) => console.error('Error fetching kitchen tip:', error));
  }, [id]);

  if (!tip) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="one-tip-card">
        <div className="tip-image-wrapper">
          <img
            src={tip.kitchen_tips.image}
            alt={tip.kitchen_tips.title}
            className="one-tip-img"
          />
        </div>
        <div className="tip-wrapper">
          <h4>{tip.kitchen_tips.title}</h4>
          <p className="one-tip-description">{tip.kitchen_tips.description}</p>
          <ul>
            {tip.kitchen_tips.steps.map((step, index) => (
              <li className="tips-description" key={index}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TipsCard;
