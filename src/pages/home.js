import React, {useEffect} from 'react';
import '../styles/pages/home.css';
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import home from '../styles/pages/home.jpg';
import {TopTracksShortTerm} from  "../QuizTopTracksData"



const bg = {
  white: {
    default: "#ffffff",
    hover: "#10B981",
    
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
    color: ${(props) => bg[props.bg].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  position: relative;
  left: -120px;
  top: 88px;
  z-index: 1;
`;

NavLink.defaultProps = {
  bg: "white"
};

const Skip = styled(Link)`
  color: black;
  font-size: 25px;
  padding: 15px 32px;
  margin: 10px 0px;
  cursor: pointer;
  position: relative;
  left: -500px;
  top: 160px;
  z-index: 1;
`;

const Home = () => {
  
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
        document.body.classList.remove("no-scroll");
    };
  }, []);


  return (
    <div>
      <div>
      <p className="homepage-msg">Before discovering your top <br></br>tracks and artists, take a<br></br> quiz to try to guess them </p>
      <NavLink to="/quiz" style={{ textDecoration: 'none' }}>Take the Quiz</NavLink>
      <Skip to="/TopArtists">Or skip the quiz and go straight to the stats</Skip>
      <div className='bgImage'>
        <img src={home} alt="red headphones"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;