import React, { Component } from 'react';

class SongsList extends Component {

  render(){
    const songs = this.props.songs.map((song) => {
      return (<li id={song.id} key={song.id}>{song.name}</li>);
    })
    if (!this.props.songs[0]) {
      return <div>Search some songs...</div>
    }
    return(
      <div className="five columns" onClick={this.props.handleClick}>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}
export default SongsList;