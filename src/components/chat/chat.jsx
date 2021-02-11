import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../chatForm/chatForm'
//end components import

export const Chat = ({chatMessages, onSendMessage, onLike}) => {
   return (
    <main>
        <MessageList chatMessages={chatMessages} onSendMessage={onSendMessage} onLike = {onLike}/>
        {<ChatForm onSendMessage = {onSendMessage}/> }
    </main>
   )
}

Chat.propTypes ={
    chatMessages : MessageList.propTypes.chatMessages,
    onSendMessage: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
}