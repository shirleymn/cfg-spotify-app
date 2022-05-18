import React from 'react';
import GetTopArtists from '../GetTopArtists';
import TopArtistsShortTerm from '../GetTopArtists';
import TopArtistsMediumTerm from '../GetTopArtists';
import TopArtistsLongTerm from '../GetTopArtists';
import './topartists.css';
import MainTabs from '../components/Tabs';

  
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