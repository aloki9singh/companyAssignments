import React from "react";

const Button = ({ title, img }) => {
  return (
    <button type="button" >
      <img src={img} alt={title} />
      {title}
    </button>
  );
};

export default Button;
