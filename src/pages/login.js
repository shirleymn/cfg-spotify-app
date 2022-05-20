import React, {useEffect} from 'react';
import '../styles/pages/login.css'
import login from '../styles/pages/login.jpg';
  

const Login = () => {

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
        document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    
    <>
      <h1>TopSpot.</h1>
      <h4>Do you know your music taste?</h4>
      <p>Quiz yourself and discover your top tracks and artists</p>
      <div className='bg'>
        <img src={login} alt="red headphones"></img>
        </div>
    </>
  );
};
  
export default Login;