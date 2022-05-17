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
        <>
        <button onClick={TopTracksShortTerm}>Past 4 weeks top tracks</button>   
        <button onClick={TopTracksMediumTerm}>Past 6 months top tracks</button>
        <button onClick={TopTracksLongTerm}>Get all-time top tracks</button>
        {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        {/* {data?.items ? data.items.map((item) => <p>{item.available_markets}</p>) : null} */}
        {/* {data?.items ? data.items.map((item) => <p>{item.popularity}</p>) : null} */}
        {/* {data?.items?.artists ? data.items.artists.map((artist) => <p>{artist.name}</p>) : console.log(data)} */}
        {data?.items?.artists ? data.items.artists[0].map((artist) => <p>{artist.name}</p>) : null } 
        {/* console.log(data.items[0].artists[0].name */}

        </>
    ) 
    

};



export default GetTopTracks;