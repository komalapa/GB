import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router'
//import reducers
import chatReducer from './chatReducer'

//end import reducers
import botMiddleware from './botMiddleware'
import deleteMiddleware from './deleteMiddleware'

export const history = createBrowserHistory();

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history)
})

export function initStore(preloadedState = undefined){
    const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;//подключение devtools 
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                botMiddleware,
                deleteMiddleware,
            )
        ),
        
    )
}