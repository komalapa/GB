import React from 'react';
import PropTypes from 'prop-types';

//components import
import {Message} from "../Message/Message"

//end components import
import './MessageList.css'

const SendMessage = ({name, content,id, send}) => {
    const handleSend = () => {
        send({name,content,likes:5, id})
    }
    return(
    <input type="button" onClick={handleSend} value="Тестовое сообщение" className="send-test-msg-btn" />
    )
}

export  function MessageList({chatMessages,onSendMessage,onLike}){ 
    const [isShowLikes, setIsShowLikes]=React.useState(true);
    
    const handleSend = (newMessage) => {
        //let newMessage={name: 'Harry', content: 'hi',likes:5, id: null};
        onSendMessage(newMessage)
    }  
    const handleLikesCounter = (id) =>((number)=>{
        onLike(id, number)
    })
    const handleShow = () => {
        let isShown=!isShowLikes;
        setIsShowLikes(isShown)
    }
     
    return (
    <>
        <ul className="message-list">
            {chatMessages.map( item => (<Message {...item} key={item.id} isShowLikes = {isShowLikes} countLikes = {handleLikesCounter(item.id)} likes = {item.likes} />))}
        </ul>
        <button onClick={handleShow} className="show-btn">{(isShowLikes)?"Скрыть рейтинг":"Показать рейтинг"}</button>
        <hr/>
        <SendMessage name="Тестовая отправка" content = "Тестовое сообщение" id = {null} send = {handleSend}/>
        
    </>
)
}
MessageList.propTypes ={
    chatMessages : PropTypes.arrayOf(Message).isRequired,
    onSendMessage: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired
}