import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//components import

//end components import
import './chatList.css'
import {useInput} from '../../hooks/hooksUseInput'



export  const ChatList = ({chats, onCreateChat, onDeleteChat})=> { 
    const [chatName, setChatName, setInitialChatName]=useInput('');

    const handleAddChat = () =>{
        let id = +chats[chats.length -1].id +1;
        if (!id) {id = +(new Date())}
        const chatNameStr = chatName ? chatName : "Chat " + id;
        //console.log('id',id)
        onCreateChat(id, chatNameStr);
        setInitialChatName('');
    }
    const handleDeleteChat = (id) => () =>{
        onDeleteChat(id)
    }
    const handleKeyUp = (event) =>{
        if (event.keyCode === 13) { // Enter
            event.preventDefault();
            handleAddChat();
        }
     
    }
    
    return (
    <>
        <ul className="chat-list">
            {chats.map( item => (<li className="chat-list-item" key={item.id} >
                <Link to = {'/chats/'+item.id}>
                    {item.name} 
                </Link><span className="chat-delete-btn" onClick={handleDeleteChat(item.id)}>&#x1F5D1;</span>
                </li>))}
                <li  className="chat-list-item">
                <input
                    name = "chatname"
                    placeholder="Новый чат"
                    value = {chatName}
                    onChange ={setChatName}
                    // onChange ={(e) => setName(e.target.value)}
                    className="chatlist-name-input"
                    onKeyUp={handleKeyUp}
                >
                </input>
                    <span className="add-chat" onClick={handleAddChat}>+</span>
                </li>
        </ul>
        
        
    </>
)
}
ChatList.propTypes ={
   chats: PropTypes.arrayOf(PropTypes.object).isRequired,
   onCreateChat:PropTypes.func.isRequired,
   onDeleteChat:PropTypes.func.isRequired,
}