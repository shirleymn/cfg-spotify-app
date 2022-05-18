import React from "react";
import '../styles/pages/home.css';
  
const Home = () => {

 

  return (
    <div >
      {/* <h1 className="home-header">
        Home page
      </h1> */}
      <div>
      <p className="homepage-msg">Before discovering your top <br></br>tracks and artists, take a<br></br> quiz to try to guess them </p>
      <button className="take-quiz-btn"> <a className="btn-link" href="/Quiz"> Take The Quiz </a></button>
      <p className="skip-text">or skip the quiz and go <br></br>straight to the stats</p>

      </div>

    </div>
  );
};
  
export default Home;