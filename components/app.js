import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from  './search_bar';
import SongsList from './songs_list';
import VideoPlayer from './video_player';


class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      songs: [],
      currentSong: {}
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

  handleClick(event){
    const selected = this.state.songs.find((element) => {
      return element.id === event.target.id
    });

    this.setState({currentSong: selected });

  }
  render(){
    const renderPlayer = this.state.songs[0] ? (<VideoPlayer song={this.state.currentSong}/>): '';

    return (
      <div className="container">
        <div className="row">
          <h1>Spotify</h1>
          <SearchBar handleSubmit={this.handleSubmit}/>
        </div>
        <div className="row">
          <SongsList handleClick={this.handleClick} songs={this.state.songs}/>
          {renderPlayer}
        </div>
      </div>
    );
  }
}
export default App;