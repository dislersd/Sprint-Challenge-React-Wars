import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  setEyeColor = e => {
    console.log(e.target);
    e.target.style.color = e.target.innerHTML
    e.target.style.backGroundColor = 'black'
  }

  loadMore = () => {
    this.getCharacters("https://swapi.co/api/people/?page=2")
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.loadMore}> Load More </button>
        <div>
          <CharacterList 
          data={this.state.starwarsChars} 
          setEyeColor={this.setEyeColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
