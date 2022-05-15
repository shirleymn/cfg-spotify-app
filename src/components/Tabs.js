import React from 'react';
import {Tabs, Tab, AppBar}  from "@material-ui/core"
import GetTopArtists from '../GetTopArtists';
import TopArtistsShortTerm from '../GetTopArtists';
import TopArtistsMediumTerm from '../GetTopArtists';
import TopArtistsLongTerm from '../GetTopArtists';
import TopArtists from '../pages/topartists';


const MainTabs = () => {

const [selectedTab, setSelectedTab] = React.useState(0);

const handleChange = (event, newValue) => {
  
  setSelectedTab(newValue);
}



return (
     
  <div className='tabs'>

    <Tabs value={selectedTab} 
          onChange={handleChange}
    >
      <Tab label="Last 4 weeks" />
      <Tab label="Last 6 months" />
      <Tab label="All time" />
    </Tabs>
    {selectedTab === 0  && <GetTopArtists />}
    {selectedTab === 1  && <GetTopArtists />}
    {selectedTab === 2  && <GetTopArtists />}
  



  </div>

);
}

export default MainTabs;
 