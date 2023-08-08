import { useEffect, useState } from "react";

function AddVideo({ addVideo, editableVideo, updateVideo }) {
  const initialState = {
    id: 2,
    verfied: false,
    title: "",
    creator: "shan",
    views: "",
    time: "2 day ago",
  };

  const [video, setvideo] = useState(initialState);

  function handleChange(e) {
    e.stopPropagation();
    setvideo({ ...video, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideo(video);
      setvideo(initialState);
    }
  }

  useEffect(() => {
    if (editableVideo) {
      setvideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <div className="add">
      <form>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          onChange={handleChange}
          name="views"
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>{editableVideo ? "Edit" : "ADD"}</button>
      </form>
    </div>
  );
}

export default AddVideo;
