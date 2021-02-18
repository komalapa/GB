import {createActions} from 'redux-actions';
import {loadingChats,initChats, failedLoading} from './chatActions'
export const fetchChat = () => async dispatch => {
    dispatch(loadingChats())
    try{
        //console.log("fetch")
        
        const res = await fetch('/api/chats.json');
        if (!res) {throw new Error("Ошибка загрузки чата")}
        const result = await res.json();
        dispatch(initChats(result));
        
    } catch(e) {
        dispatch(failedLoading(e.message))
    }
    // if (result) {
    //     dispatch(initChats(result))
    // }
}