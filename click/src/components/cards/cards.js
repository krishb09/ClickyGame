import React from 'react';
import "../cards/cards.css"

const Cards = (props) => {
    // const {img} = props.characters; 
    return (
        <div className= "new" onClick={() => { props.shuffle(props.id) }}>
            <img src={props.img} alt="" />
        </div>
    )
}
export default Cards;
