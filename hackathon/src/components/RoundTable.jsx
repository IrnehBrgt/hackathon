import React, { useState } from 'react';
import ContentOfTable from './ContentOfTable';

function RoundTable() {
  const [newTopic, setNewTopic] = useState([]);
  const [value, setValue]= useState()

  function handleClick(e) {
    e.preventDefault();
    setNewTopic(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='RoundTable'>
      {ContentOfTable.map((card) => (
        <div className='Card'>
          <h3>{card.title}</h3>
          <h3>{card.content}</h3>
        </div>
      ))}
      <div>
        <h3>{newTopic}</h3>
      </div>
      <div classname='addTopic'>
        <form onSubmit={handleClick}>
          <label className='form-search' htmlFor='newsSearch'>
            Post a new topic ! 
            <input type='text' value={value} onChange={handleChange} />
          </label>
          <input type='submit' value='Go' />
        </form>
      </div>
    </div>
  );
}

export default RoundTable;
