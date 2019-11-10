import React from 'react';
import "../score/score.css"

const Score = (props) => {
    return (
        <div className="container">
            <nav id="nav2" className="navbar navbar-expand-lg navbar-light">
                <span align="margin:auto; display:table"> Score:{props.children} </span>               
            </nav>
        </div>
    )
}
export default Score;
