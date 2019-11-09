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
    score: 0
  }

  shuffle = (id) => {
    this.setState({
      characters: this.state.characters.sort(function (a, b) {
        return 0.5 - Math.random();
      }
      )
    })
    this.onClicked(); 
  }

  onClicked = (id) => {

    this.setState({
      score: this.state.score + 1
    })
    console.log(this.state.score);  
  }

s

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
            shuffle={() => this.shuffle()}
          />

        ))}
        </div>
      </div>
    );

  }
}

export default App;
