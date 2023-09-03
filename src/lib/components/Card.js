import React from "react";
import CardImage from "../images/colors.png";

const cardContainer = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #f1f1f1",
  borderRadius: "8px",
  margin: "8px",
  padding: "24px",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

const cardImg = {};
const Card = (props) => {
  return (
    <>
      <div style={cardContainer}>
        <div className="card-divider">
          <h2 style={{ marginTop: "0" }}>{props.header}</h2>
        </div>
        <img style={cardImg} src={CardImage} alt="Design System Colors" />
        <div className="card-section">
          <h3>{props.feature}</h3>
          <p>{props.introduction}</p>
          <a href="#">{props.url}</a>
        </div>
      </div>
    </>
  );
};

export default Card;
