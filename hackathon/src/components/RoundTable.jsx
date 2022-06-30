import React, { useState } from 'react';
import ContentOfTable from './ContentOfTable';
import '../assets/RoundTable.css';
import TopicButton from './TopicButton';

function RoundTable() {
  const [newTopic, setNewTopic] = useState([]);
  const [value, setValue] = useState();
  const [form, setForm] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setNewTopic(value);
    setForm(!form);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='RoundTable'>
      {ContentOfTable.map((card) => (
        <div className='Card'>
          <h3>{card.title}</h3>
          <h5>{card.content}</h5>
          <p>Lieu : {card.location}</p>
          <TopicButton />
        </div>
      ))}
      <div className='addTopic'>
        <h3>
          {form ? (
            <div className='newtopic'>
              <h3>{newTopic}</h3>
            </div>
          ) : (
            "C'est votre tour"
          )}
        </h3>
        <TopicButton />
      </div>
      <div classname='FormTopic'>
        <form onSubmit={handleClick}>
          <label className='form-search' htmlFor='newsSearch'>
            Poster une nouvelle idée :&nbsp;&nbsp;&nbsp;
            <input type='text' value={value} onChange={handleChange} />
          </label>
          <input type='submit' value='Go' />
        </form>
      </div>
    </div>
  );
}

export default RoundTable;
