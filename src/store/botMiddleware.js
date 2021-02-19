// export default function(store) {
//     return function(next){
//         return function (action){
//             console.log(store,next,action)
//             next(action)
//         }
//     }

// }

import {sendMessage, addChat, chatHighlighter} from './chatActions'
import {sendMessageToAnfisa} from './chatOperations'

export const ROBOT_NAME = 'Hercule';
export const ANFISA_NAME = 'Анфиса';
const ROBOT_CONTENT = '! Use your little grey cells, mon ami!';
const robotTimeoutIds = {}


export default store => next => action =>
{
    //console.log(store,next,action)
    next(action)
    if (action.type === sendMessage.toString()){
        const {name, id, content} = action.payload;
        //Анфиса в каждой бочке))
        // if (name != ANFISA_NAME){ 
        //        store.dispatch(sendMessageToAnfisa(ANFISA_NAME,id, content));
        //     }
        if (name != ROBOT_NAME){
            clearTimeout(robotTimeoutIds[id]);
            robotTimeoutIds[id] = setTimeout(generateLocalRobotAnswer,2000,store,id,name);
            //Анфиса говорит только с людьми 
            if (name != ANFISA_NAME){ 
               store.dispatch(sendMessageToAnfisa(ANFISA_NAME,id, content));
            }
        } else { 
            store.dispatch(chatHighlighter(id));
            setTimeout(store.dispatch, 1000, chatHighlighter(id))
        }
    }else if (action.type === addChat.toString()){
        const {name, chatId} = action.payload;
        generateLocalRobotGreeting(store,chatId);
        
    }
}

function generateLocalRobotAnswer(store,id, name){
    const msg = {name: ROBOT_NAME, content: "O, "+name + ROBOT_CONTENT ,likes:5}
    store.dispatch(sendMessage(id, msg.name, msg.content, msg.likes))
}

function generateLocalRobotGreeting(store,id){
    const chatName = store.getState().chats.chats[id].name;
    const msg = {name: ROBOT_NAME, content: `G'Day. Welcome to ${chatName}`,likes:5}
    store.dispatch(sendMessage(id, msg.name, msg.content, msg.likes))
}
