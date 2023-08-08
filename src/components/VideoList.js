import Card from "./Card.js";
import Playbtn from "./Playbtn.js";
import Counter from "./Counter.js";

function VideoList({videos, deleteVideo, editVideo}) {
  return (
    <>
      {videos.map((video) => (
        <div className="parentcard">
          <Card
            id={video.id}
            Key={video.id}
            title={video.title}
            creator={video.creator}
            views={video.views}
            verfiied={video.verfied}
            time={video.time}
            deleteVideo = {deleteVideo}
            editVideo = {editVideo}
          ></Card>
          <Playbtn
            onPlay={() => {
              console.log(`playing... ${video.title}`);
            }}
            onPause={() => {
              console.log(`paused... ${video.title}`);
            }}
          >
            PLAY
          </Playbtn>
          <Counter name="increment"></Counter>
        </div>
      ))}
    </>
  );
}

export default VideoList;
