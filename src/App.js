import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      classes: [
        {name: "Warrior", votes: 0},
        {name: "Mage", votes: 0},
        {name: "Archer", votes: 0},
        {name: "Priest", votes: 0},
        {name: "Bard", votes: 0},
        {name: "Rogue", votes: 0}
      ]
    };
  }

  vote(i) {
    console.log("Voting has occured", i);
    let c = [...this.state.classes];
    c[i].votes++;
    this.setState({classes: c});
  }
  
  render() {
    return (
      <div>
        <h1>Best RPG Classes</h1>
        {
          this.state.classes.map( (c, i) =>
            <div key={i} className="class">
              <h4>{c.name}</h4>
              <button onClick={this.vote.bind(this, i)}>Likes: {c.votes}</button>
            </div>
          )
        }
      </div>
    );
  }
  
}

export default App;
