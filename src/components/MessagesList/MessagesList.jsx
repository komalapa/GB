import React, { useEffect }  from 'react';


//components import
import {Message} from "../Message/Message"
//end components import

const SendMessage = ({name, content,id, send}) => {
  
    return(
    <input type="button" onClick={send} value="send bot message" />
    )
}

export default function MessageList(){ 
    const [messages, setMessages] = React.useState( [
        {name: 'Ivan', content: 'hello', likes:5, id:0},
        {name: 'Oleg', content: 'hi', likes:5, id:1},
        {name: 'Lena', content: 'hello',likes:5, id:2},
    ]);
    const [isShowLikes, setIsShowLikes]=React.useState(true)
    const handleSend = () => {
        let newMessages=messages;
        newMessages.push({name: 'Harry', content: 'hi',likes:5, id: (messages.length+1)});
        setMessages([...newMessages])
    }  
    const handleLikesCounter = (id) =>((number)=>{
        let chat = messages.map(item => {if (item.id===id){item.likes = item.likes + (+number)}; return item});
        setMessages([...chat])
    })
    const handleShow = () => {
        let isShown=!isShowLikes;
        setIsShowLikes(isShown)
    }
    useEffect(()=>{
        let newMessages=messages;
        if (newMessages[newMessages.length -1]["name"]!=="Hercule"){
        setTimeout(() =>{
            newMessages.push({name: 'Hercule', content: 'use your little grey cells mon ami',likes:5, id: (messages.length+1)});
       setMessages([...newMessages])}, 1000);
        }
    })
 
    return (
    <>
        <ul>
            {messages.map( item => (<Message {...item} key={item.id} isShowLikes = {isShowLikes} countLikes = {handleLikesCounter(item.id)} likes = {item.likes} />))}
        </ul>
        <button onClick={handleShow} className="show-btn">{(isShowLikes)?"Скрыть рейтинг":"Показать рейтинг"}</button>
        <hr/>
        <SendMessage name="Hercule" content = "Use your little grey cells mon ami" id = {messages.length +1} send = {handleSend}/>
        
    </>
)
}