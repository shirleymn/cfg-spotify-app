import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
background: #fff;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.7rem 2rem;
overflow: hidden;
z-index: 1;
width: 88%;
margin: auto;
top: 0;
border-bottom: solid 5px rgb(243, 244, 246);


`;


  
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 50px;
  &.active {
    color: #10B981;
  }
`;
  
export const Bars = styled(FaBars)`
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
  
export const NavMenu = styled.div`
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