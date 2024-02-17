import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div onClick={toggleMenu}>
        <FontAwesomeIcon className="menuicon" icon={faBars} />
      </div>
      {isMenuOpen && (
        <div className="menu">
    <NavLink className='navtext1' to='/'>HOME</NavLink>
    <NavLink className='navtext1' to='/indiatourism'>INDIA TOURISM</NavLink>
    <NavLink className='navtext1' to='/tourpackages'>TOUR PACKAGES</NavLink>
    <NavLink className='navtext1' to='/placetovisits'>PLACE TO VISITS</NavLink>
    <NavLink className='navtext1' to='/touroffers'>TOUR OFFERS</NavLink>
    <NavLink className='navtext1' to='/contactus'>CONTACT US</NavLink>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

