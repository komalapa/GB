import React from 'react';
import PropTypes from 'prop-types';
//components import
import {MessageList} from '../../components/MessageList/MessageList'
import {Chat} from '../../components/chat/chat'
import { render } from 'react-dom';
//end components import

function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


export const CONST_ROBOT_NAME = 'Hercule';
const CONST_ROBOT_CONTENT = 'use your little grey cells mon ami';
let robotTimeoutId = null;

export const ChatContainer = (props) => {

    const [state, setState] = React.useState({
        chats:{
            1:{name:'Chat 1',
                chat: [
                {name: 'Ivan', content: 'hello', likes:5, id:0},
                {name: 'Oleg', content: 'hi', likes:5, id:1},
                {name: 'Lena', content: 'hello',likes:5, id:2},
            ]},
            2:{name:'Chat 2',
                chat: [
                {name: 'Ivan', content: 'ok', likes:5, id:0},
                {name: 'Oleg', content: 'ok?', likes:5, id:1},
                {name: 'Lena', content: 'ok!',likes:5, id:2},
            ]},
            3:{name:'Chat 3',
                chat: [
                {name: 'Ivan', content: '=D', likes:5, id:0},
            ]},
            4:{name:'Chat 4',
                chat: [
                ]}

        },
        
    })
    const prevState = usePrevious(state)
    
    React.useEffect(()=>{
        //console.log(prevState)
        if (!(prevState == undefined) && !( prevState.chats[id].chat.length ==  state.chats[id].chat.length)){ 
            
        const {id} = props.match.params;
        if ( state.chats[id].chat.length>0 && state.chats[id].chat[state.chats[id].chat.length -1]["name"]!=="Hercule"){
            if (!robotTimeoutId){robotTimeoutId = setTimeout(() =>{
                let newMessage= {name: CONST_ROBOT_NAME, content: 'O, ' + state.chats[id].chat[state.chats[id].chat.length -1]["name"]+', '+CONST_ROBOT_CONTENT,likes:5, id: null};
                handleSendMessage(id)(newMessage);
                robotTimeoutId = null;
            }, 1000);
        }
        }
    }
    })
    const handleSendMessage = (id) => (message) =>{
        //message.id = (message.id == null) ? state.chat.length + 1 : message.id;
        if (message.id == null){
            message.id = +(new Date())//state.chat.length + 1
        }
        setState((state)=>({
            ...state,
            chats:{
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    chat : [...state.chats[id].chat, message]
                }
            }
        }))
        
    } 

    const handleLike = (id, number) =>{
        let chat = state.chat.map(item => {if (item.id===id){item.likes = item.likes + (+number)}; return item});
        setState({chat:[...chat]})
    }
    

    const {id} = props.match.params;
    const messages = id && state.chats[id] ? state.chats[id].chat : null;
    return <Chat chatMessages = {messages} onSendMessage = {handleSendMessage(id)} onLike={handleLike}/>

}

