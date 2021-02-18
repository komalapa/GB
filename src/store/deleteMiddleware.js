import {deleteChat} from './chatActions'

export default store => next => action =>
{
    //console.log(store,next,action)
    
    if (action.type === deleteChat.toString()){
        const {chatId} = action.payload;
        if (confirm(`Удить чат ${store.getState().chats.chats[chatId].name}?`)){
            next(action)
        }     
    } else {
        next(action)
    }
    
}
