import {createActions} from 'redux-actions';
import {loadingChats,initChats, failedLoading} from './chatActions'
export const fetchChat = () => async dispatch => {
    dispatch(loadingChats())
    try{
        //console.log("fetch")
        
        const res = await fetch('/api/chats.json');
        if (!res.ok){
            throw new Error("Ошибка загрузки чата")
        } else {
            const result = await res.json().then(result).catch((err)=>(null));
            console.log(res,result)
            if (!result){
                throw new Error("Ошибка формата чата")
            } else {
                dispatch(initChats(result))
            }
            
        }
        
    } catch(e) {
        //console.log('eeee',e.message)
        dispatch(failedLoading(e.message))
    }
    // if (result) {
    //     dispatch(initChats(result))
    // }
}