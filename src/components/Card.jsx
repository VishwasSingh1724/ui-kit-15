import React from "react";


const Card = ({ title, image, children }) => {
    return (
      <div className="card">
        {image && <img src={image} alt="Card" className="card-img" />}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <div className="card-content">{children}</div>
        </div>
      </div>
    );
  };

export default Card;