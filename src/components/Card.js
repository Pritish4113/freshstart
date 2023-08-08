import './Card.css';

function Card({verfiied, title, creator, views, time, id, deleteVideo, editVideo }) {

  return (
    <div className="cardcss">
      <button onClick={() => deleteVideo(id)}>X</button>
      <button onClick = {() => editVideo(id)}>Edit</button>
      <img src={`https://picsum.photos/id/${id}/250/180`} alt="nofound" />
      <p className= 'titlename'>{title}</p>
      <p>{creator}{verfiied ? '✅' : null}</p>
      <div className="innercard">
        <p>{views}</p>
        <span>.</span>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Card;
