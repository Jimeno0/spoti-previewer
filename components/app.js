import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from  './search_bar';
import SongsList from './songs_list';


class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      songs: []
    };
  }
  handleSubmit(event){
    event.preventDefault();
    const searchTerm = event.target[0].value;
    const searchUrl = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;

    axios.get(searchUrl).then(function (response) {
      this.setState({songs: response.data.tracks.items});
    }.bind(this));
  }

  render(){
    return (
      <div>
        <h1>Spotify</h1>
        <SearchBar handleSubmit={this.handleSubmit}/>
        <SongsList songs={this.state.songs}/>
      </div>
    );
  }
}
export default App;