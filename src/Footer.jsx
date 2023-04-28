import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <div>
      <p
        style={{
          backgroundColor: "green",
          marginBottom: "0.5rem",
        }}
      >
        You have{" "}
        <span
          style={{
            color: "yellow",
            fontSize: "25px",
            padding: 0,
          }}
        >
          {length}
        </span>{" "}
        {length <= 1 ? "To-Do" : "To-Do's"} left
      </p>
    </div>
  );
};

export default Footer;
