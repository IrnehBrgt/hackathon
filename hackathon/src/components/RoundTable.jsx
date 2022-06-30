import React, { useState } from 'react';
import ContentOfTable from './ContentOfTable';
import '../assets/RoundTable.css';

function RoundTable() {
  const [newTopic, setNewTopic] = useState([]);
  const [value, setValue] = useState();
  const [form, setForm] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setNewTopic(value);
    setForm(!form);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleCount(e) {
    setCount(count + 1);
  }

  return (
    <div className='RoundTable'>
      {ContentOfTable.map((card) => (
        <div className='Card'>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
          <button onClick={handleCount}>Je participe</button>
          <p>Participants : {count}</p>
        </div>
      ))}
      <div className='addTopic'>
        <h3>
          {form ? (
            <div>
              <h3>{newTopic}</h3>
              <button onClick={handleCount}>Je participe</button>{' '}
              <p>Participants : {count}</p>
            </div>
          ) : (
            "C'est votre tour"
          )}
        </h3>
      </div>
      <div classname='formTopic'>
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
