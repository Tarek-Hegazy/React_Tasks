import { createContext, useState } from "react";

export const VideosContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]); 

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export default VideoProvider;
