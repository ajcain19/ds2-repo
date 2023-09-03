import React from "react";
import CardImage from "../images/info-icon.png";

const icon = { maxWidth: "20px", margin: "0 8px 0 0" };

const Badge = (props) => {
  return (
    <>
      <div style={{ margin: "8px", display: "flex" }}>
        <span
          className="badge"
          style={{
            backgroundColor: "grey",
            padding: "8px 16px",
            margin: "8px",
            color: "white",
            borderRadius: "30px",
            lineHeight: "1",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={icon} src={CardImage} alt="Design System Colors" />
          {props.label}
        </span>
      </div>
    </>
  );
};

export default Badge;
