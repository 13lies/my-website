import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './ROUTES/HOME';
import Music_Links from './ROUTES/MUSIC-LINKS';


function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/my-music' element = {<Music_Links/>}/>
      </Routes>

    </Router>
  )
}

export default App
