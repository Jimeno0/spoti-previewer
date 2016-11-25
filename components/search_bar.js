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
        <input type="text"
          placeholder="Search artist..."
          value={this.state.term}
          onChange={(event)=>{this.setState({term:event.target.value});}}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default SearchBar;