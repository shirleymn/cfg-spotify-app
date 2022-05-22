import './App.css';
import Header from './components/layout/header';
import { BrowserRouter as Router, Routes, Route, withRouter}
    from 'react-router-dom';
import Authorise from './hooks/Authorise';
import Home from './pages/home';
import TopArtists from './pages/topartists';
import TopTracks from './pages/toptracks';
import Login from './pages/login';
import './styles/hooks/Authorise.css'
import Quiz from './hooks/QuizMain'

const App = () => (
      <div className="App" >
          <header className="App-header">
                      <Authorise />
                      <Router>
                      {window.location.pathname!=='/' ? <Header/>:null}
                      <Routes>
                          <Route path='/' element={<Login />} />
                          <Route path='/home' element={<Home />} />
                          <Route path='/quiz' element={<Quiz/>} />
                          <Route path='/topartists' element={<TopArtists/>} />
                          <Route path='/toptracks' element={<TopTracks/>} />
                      </Routes>
                      </Router>
            </header>
         </div>
  );


export default App;