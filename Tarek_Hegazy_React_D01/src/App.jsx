import { useContext, useEffect, useState } from "react";
import VideoList from "./components/VideoList";
import { VideosContext } from "./context/videos";
import { fetchVideos } from "./components/APIVideos";

function App() {
  const { videos, setVideos } = useContext(VideosContext);
  const [loadingVideos, setLoadingVideos] = useState(true);

  const loadVideos = () => {
    setLoadingVideos(true);
    fetchVideos().then((data) => {
      setVideos(data);
      setLoadingVideos(false);
    });
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const count = videos.length;
  const heading = count > 0 ? `${count} ${count > 1 ? "Videos" : "Video"}` : "";

  return (
    <div className="container">
      <h1>My Fake API Videos</h1>
      <button onClick={loadVideos}>Reload Videos</button>

      {loadingVideos ? (
        <p>Loading videos...</p>
      ) : (
        <>
          <h2>{heading}</h2>
          <VideoList />
        </>
      )}
    </div>
  );
}

export default App;
