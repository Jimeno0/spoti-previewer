import React, { Component } from 'react';

class SongsList extends Component {

  render(){
    const songs = this.props.songs.map((song) => {
      console.log(song);
      return (<li key={song.id}>{song.name}</li>);
    })
    return(
      <div>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}
export default SongsList;