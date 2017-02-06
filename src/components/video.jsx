import React from 'react';

const Video = (props) => {
  const url = props.video.snippet.thumbnails.default.url;

  const handleVideoClick = () => {
    alert('hi');
  }

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={url}/>
        </div>
      </div>

      <div className="media-body">
        <div onClick={handleVideoClick} className="media-heading">
          {props.video.snippet.title}
        </div>
      </div>
    </li>
  );
}

export default Video;
