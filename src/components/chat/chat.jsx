import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../chatForm/chatForm'
import {Message} from '../Message/Message'

//end components import
import './chat.css';

export const Chat = ({chatMessages, onSendMessage, onLike, onCreateChat}) => {
   //console.log(chatMessages)
    return (
    <main>
        {chatMessages  && (chatMessages.length>0) && <MessageList chatMessages={chatMessages} onSendMessage={onSendMessage} onLike = {onLike}/>}
        {chatMessages && (chatMessages.length==0) && <span className="chat-not-found"> Чат пуст! Будь первым!</span> }
        {!chatMessages && <>
        <span className="chat-not-found"> Чат еще не создан</span>
        <button onClick={onCreateChat} className="create-chat-btn">Создать чат</button>
        </>}
        {chatMessages && <ChatForm onSendMessage = {onSendMessage}/> }
    </main>
   )
}

Chat.propTypes ={
    chatMessages : PropTypes.arrayOf(Message),
    onSendMessage: PropTypes.func.isRequired,
    onCreateChat: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
}