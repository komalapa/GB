import {createActions} from 'redux-actions';
import {loadingChats,initChats, failedLoading, sendMessage} from './chatActions'
export const fetchChat = () => async dispatch => {
    dispatch(loadingChats())
    try{
        //console.log("fetch")
        
        const res = await fetch('/api/chats.json');
        if (!res.ok){
            throw new Error("Ошибка загрузки чата")
        } else {
            const result = await res.json().then(result).catch((err)=>(null));
            //console.log(res,result)
            if (!result){
                throw new Error("Ошибка формата чата")
            } else {
                dispatch(initChats(result))
            }
            
        }
        
    } catch(e) {
        dispatch(failedLoading(e.message))
    }
    // if (result) {
    //     dispatch(initChats(result))
    // }
}

export const sendMessageToAnfisa = (botName, chatId, content) => async dispatch => {
    //console.log(botName)
    const formData = new FormData;
    formData.append('query', JSON.stringify({
        ask: content,
        userid: '0000'+chatId,
    }))
    try{
        const res = await fetch('/bot/', {
            method: 'post',
            body: formData,
        });
        const result = await res.json();
        //console.log(result.aiml)
        dispatch(sendMessage(chatId, botName,result.aiml, 5))
    } catch(e) {
        
    }
}