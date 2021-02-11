import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../../components/MessageList/MessageList'
import {Chat} from '../../components/chat/chat'
import { render } from 'react-dom';
//end components import

export const CONST_ROBOT_NAME = 'Hercule';
const CONST_ROBOT_CONTENT = 'use your little grey cells mon ami';
let robotTimeoutId = null;

export const ChatContainer = () => {
    const [state, setState] = React.useState({
        chat: [
            {name: 'Ivan', content: 'hello', likes:5, id:0},
            {name: 'Oleg', content: 'hi', likes:5, id:1},
            {name: 'Lena', content: 'hello',likes:5, id:2},
        ]
    })
    React.useEffect(()=>{
        //console.log(state)
        if (state.chat[state.chat.length -1]["name"]!=="Hercule"){
            if (!robotTimeoutId){robotTimeoutId = setTimeout(() =>{
                let newMessage= {name: CONST_ROBOT_NAME, content: 'O, ' + state.chat[state.chat.length -1]["name"]+', '+CONST_ROBOT_CONTENT,likes:5, id: null};
                handleSendMessage(newMessage);
                robotTimeoutId = null;
            }, 3000);
        }
        }
    })
    const handleSendMessage = (message) =>{
        //message.id = (message.id == null) ? state.chat.length + 1 : message.id;
        if (message.id == null){
            message.id = +(new Date())//state.chat.length + 1
        }
        setState((state)=>({chat:[...state.chat, message]}))
        
    } 

    const handleLike = (id, number) =>{
        let chat = state.chat.map(item => {if (item.id===id){item.likes = item.likes + (+number)}; return item});
        setState({chat:[...chat]})
    }
    
    return <Chat chatMessages = {state.chat} onSendMessage = {handleSendMessage} onLike={handleLike}/>

}

