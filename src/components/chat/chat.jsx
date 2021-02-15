import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../chatForm/chatForm'
import {Message} from '../Message/Message'

//end components import
import './chat.css';

export const Chat = ({chatMessages, onSendMessage, onLike}) => {
   //console.log(chatMessages)
    return (
    <main>
        {chatMessages  && (chatMessages.length>0) && <MessageList chatMessages={chatMessages} onSendMessage={onSendMessage} onLike = {onLike}/>}
        {chatMessages && (chatMessages.length==0) && <span className="chat-not-found"> Чат пуст! Будь первым!</span> }
        {!chatMessages && <span className="chat-not-found"> Чат еще не создан</span>}
        {<ChatForm onSendMessage = {onSendMessage}/> }
    </main>
   )
}

Chat.propTypes ={
    chatMessages : PropTypes.arrayOf(Message),
    onSendMessage: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
}