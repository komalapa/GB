import {createActions} from 'redux-actions';

export const {initChats,sendMessage,likeMessage,addChat} = createActions({
    INIT_CHATS:()=>({}),
    SEND_MESSAGE:(id, name,content, likes)=>({id,name,content,likes}),
    LIKE_MESSAGE:(chatId, messageId, number) =>({chatId, messageId, number}),
    ADD_CHAT:(chatId, name) => ({chatId, name}),
    
})