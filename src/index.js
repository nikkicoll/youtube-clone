// TODO:
// Create a new parent component that produces HTML
// Render this component to the DOM

// React to create and interact with components
import React, { Component } from 'react';
// ReactDOM is it's own library to interact with the actual DOM
import ReactDOM from 'react-dom';
import API_KEY from '../config';
import SearchBar from './components/search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YouTubeAPISearch from 'youtube-api-search';

// Create a component class (a factory)
// This is considered a class-based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    // Whenever the app starts up this constructor method will be invoked right away and we get the videos
    // from YouTube right away
    this.onSearchInput('cats');
  }

  onSearchInput(term) {
    YouTubeAPISearch({ key: API_KEY, term: term}, (data) => {
      this.setState(
        { videos: data,
          selectedVideo: data[0]
        });
    });
  }

  render() {
    return (
      <div>
        <h1>YouTube</h1>
        <SearchBar onSearchTermChange={ (term) => {this.onSearchInput(term)}}/>
        <VideoDetail video={this.state.selectedVideo}/>
          {/* When VideoList calls onVideoSelect fn, App's state is updated and components re-render*/}
        <VideoList
          onVideoSelect={ (selectedVideo) => {this.setState({ selectedVideo: selectedVideo})}}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Render the INSTANCE of App component to be attached to the div with container class
// As long as our JSX tags are empty between, can become self closing tag
ReactDOM.render(<App />, document.querySelector('.container'));

// React has downward data flow: the most parent app should handle passing data down
// Here the App component is going to handle fetching the data from YouTube
  // since all other components will use that info (videos list and first video to render)
