import { useState } from "react";

function Counter({ name }) {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      setCount(count=>count+1);
      console.log('rendered');
    }, 2000);
    console.log(count);
  }

  return (
    <div className="counterdiv">
      <p>{count}</p>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}

export default Counter;
