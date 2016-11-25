import React, { Component } from 'react';

class SongsList extends Component {

  render(){
    const songs = this.props.songs.map((song) => {
      return (<li id={song.id} key={song.id}>{song.name}</li>);
    })
    return(
      <div onClick={this.props.handleClick}>
        <ul>
          {songs}
        </ul>
      </div>
    );
  }
}
export default SongsList;