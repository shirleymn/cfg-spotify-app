// import '../styles/pages/authorise.css';
import {useEffect, useState, setToken} from 'react';


function Authorise() {

  const [loggedIn, setLoggedIn] = useState(false);

  // REDIRECT_URI will change when we set up a home page  
  const CLIENT_ID = "e5caca910c8b4916ad947b87dc2f36e2"
  const REDIRECT_URI = "http://localhost:3000/home"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

  // scopes required to get info from user
  const SPACE_DELIMITER = "%20";
  const SCOPES = ["user-top-read",];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/*
http://localhost:3000/#access_token=BQAZOiNXoNjZdgE03LLGQlpU1XiJwqm9YHKE6sgp_2Omj9fLXy2ylyHC1PnSWtRYtucXsX6Qy7sJLEvrICeaEntR_NZh5OSeOvJhyc54CzrgoD2k12nrvx5WiZiW8IFP2l3D4L3tnOb9WziJufc2EdtSPG3jJdzG&token_type=Bearer&expires_in=3600
example spotify parameters after logging in which generates the user's access token to be used for making requests to API
*/

// getting access token from URL
  const getReturnedParametersFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const parametersInUrl = stringAfterHashtag.split("&");
    const parametersSplit = parametersInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
  
    return parametersSplit;
  };

    useEffect(() => {
      if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturnedParametersFromSpotifyAuth(window.location.hash);
  
        localStorage.clear();
  
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
        setLoggedIn(true)
      }
    });
    
    const Login = () => {
      window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=false`;
    };

  return (
      <div className="Authorise">
            <header className="Authorise-header">
            { !loggedIn ?
                  <button onClick={Login}>Login to Spotify</button>
                    
              :<div></div>
            }
            </header>
        </div>
  );
} 
  
export default Authorise;