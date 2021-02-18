import {addChat} from './chatActions'
import {push} from 'connected-react-router'

export default store => next => action =>
{
    next(action)
    if (action.type === addChat.toString()){
        store.dispatch(push('/chats/'+action.payload.chatId))
    }
}
