import React from "react";
import Comments from "./MyComments";
import "./../App.css";
const Video = ({ video: { id, name, description } }) => {
  return (
    <div key={id} className="video-card" style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3 className="video-title">{name}</h3>
      <p className="video-description">{description}</p>
      <div className="comments">
        <Comments videoId={id} />
      </div>
    </div>
  );
};

export default Video;
