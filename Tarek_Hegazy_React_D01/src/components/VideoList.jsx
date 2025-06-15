import React from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";
import Videos from "./Videos";
import "./../App.css";

const VideoList = () => {
  return (
    <section>
      <Videos />
    </section>
  );
};

export default VideoList;
