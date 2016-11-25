import React, { Component } from 'react';

export default (props) => {



  const imgUrl = props.song.album ? props.song.album.images[0].url : '';
  const imgAlt = props.song.album ? props.song.album.name : '';
  const artist = props.song.album ? props.song.album.artists[0].name : '';
  console.log(imgUrl);

  return (
    <div>
      <h2>{props.song.name}</h2>
      <img src={imgUrl} alt={imgAlt} />
      <span>{artist}</span>
      <audio src={props.song.preview_url} controls>
        Your browser does not support the audio element.
      </audio>
    </div>

  );
}