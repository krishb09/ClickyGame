import React from 'react';
import "../header/header.css"

const Header = () => {
return (
    <div className="container">
        <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                {/* <h4>Clicky Game!</h4>  */}
            </div>
        </nav>
        <nav id="nav2" className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    Clicky Game
            </li>
                <li></li>
            <li>
                    Score: 0
            </li>
            </ul>
        </nav>
        <div className="container">
            cards
        </div>
    </div>
)
}


export default Header;

