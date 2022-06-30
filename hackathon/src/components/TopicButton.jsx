import React, { useState } from 'react';
import "../assets/TopicButton.css"

function TopicButton() {
  const [count, setCount] = useState(0);
  function handleCount(e) {
    setCount(count + 1);
  }

  return (
    <div className='topicButton'>
      <button onClick={handleCount}>Je participe</button>
      <p>Participants : {count}</p>
    </div>
  );
}
export default TopicButton;
