import React from "react";
import InputField from "../InputField/InputField";

import { BiUserCircle } from "react-icons/bi";
import { BsInbox } from "react-icons/bs";

import { NavbarContainer } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar">
        <div className="navbar__logo">
          <p>glassdoor </p>
        </div>
        <div className="navbar__search">
          <InputField />
        </div>
        <div className="navbar__icons">
          <BsInbox className="icons" />
          <BiUserCircle className="icons" />
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
