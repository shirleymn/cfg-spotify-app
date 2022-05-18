import React from "react";
import { Bars, Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav >
        <NavLink to="/">
          <h1>TopSpot.</h1>
        </NavLink>
        <Bars/>
        <NavMenu className="navigation-menu">
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/quiz" activeStyle>
            Quiz
          </NavLink>
          <NavLink to="/toptracks" activeStyle>
            Top Tracks
          </NavLink>
          <NavLink to="topartists" activeStyle>
            Top Artists
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;