import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import VideoProvider from "./context/videos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </StrictMode>
);
