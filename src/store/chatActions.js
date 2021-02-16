import {createActions} from 'redux-actions';

export const {initChats,sendMessage} = createActions({
    INIT_CHATS:()=>({}),
    SEND_MESSAGE:(id, name,content, likes)=>({id,name,content,likes}),
    
})