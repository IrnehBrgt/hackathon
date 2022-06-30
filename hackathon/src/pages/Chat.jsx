import React from 'react';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import '../assets/Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [responses, setResponses] = useState([
    {
      response: 'Bonjour Marie',
    },
    {
      response: 'Très bien merci',
    },
    {
      response: 'très bien également',
    },
    {
      response: 'où en es-tu avec le projet',
    },
    {
      response: 'ça avance, je fais une présentation en fin de journée. Tu peux y participer',
    },
    {
      response:'je t envoie le lien, à plus tard',
    }
  ]);

  function sendMessage() {
    const firstResponse = responses.shift();
    setMessageList([...messageList, message]);
    setMessage('');
    setTimeout(() => {
      setMessageList((messageList) => {
        return [...messageList, firstResponse.response];
      });
    }, 2000);
  }

  return (
    <div className='generalContainer'>
      <div>
        <Sidebar />
      </div>
        <div className='messagesContainer'>
        <div className='messages'></div>
        <div className='boxMessage'>
        <div className='boxtest'></div>
          <input
          className='messageInput'
            type='text'
            placeholder='message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className='styleBtn' onClick={sendMessage}>
            Envoyer
          </button>
        </div>
        
        <div className='boxanswer'>
             {messageList.map((message, index) => (
           <div  id={index % 2 === 0 ? "answer" : "response"}>
            <p className='textMes'>{index%2 === 0 ? "Moi" :"Martin"}</p>
              <input
              id={index % 2 === 0 ? "answer" : "response"}
                className='messageInput'
                type='text'
                placeholder={message}
              />
              </div>
          ))}
        </div>
       
      
      </div>
    </div>
  );
}

export default Chat;
