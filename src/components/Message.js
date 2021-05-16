import { useState } from "react";

const Message = (initialCount = 0) => {
    let [count, setCount] = useState(5);
  

  return (
    <div>
      <button onClick={()=>{setCount(count => --count)}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{setCount(count => ++count)}}>+</button>
    </div>
  );
};

export default Message;
