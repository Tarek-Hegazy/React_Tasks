import React, { useContext } from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";

const Videos = () => {
  const { videos, setVideos } = useContext(VideosContext);

  return (
    <>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </>
  );
};

export default Videos;
