import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../MessageList/MessageList'
import {ChatForm} from '../chatForm/chatForm'
import {Message} from '../Message/Message'

//end components import
import './chat.css';
import { Loader } from '../loader/loader';

export const Chat = ({isLoading,error, chatMessages, onSendMessage, onLike, onDeleteMessage, onEditMessage}) => {
   //console.log(isLoading)
    if (isLoading||error) {
        //console.log(isLoading, error);       
        return <Loader/>
    } else {
//        console.log("????")
        return (
            <main>
                {chatMessages  && (chatMessages.length>0) && <MessageList chatMessages={chatMessages} onSendMessage={onSendMessage} onDeleteMessage={onDeleteMessage} onLike = {onLike} onEditMessage={onEditMessage}/>}
                {chatMessages && (chatMessages.length==0) && <span className="chat-not-found"> Чат пуст! Будь первым!</span> }
                {!chatMessages && <>
                <span className="chat-not-found"> Чат еще не создан</span>
                </>}
                {chatMessages && <ChatForm onSendMessage = {onSendMessage}/> }
            </main>
        )
    }
}

Chat.propTypes ={
    chatMessages : PropTypes.arrayOf(Message),
    onSendMessage: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onDeleteMessage : PropTypes.func.isRequired,
    onEditMessage : PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
}