import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/hooks/GetTopArtists.css'
import '../styles/components/Button.css' 

const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`

const GetTopArtists = () => {

    const [access_token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem("accessToken"));
        }
        console.log(data)
    }, []);

      const TopArtistsLongTerm = () => {
        axios
        .get(
            TOP_ARTISTS_ENDPOINT, {
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

     const TopArtistsMediumTerm = () => {
        axios
        .get(
            TOP_ARTISTS_ENDPOINT, {
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

     const TopArtistsShortTerm = () => {
        axios
        .get(
            TOP_ARTISTS_ENDPOINT, {
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
        <button  className="text-button" onClick={TopArtistsShortTerm}>Last 4 Weeks</button>   
        <button   className="text-button" onClick={TopArtistsMediumTerm}>Last 6 Months</button>
        <button  className="text-button" onClick={TopArtistsLongTerm}>All Time</button>

        <br/> {/* spacing between buttons and results */}
        <br/>
       
        {data?.items ? data.items.map((item) =>
            <div className="container" key={item.name + '_' + item.images[1].url}>
                <div className="rank-column"><p className="rank">{data.items.indexOf(item)+1}</p></div>
                <div className="image-column"><img src= {item.images[1].url}></img></div>
                <div className="names-column"><p>{item.name}</p></div>
                <br/>    
            </div>  
            
            
                             
            )
            
        : null
        }
        </>
    ) 
};
export default GetTopArtists