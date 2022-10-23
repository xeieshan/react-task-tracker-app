import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnTitle, bgColor, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {btnTitle}
    </button>
  );
};

Button.defaultProps = {
  bgColor: "black",
};

Button.propTypes = {
  bgColor: PropTypes.string,
  btnTitle: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
