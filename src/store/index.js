import {createStore, combineReducers} from 'redux'

//import reducers
import chatReducer from './chatReducer'

//end import reducers

const reducer = combineReducers({
    chats: chatReducer,
})

export function initStore(preloadedState = undefined){
    return createStore(
        reducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},//подключение devtools
)
}