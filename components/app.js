import React, { Component } from 'react';
import SearchBar from  './search_bar';


class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      songs: {}
    };
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(event.target[0]);
    // console.log(this.state.term);
  }

  render(){
    return (
      <div>
        <h1>Spotify</h1>
        <SearchBar handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
export default App;