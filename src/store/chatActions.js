import {createActions} from 'redux-actions';

export const {loadingChats,failedLoading,initChats,sendMessage,deleteMessage, editMessage, likeMessage,addChat, deleteChat, chatHighlighter} = createActions({
    LOADING_CHATS:()=>({}),
    FAILED_LOADING:(msg)=>({msg}),
    INIT_CHATS:(chats)=>({chats}),
    SEND_MESSAGE:(id, name,content, likes)=>({id,name,content,likes}),
    DELETE_MESSAGE:(chatId, msgId)=>({chatId, msgId}),
    EDIT_MESSAGE:(chatId, msgId, newContent)=>({chatId, msgId, newContent}),
    LIKE_MESSAGE:(chatId, messageId, number) =>({chatId, messageId, number}),
    ADD_CHAT:(chatId, name) => ({chatId, name}),
    DELETE_CHAT: (chatId)=>({chatId}),
    CHAT_HIGHLIGHTER: (chatId)=>({chatId}),
    
})