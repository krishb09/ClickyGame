import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import characters from './characters.json'
import Header from './components/header/header.js';
import Cards from './components/cards/cards.js';
import Score from './components/score/score.js'

class App extends Component {
  state = {
    characters,
    score: 0, 
  }

  shuffle = (id) => {
    this.setState({
      characters: this.state.characters.sort(function (a, b) {
        return 0.5 - Math.random();
      }
      )
    })
    this.onClicked(id); 
  }

  onClicked = (id) => {
    console.log(this.state.characters[id].clicked); 
    console.log("id", id); 

    //filter returns array of objects
    var clickedChar = this.state.characters.filter(item => item.id === id)

    //has only one object --- which is 0 s
    if(!clickedChar[0].clicked){
      console.log("clicked", clickedChar)
      // var selected = this.state.characters[id-1]
      clickedChar[0].clicked = true; 

      this.setState({
        characters: this.state.characters,
        score: this.state.score + 1
      })
      console.log(this.state.characters)
    }else{
      alert("Already Clicked! You Lose"); 
      this.setState({
        score: 0
      })
    }
    console.log("score" , this.state.score);  
  }

  render() {
    return (
      <div>
        <Header />
        <Score> {this.state.score} </Score>

        <div className ="container">
        {this.state.characters.map(character => (
          <Cards
            key={character.id}
            img={character.img}
            shuffle={() => this.shuffle(character.id)}
          />

        ))}
        </div>
      </div>
    );

  }
}

export default App;
