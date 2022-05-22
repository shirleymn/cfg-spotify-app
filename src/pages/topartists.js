import React from 'react';
import GetTopArtists from '../hooks/GetTopArtists';

import '../styles/pages/topartists.css';

  
const TopArtists = () => {

 

  return (
      <div className='main_section'>
    <h1 className='main_heading'>Your Top Artists</h1>
    <GetTopArtists />
    

    </div>

  );

  
};
  
export default TopArtists;