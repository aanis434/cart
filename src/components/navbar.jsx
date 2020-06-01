import React, { Component } from "react";
// stateless functional component - sfc
const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {totalCounter}
      </a>
    </nav>
  );
};

export default NavBar;
