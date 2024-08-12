import Navbar from "../COMPONENTS/NAVBAR"
import pizdec from '../static/pictures/pizdec.png'
import '../static/css/home.css'

function Home(){
    return(
        <div className="home-div">
            <Navbar/>
            <h1>Home Page</h1>
            <a href="/hopethisworks/#/my-music" className="my-music-link"><b>CHECK OUT MY MUSIC</b></a>
            <p>More on the way, need more time</p>
            <img src={pizdec} alt="more on the way" className="more-on-the-way" />
            
        </div>
    )
}

export default Home