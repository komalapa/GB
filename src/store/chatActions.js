import {createActions} from 'redux-actions';

export const {initChats,sendMessage,deleteMessage, editMessage, likeMessage,addChat} = createActions({
    INIT_CHATS:()=>({}),
    SEND_MESSAGE:(id, name,content, likes)=>({id,name,content,likes}),
    DELETE_MESSAGE:(chatId, msgId)=>({chatId, msgId}),
    EDIT_MESSAGE:(chatId, msgId, newContent)=>({chatId, msgId, newContent}),
    LIKE_MESSAGE:(chatId, messageId, number) =>({chatId, messageId, number}),
    ADD_CHAT:(chatId, name) => ({chatId, name}),
    
})