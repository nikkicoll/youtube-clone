// Must still import React because under the hood utilizes functions from React lib
import React, { Component } from 'react';

// This type of component is a class-based component (want to have internal state)
class SearchBar extends Component {
  // How we initialize state in class-based components
  // Constructor fn is the fn called automatically every time a new instance is created
  // Each instance has it's own copy of state
  // In constructor we initialize state and any other variables we want
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  // Every class-based component MUST have a render method
  render() {
    return <input onChange={this.onInputChange}/>
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }
}

// Must export to make available to parent App (index.js)
export default SearchBar;

// Handling events in React:
  // Event handler (function) for when event occurs
  // Pass the handler to the element you want it to monitor
