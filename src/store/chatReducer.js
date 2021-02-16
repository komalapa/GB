import {handleActions} from 'redux-actions'

import {initChats,sendMessage} from './chatActions'
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
            ]},
            2:{name:'Chat 2',
                chat: [
                {name: 'Ivan', content: 'ok', likes:5, id:0},
                {name: 'Oleg', content: 'ok?', likes:5, id:1},
                {name: 'Lena', content: 'ok!',likes:5, id:2},
            ]},
            3:{name:'Chat 3',
                chat: [
                {name: 'Ivan', content: '=D', likes:5, id:0},
            ]},
            4:{name:'Chat 4',
                chat: [
                ]}
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
}, initialState)