import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';

//components import
import {Message} from "../Message/Message"

//end components import
import {useInput} from '../../hooks/hooksUseInput'
import './MessageList.css'

const SendMessage = ({name, content,id, send, onDeleteMessage}) => {
    const handleSend = () => {
        send({name,content,likes:5, id})
    }
    return(
    <input type="button" onClick={handleSend} value="Тестовое сообщение" className="send-test-msg-btn" />
    )
}

export  function MessageList({chatMessages,onSendMessage,onLike, onDeleteMessage,onEditMessage}){ 
    const [isShowLikes, setIsShowLikes]=React.useState(true);
    const [textareaClass, setTexareaClass]=React.useState("chat-form-content edit-textarea-hide");
    const [editContent, setEditContent, setOldEditContent]=useInput("");
    const [editMsgId, setEditMsgId]=React.useState(null);
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
    
    const handleEdit = (msgId) => ()=>{
        console.log(msgId)
        const messageForEdit = chatMessages.find(item=>item.id == msgId)
        setTexareaClass("chat-form-content edit-textarea-visible");
        setOldEditContent(messageForEdit.content);
        setEditMsgId(messageForEdit.id)
    }
    const handleEditKeyUp = (event) =>{
        if (event.keyCode === 13) { // Enter
            event.preventDefault();
            onEditMessage(editMsgId,editContent);
            setTexareaClass ("chat-form-content edit-textarea-hide");
            setEditMsgId(null);
            setOldEditContent('');
        }
     
    }
    return (
    <>
        <ul className="message-list">
            {chatMessages.map( item => (<Message 
            {...item} 
            key={item.id} 
            isShowLikes = {isShowLikes} 
            countLikes = {handleLikesCounter(item.id)} 
            likes = {item.likes} 
            onDeleteMessage={onDeleteMessage}
            onEdit={handleEdit(item.id)}
            />))}
        </ul>
        <button onClick={handleShow} className="show-btn">{(isShowLikes)?"Скрыть рейтинг":"Показать рейтинг"}</button>
        <hr/>
        <SendMessage name="Тестовая отправка" content = "Тестовое сообщение" id = {null} send = {handleSend}/>
        <textarea 
            name="editContent" 
            id="chat-form-content" 
            cols="30" 
            rows="10"
            placeholder="Сообщение"
            value = {editContent}
            onChange ={setEditContent}
            //onChange ={(e) => newContent = e.target.value}
            className={textareaClass}
            onKeyUp={handleEditKeyUp}//заменяем перевод строки на submit
        />
        
    </>
)
}
MessageList.propTypes ={
    chatMessages : PropTypes.arrayOf(Message).isRequired,
    onSendMessage: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onDeleteMessage : PropTypes.func.isRequired,
    onEditMessage: PropTypes.func.isRequired,
}