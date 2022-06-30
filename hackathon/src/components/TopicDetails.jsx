import React from 'react'
import ContentOfTopic from './ContentOfTopic';

function TopicDetails() {
  return (
    <div className="Comments">
      <div className='1'>
        <h3>{ContentOfTopic[0].title}</h3>
        <p>{ContentOfTopic[0].text}</p>
        <p>{ContentOfTopic[0].Profil}</p>
        </div>
        <div className='2'>
        <p>{ContentOfTopic[0].comment[0].OneComment}</p>
        <p>{ContentOfTopic[0].comment[0].Profil}</p>
        </div>
        <div>
        <p>{ContentOfTopic[0].comment[1].OneComment}</p>
        <p>{ContentOfTopic[0].comment[1].Profil}</p>
        </div>
        <div className='3'>
        <p>{ContentOfTopic[0].comment[2].OneComment}</p>
        <p>{ContentOfTopic[0].comment[2].Profil}</p>
        </div>
    </div>
  );
}

export default TopicDetails;
