import React from "react";
import VideoItem from "./VideoItem";

const Videolist = ({ videos, VideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        VideoSelect={VideoSelect}
      />
    );
  });
  return <div className={"ui relaxed divided list"}>{renderedVideos}</div>;
};
export default Videolist;
