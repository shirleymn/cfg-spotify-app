import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Authorise from './pages/authorise';
import Home from './pages/home';
import Quiz from './pages/quiz';
import TopArtists from './pages/topartists';
import TopTracks from './pages/toptracks';

function App() {
  
  return (
      <div className="App" >
          <header className="App-header">
                      <Authorise />
                      <Router>
                      <Navbar />
                      <Routes>
                          <Route path='/home' element={<Home />} />
                          <Route path='/quiz' element={<Quiz/>} />
                          <Route path='/topartists' element={<TopArtists/>} />
                          <Route path='/toptracks' element={<TopTracks/>} />
                      </Routes>
                      </Router>
            </header>

        </div>

    
  );
}
  


export default App;