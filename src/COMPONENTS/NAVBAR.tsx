import "../static/css/navbar.css";
import house from '../static/pictures/house.png'

function Navbar() {
    return <div className="navbar">
        <h1 className="h13Lies">13Lies</h1>
        <a href="/hopethisworks/" className="home"><img src={house} /></a>
    </div>
    ;
}

export default Navbar