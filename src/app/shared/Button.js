import React from "react";

const Button = (props) => {
  const { text, className, type } = props;
  return (
    <>
      <button
        className={`${className} ${type} ${
          type === "green" ? "bg-green" : "bg-transparent"
        } bg-green text-white button--ujarak button--inverted`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
