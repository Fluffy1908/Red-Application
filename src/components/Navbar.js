import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">Red Application</div>
      <div className="navbar__menu">
        <a href="#" className="navbar__link">
          Home
        </a>
        {/* <a href="#" className="navbar__link">Communities</a> */}
      </div>
    </div>
  );
};

export default Navbar;
