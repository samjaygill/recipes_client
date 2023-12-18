import React from "react";
import { Link } from "react-router-dom";
import "./TipsGrid.css";

function TipsGrid({ tips }) {

  const sortedTips = tips.sort((a, b) =>
    a.kitchen_tips.title.localeCompare(b.kitchen_tips.title)
  );
  return (
    <div className="tips-grid">
      <div className="all-tips-container">
        {sortedTips ? (
          sortedTips.map((tip) => (
            <Link to={`/tips/${tip._id}`} className="tips-card" key={tip._id}>
              <div key={tip._id}>
                <img
                  src={tip.kitchen_tips.image}
                  alt={tip.kitchen_tips.title}
                  className="tips-small-img"
                />
                <p className="tip-name">{tip.kitchen_tips.title}</p>

                <p className="tips-description">
                  {tip.kitchen_tips.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TipsGrid;
