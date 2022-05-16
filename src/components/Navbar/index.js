import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavMenu className="navbar-items">
          <NavLink  to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/quiz" activeStyle>
            Quiz
          </NavLink>
          <NavLink to="/topartists" activeStyle>
            Top Artists
          </NavLink>
          <NavLink to="/toptracks" activeStyle>
            Top Tracks
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;