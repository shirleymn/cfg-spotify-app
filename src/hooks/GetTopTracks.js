import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/hooks/GetTopTracks.css'

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const GetTopTracks = () => {
    const [access_token, setToken] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    const TopTracksLongTerm = () => {
        axios
        .get(
            TOP_TRACKS_ENDPOINT, {
                params: {limit: 10, offset: 0, time_range: 'long_term',},
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + access_token,
                'content-type': 'application/json'
                
            }
            
        }).then(response => {
        
            setData(response.data);
        
        })
        .catch((error) => {
            console.log(error)
            setError(true);
        });
    };


    const TopTracksMediumTerm = () => {
        axios
        .get(
            TOP_TRACKS_ENDPOINT, {
                params: {limit: 10, offset: 0, time_range: 'medium_term',},
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + access_token,
                'content-type': 'application/json'
            }
        }).then(response => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
    };

    const TopTracksShortTerm = () => {
        axios
        .get(
            TOP_TRACKS_ENDPOINT, {
                params: {limit: 10, offset: 0, time_range: 'short_term',},
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + access_token,
                'content-type': 'application/json'
            }
        }).then(response => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error)

        });
    };
    return (
        <>
        <button className="text-button" onClick={TopTracksShortTerm}>Last 4 Weeks</button>   
        <button className="text-button" onClick={TopTracksMediumTerm}>Last 6 Months</button>
        <button className="text-button" onClick={TopTracksLongTerm}>All Time</button>

        <br/> {/* spacing between buttons and results */}
        <br/>
        
        
        {data?.items ? data.items.map((item) =>
            <div className="container" key={item.name + '_' + item.artists[0].name + '_' + item.album.images[1].url}>
                <div className="rank-column"><p className="rank">{data.items.indexOf(item)+1}</p></div>
                <div className="image-column"><img src= {item.album.images[1].url}></img></div>
                <div className="names-column">
                    <div className="track-name"><p>{item.name}</p></div>
                    <div className="artist-name"><p>{item.artists[0].name}</p></div>
                    
                </div> 
                <br/>              
            </div> )
        : null
        }
        </>
    ) 
};

export default GetTopTracks;