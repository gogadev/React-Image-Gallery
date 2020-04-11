import React from "react";

import "./card.style.css";

const Card = ({ url, user, likes, description, tags }) => {
  return (
    <div className="card">
      <img className="img" src={url} alt="" />
      <div className="details">
        <h3 className="name">
          <span>Photo by:</span> {user}
        </h3>
        <h4 className="likes">
          <span>Number of likes:</span> {likes}
        </h4>
        <div className="info-box">
          {/* <p>{description}</p> */}
          {tags.map((tag, index) => {
            return (
              <span key={index} className="tag">
                #{tag.title}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
