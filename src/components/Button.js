import React from "react";
import PropTypes from "prop-types";
const Button = ({ variant, size, color, label }) => {
  const getButtonStyle = () => {
    let style = {};
    if (variant === "primary") {
      style = {
        backgroundColor: color,
        border: `2px solid ${color}`,
        color: "white",
      };
    } else if (variant === "secondary") {
      style = {
        backgroundColor: "white",
        border: `2px solid ${color}`,
        color: color,
      };
    } else if (variant === "text") {
      style = {
        backgroundColor: "transparent",
        border: "none",
        color: color,
      };
    }

    if (size === "small") {
      style.fontSize = "14px";
    } else if (size === "medium") {
      style.fontSize = "16px";
    } else if (size === "large") {
      style.fontSize = "18px";
    }

    return style;
  };

  return (
    <button
      style={getButtonStyle()}
      className={`${variant === "text" ? "button" : ""}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
