// TODO:
// Create a new parent component that produces HTML
// Render this component to the DOM

// React to create and interact with components
import React from 'react';
// ReactDOM is it's own library to interact with the actual DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import YouTubeAPISearch from 'youtube-api-search';


const API_KEY = 'AIzaSyCBiRbyMJvxs4E-XkIaIUq9gWsNGdp35EQ';
// Create a component class (a factory)
// This is considered a 'dumb' functional component
const App = () => {
  return (
    <div>
      <h1>YouTube</h1>
      <SearchBar />
    </div>
  );
}

// Render the INSTANCE of App component to be attached to the div with container class
// As long as our JSX tags are empty between, can become self closing tag
ReactDOM.render(<App />, document.querySelector('.container'));
