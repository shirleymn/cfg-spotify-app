import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import '../styles/components/Navbar.css'
  
  const Nav = styled.nav`
    background: #ffffff;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 1;
  `;
    
  const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
      color: #10B981;
    }
  `;
    
  const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  const Navbar = () => {
    return (
      <>
        <Nav className="navbar">
          <NavMenu className="navbar-items">
          <Nav to="/home" activeStyle>
            </Nav>
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