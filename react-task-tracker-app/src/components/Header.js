import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ navTitle }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header" style={{marginTop: '10px'}}>
      <h1>{navTitle}</h1>
      <Button btnTitle="Add" bgColor="white" onClick={onClick}></Button>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker App",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
