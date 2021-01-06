import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return "Loading...";
  }
  return (
    <div className={"ui segment"}>
      <div className={"ui embed"}>
        {" "}
        <iframe
          title="player"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        />
      </div>

      <h4 className={"ui header"}>{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  );
};
export default VideoDetail;
