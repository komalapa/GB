import React from 'react';
import PropTypes from 'prop-types';

//components import

//end components import
import './chatList.css'



export  const ChatList = ({chats})=> { 
    const handleClick = (event) => {
        alert("Выбран "+ event.target.innerText)
    }
     
    return (
    <>
        <ul className="chat-list">
            {chats.map( item => (<li className="chat-list-item" key={item.id} onClick={handleClick}>{item.name}</li>))}
        </ul>
        
        
    </>
)
}
ChatList.propTypes ={
   chats: PropTypes.arrayOf(PropTypes.object).isRequired
}