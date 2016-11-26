import React, { Component } from 'react';

export default (props) => {



  const imgUrl = props.song.album ? props.song.album.images[0].url : '';
  const imgAlt = props.song.album ? props.song.album.name : '';
  const artist = props.song.album ? props.song.album.artists[0].name : '';

  return (
    <div className="seven columns">
      <h2>{props.song.name}</h2>
      <div className="player-container">
        <img className="u-max-full-width" src={imgUrl} alt={imgAlt} />
        <div className="player">
          <div className="row">
            <a>{artist}</a>
          </div>
          <div className="row">
            <audio src={props.song.preview_url} controls>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>

  );
}