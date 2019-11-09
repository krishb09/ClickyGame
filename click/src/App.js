import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import characters from './characters.json'
import Header from './components/header/header.js'; 

class App extends Component {
  state = {
    characters, 
    score: 0
  }

 

  render() {
    console.log(this.state.characters[0].img)
  
    return (
      <div>
        <Header />
        {/* <img src= {this.state.characters[0].img} alt= "" > </img> */}
  
      </div>
    );

  }



}

export default App;
