import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
const Nav = styled.nav`
background: #fff;
position: absolute;
display: flex;
justify-content: space-around;
align-items: centre;
padding: 0.7rem 2rem;
overflow: hidden;
z-index: 1;
width: 100%;
margin: auto;
top: 0;
border-bottom: solid 5px rgb(243, 244, 246);
`;

  
const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 100px;
  margin-left: 50px;
  &.active {
    color: #10B981;
  }
`;
const NavLinkTitle = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 100px;
  margin-left: 50px;
`;

  
const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    .Bars ul {
      position: absolute;
      top: 60px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;
  }
`;
  
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav data-testid="nav">
        <Bars/>
        <NavMenu>
        <NavLinkTitle to="/home" activeStyle>
          <h1>TopSpot.</h1>
          </NavLinkTitle>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/quiz" activeStyle>
            Quiz
          </NavLink>
          <NavLink to="topartists" activeStyle>
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