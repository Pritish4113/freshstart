import "./App.css";
import videosDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";


function App() {
  const [videos, setvideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideo(video){
    setvideos([...videos,{...video, id : videos.length+1}]);
  }

  function deleteVideo(id){
    setvideos(videos.filter(video => video.id !== id));
  }

  function editVideo(id){
    setEditableVideo(videos.find(video => video.id === id));
  }

  function updateVideo(video){
    let index = videos.findIndex(v => v.id === video.id);
    let newVideo  = [...videos];
    newVideo.splice(index,1,video);
    setvideos(newVideo);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideo ={addVideo} updateVideo = {updateVideo} editableVideo = {editableVideo}></AddVideo>
      <VideoList videos = {videos} deleteVideo = {deleteVideo} editVideo={editVideo}></VideoList>
    </div>
  );
}

export default App;
