import React, { useState } from 'react';

function TopicButton() {
  const [count, setCount] = useState(0);
  function handleCount(e) {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleCount}>Je participe</button>
      <p>Participants : {count}</p>
    </div>
  );
}
export default TopicButton;
