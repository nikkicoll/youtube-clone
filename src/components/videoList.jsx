import React from 'react';
import Video from './video';

// To pass data down from parent (App) to child (VideoList) just do through props object

const VideoList = (props) => {
  // In functional components props are accessed by 'props', but in class-based accessed by 'this.props'
  const videos = props.videos.map((video) => {
    // Each item in an array or object in React has to have a 'key' prop
    // just in case you want to modify just one, doesn't waste time going through whole list, just get 'key'
    return <Video key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  );
}

export default VideoList;
