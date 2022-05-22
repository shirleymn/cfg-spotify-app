import React, { useEffect, useState } from "react";
import axios from "axios";
import questions from "./pages/quiz"


const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`


const QuizTopTracksData = () => {
    const [access_token, setToken] = useState("");
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [error, setError] = useState(false);
    
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0)
    
    
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem("accessToken"));
        } 
    }, []); 

    

    function addInput(e) {
        const value = e.target.value;
        console.log(value);
        setText(value);
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log("working")
        console.log("this is it",data.items[0].name)
          if (addInput === data.items[0].name) {
            return alert("Correct")
          }else {
            return alert("incorrect")
          }
    
      }

    const TopTracksLongTerm = () => {
        axios
        .get(
            TOP_TRACKS_ENDPOINT, {
                params: {limit: 4, offset: 0, time_range: 'long_term',},
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
    const handleAnswerButtonClick = (addInput) => {
        if (addInput === data.items[0].name){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true) // once the user has reached the end of the quiz the score panel will be displayed to the user by changing the set variable setShowScore from false to true causing react to re-render
        }
    }

    const TopTracksMediumTerm = () => {
        axios
        .get(
            TOP_TRACKS_ENDPOINT, {
                params: {limit: 4, offset: 0, time_range: 'medium_term',},
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
                params: {limit: 4, offset: 0, time_range: 'short_term',},
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer " + access_token,
                'content-type': 'application/json'
            } 
        }).then(response => {
            setData(response.data);
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            
        }); 

        const CorrectAnswer = () => {

        }


    }; 
    
    return (
        <>


        <button onClick={TopTracksShortTerm}>Hint</button> 

        <form onSubmit={handleSubmit}>
        <label>
            Answer:
            <input
          className="input-field"
          onChange={addInput}
          value={text}
          type="text"
          placeholder="answer here"
        />
        </label>
        <input type="submit" value="Submit" className="submit-btn"/>
        </form>
     
     
      <button onClick= {handleAnswerButtonClick}> → </button>
        {data?.items ? data.items.map((item) =>
            <div className="container" key={item.name + '_' + item.artists[0].name + '_' + item.album.images[1].url}>
              
              <button>
                <div className="names-column">
                    <div className="track-name"><p>{item.name}</p></div>
                    <div className="artist-name"><p>{item.artists[0].name}</p></div>
                    

                </div>  
                </button>             
            </div> )
        : null
        }

       
        
        </>
    ) 
};

export default QuizTopTracksData;
