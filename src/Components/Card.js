import React from "react";

const Card = ({ title, image, name, level }) => {
  return (
    <div style={{textAlign:"left"}}>
        <img src={image}/>
        <p>{name}</p>
      <h1>{title}</h1>
      <p>{level}</p>
    </div>
  );
};

export default Card;
