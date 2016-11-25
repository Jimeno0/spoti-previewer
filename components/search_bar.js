import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
  }
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text"
          placeholder="Search artist..."
          value={this.state.term}
          onChange={(event)=>{this.setState({term:event.target.value});}}
        />
      </form>
    );
  }
}

export default SearchBar;