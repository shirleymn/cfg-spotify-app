import React, { useEffect, useState } from "react";
import axios from "axios";

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const GetTopTracks = () => {
    const [access_token, setToken] = useState("");
    const [data, setData] = useState({});

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
        <div>
        <button onClick={TopTracksShortTerm}>Past 4 weeks top tracks</button>   
        <button onClick={TopTracksMediumTerm}>Past 6 months top tracks</button>
        <button onClick={TopTracksLongTerm}>Get all-time top tracks</button>
 
        {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        
        </div>
    ) 
    

};



export default GetTopTracks;