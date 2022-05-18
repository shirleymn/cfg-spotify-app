import React from 'react';
import GetTopArtists from '../hooks/GetTopArtists';

// import TopArtistsShortTerm from '../hooks/GetTopArtists';
// import TopArtistsMediumTerm from '../hooks/GetTopArtists';
// import TopArtistsLongTerm from '../hooks/GetTopArtists';
import '../styles/pages/topartists.css';
// import MainTabs from '../components/Tabs';
  
const TopArtists = () => {

 

  return (
      <div className='main_section'>
    <h1 className='main_heading'>Your Top Artists</h1>
    <GetTopArtists />
    
    {/* <MainTabs /> */}


    </div>

  );

  
};
  
export default TopArtists;