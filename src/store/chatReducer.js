import {handleActions} from 'redux-actions'

import {loadingChats,initChats,failedLoading, sendMessage, likeMessage, deleteMessage, editMessage, addChat, deleteChat, chatHighlighter} from './chatActions'
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
    [loadingChats]: (state, action)=>{
        //console.log ('initchats', state , action)
        return {
            isLoadingChats: true,
            error:null,
        }
    },
    [initChats]: (state, action)=>{
//        console.log ('initchats', state , action)
        return {
            chats:action.payload.chats,
            isLoadingChats: false,
            error:null,
        }
    },
    [failedLoading]: (state, action)=>{
        console.log ('fail', state , action)
        return {
            isLoadingChats: false,
            error:action.payload.msg,
        }
    },
    [sendMessage]: (state, action)=>{
        //console.log ('sendmessage', state , action)
        const {id,name,content,likes} = action.payload
        const msgId= +Date.now()
        return {
            ...state,
            chats:{
                ...state.chats,
                [id]: {
                    ...state.chats[id],
                    chat:[
                        ...state.chats[id].chat,
                        {id:msgId, name, content, likes}
                    ]
                }
            }
        }
    },
    [deleteMessage]: (state, action)=>{
        const {chatId, msgId} = action.payload
        const newChat = state.chats[chatId].chat.filter((item)=>(item.id != msgId));
        //console.log (state)
        //console.log (newChat)
        return {
            ...state,
            chats:{
                ...state.chats,
                [chatId]: {
                    ...state.chats[chatId],
                    chat:[
                        ...newChat
                    ]
                }
            }
        }
    },
    [editMessage]: (state, action)=>{
        const {chatId, msgId, newContent} = action.payload
        let newChat = state.chats.[chatId].chat.map(item => {if (item.id===msgId){item.content = newContent}; return item});
        return {
            ...state,
            chats:{
                ...state.chats,
                [chatId]: {
                    ...state.chats[chatId],
                    chat:[
                        ...newChat
                    ]
                }
            }
            
        }
    },
    [likeMessage]: (state, action)=>{
        const {chatId, messageId, number} = action.payload
        let likedChat = state.chats[chatId].chat.map(item => {if (item.id===messageId){item.likes = item.likes + (+number)}; return item});
        return {
            ...state,
            chats:{
                ...state.chats,
                [chatId]: {
                    ...state.chats[chatId],
                    chat:[
                        ...likedChat
                    ]
                }
            }
        }
    },
    [addChat]: (state, action)=>{
        //console.log ('sendmessage', state , action)
        const {chatId, name} = action.payload
        
        return {
            ...state,
            chats:{
                ...state.chats,
                [chatId]: {
                    name,
                    chat:[],
                    isHighlighted:false,
                }
            }
        }
    },
    [deleteChat]: (state, action)=>{
        const {chatId} = action.payload
        //console.log (state)
        const newState = state;
        delete newState.chats[chatId]
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
            chats:{
                ...state.chats,
                [chatId]: {
                    ...state.chats[chatId],
                    isHighlighted:!state.chats[chatId].isHighlighted,
                }
            }
        }
    },
}, initialState)