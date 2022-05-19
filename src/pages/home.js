import React from "react";
import '../styles/pages/home.css';
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";



const bg = {
  white: {
    default: "#ffffff",
    hover: "#d6d6d6"
  }
}

const NavLink = styled(Link)`
  background-color: ${(props) => bg[props.bg].default};
  color: black;
  font-size: 25px;
  padding: 15px 32px;
  border-radius: 40px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 8px 8px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => bg[props.bg].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  position: fixed;
  left: 13vw;
  top: 29rem;
`;

NavLink.defaultProps = {
  bg: "white"
};



const Home = () => {
  return (
    <div >
      <div>
      <p className="homepage-msg">Before discovering your top <br></br>tracks and artists, take a<br></br> quiz to try to guess them </p>
      <NavLink to="/quiz" style={{ textDecoration: 'none' }}>Take the Quiz</NavLink>
      <p className="skip-text">or skip the quiz and go <br></br>straight to the stats</p>
      </div>
    </div>
  );
};
  
export default Home;