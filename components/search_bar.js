import React, { Component } from 'react';

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
        <input
          className="u-full-width"
          type="text"
          placeholder="Search artist..."
          value={this.state.term}
          onChange={(event)=>{this.setState({term:event.target.value});}}
        />
      </form>
    );
  }
}

export default SearchBar;