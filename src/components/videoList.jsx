import React from 'react';
import Video from './video';

// In functional components, props are accessed as an argument, but in class-based props are accessed through 'this.props'
const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return <Video
      video={video}
      key={video.etag}
      onVideoSelect={props.onVideoSelect}
      />
  });

  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  );
}

export default VideoList;
