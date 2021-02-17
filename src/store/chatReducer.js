import {handleActions} from 'redux-actions'

import {initChats,sendMessage, likeMessage, deleteMessage, editMessage, addChat, deleteChat, chatHighlighter} from './chatActions'
// export default (state={countedNumber:0}, action)=>{
//     console.log(state, action)
//     if (action.type == "COUNT"){
//         return {
//             countedNumber: (state.countedNumber + action.payload.number),
//         }
//     }
//     return state
// }

const initialState = {};

export default handleActions({
    [initChats]: (state, action)=>{
        //console.log ('initchats', state , action)
        return {
            1:{name:'Chat 1',
                chat: [
                {name: 'Ivan', content: 'hello', likes:5, id:0},
                {name: 'Oleg', content: 'hi', likes:5, id:1},
                {name: 'Lena', content: 'hello',likes:5, id:2},
                ],
                isHighlighted:false,
            },
            2:{name:'Chat 2',
                chat: [
                {name: 'Ivan', content: 'ok', likes:5, id:0},
                {name: 'Oleg', content: 'ok?', likes:5, id:1},
                {name: 'Lena', content: 'ok!',likes:5, id:2},
                ],
                isHighlighted:false,
            },
            3:{name:'Chat 3',
                chat: [
                {name: 'Ivan', content: '=D', likes:5, id:0},
                ],
                isHighlighted:false,
            },
            4:{name:'Chat 4',
                chat: [
                ],
                isHighlighted:false,
            }
            }

        
    },
    [sendMessage]: (state, action)=>{
        //console.log ('sendmessage', state , action)
        const {id,name,content,likes} = action.payload
        const msgId= +Date.now()
        return {
            ...state,
            [id]: {
                ...state[id],
                chat:[
                    ...state[id].chat,
                    {id:msgId, name, content, likes}
                ]
            }
            
        }
    },
    [deleteMessage]: (state, action)=>{
        const {chatId, msgId} = action.payload
        const newChat = state[chatId].chat.filter((item)=>(item.id != msgId));
        //console.log (state)
        //console.log (newChat)
        return {
            ...state,
            [chatId]: {
                ...state[chatId],
                chat:[
                    ...newChat
                ]
            }
            
        }
    },
    [editMessage]: (state, action)=>{
        const {chatId, msgId, newContent} = action.payload
        let newChat = state[chatId].chat.map(item => {if (item.id===msgId){item.content = newContent}; return item});
        return {
            ...state,
            [chatId]: {
                ...state[chatId],
                chat:[
                    ...newChat
                ]
            }
            
        }
    },
    [likeMessage]: (state, action)=>{
        const {chatId, messageId, number} = action.payload
        let likedChat = state[chatId].chat.map(item => {if (item.id===messageId){item.likes = item.likes + (+number)}; return item});
        return {
            ...state,
            [chatId]: {
                ...state[chatId],
                chat:[
                    ...likedChat
                ]
            }
            
        }
    },
    [addChat]: (state, action)=>{
        //console.log ('sendmessage', state , action)
        const {chatId, name} = action.payload
        
        return {
            ...state,
            [chatId]: {
                name,
                chat:[],
                isHighlighted:false,
            }
            
        }
    },
    [deleteChat]: (state, action)=>{
        const {chatId} = action.payload
        //console.log (state)
        const newState = state;
        delete newState[chatId]
        //console.log (state)
        //console.log (newChat)
        return {
            ...newState
            
        }
    },
    [chatHighlighter]: (state, action)=>{
        const {chatId} = action.payload
        //console.log('LIGHT')
        return {
            ...state,
            [chatId]: {
                ...state[chatId],
                isHighlighted:!state[chatId].isHighlighted,
            }
            
        }
    },
}, initialState)