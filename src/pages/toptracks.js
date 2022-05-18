import React from 'react';
import GetTopTracks from '../hooks/GetTopTracks';

const TopTracks = () => {
  return (
      <div>
    <h1>Top Tracks</h1>
    <GetTopTracks />
    </div>
  );
};
  
export default TopTracks;