import React from "react";

import Card from "../card/Card";

import "./card-list.style.css";

const CardList = ({ images }) => {
  return (
    <div className="card-list">
      <div className="info">
        <div className="cards">
          {images.length > 0 ? (
            images.map((image) => {
              return (
                <Card
                  key={image.id}
                  url={image.urls.small}
                  user={image.user.name}
                  likes={image.likes}
                  description={image.alt_description}
                  tags={image.tags}
                />
              );
            })
          ) : (
            <div className="no-imgs">
              <h1>~No images match your search~</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
