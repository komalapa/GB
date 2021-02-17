// export default function(store) {
//     return function(next){
//         return function (action){
//             console.log(store,next,action)
//             next(action)
//         }
//     }

// }

import {sendMessage, addChat} from './chatActions'

export const ROBOT_NAME = 'Hercule';
const ROBOT_CONTENT = '! Use your little grey cells, mon ami!';
const robotTimeoutIds = {}


export default store => next => action =>
{
    //console.log(store,next,action)
    next(action)
    if (action.type === sendMessage.toString()){
        const {name, id} = action.payload;
        if (name != ROBOT_NAME){
            clearTimeout(robotTimeoutIds[id]);
            robotTimeoutIds[id] = setTimeout(generateLocalRobotAnswer,2000,store,id,name);
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
    const chatName = store.getState().chats[id].name;
    const msg = {name: ROBOT_NAME, content: `G'Day. Welcome to ${chatName}`,likes:5}
    store.dispatch(sendMessage(id, msg.name, msg.content, msg.likes))
}