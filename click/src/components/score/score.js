import React from 'react';
import "../score/score.css"

const Score = (props) => {
    return (
        <div className="container">
            <nav id="nav2" className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    <li>
                        Clicky Game
                    </li>
                    <li>Score: {props.children}
                    </li>
                </ul>
            </nav>
        </div>
    )

}
export default Score;
