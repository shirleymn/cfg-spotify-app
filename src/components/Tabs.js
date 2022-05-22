import React from 'react';
import {Tabs, Tab}  from "@material-ui/core"
import GetTopArtists from '../hooks/GetTopArtists';
import GetTopArtists from '../GetTopArtists';



const MainTabs = () => {

const [selectedTab, setSelectedTab] = React.useState(0);

const handleChange = (event, newValue) => {
  
  setSelectedTab(newValue);
}


return (
     
  <div className='tabs'>
     
    <Tabs 
          value={selectedTab} 
          onChange={handleChange}
          TabIndicatorProps={{  style: {background: "10B981"}}}>
      
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
 