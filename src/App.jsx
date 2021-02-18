import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
//components import
import ChatContainer from './containers/chatContainer'
import {Header} from './components/header/header'
//import {ChatList} from './components/chatList/chatList'
import ChatListContainer from './containers/chatListContainer'
import { About } from './components/about/about';
import { NotFound } from './components/notFound/notFound';
//end components import
//redux import
import {initStore, history} from './store/index'
import {initChats, sendMessage} from './store/chatActions'
import {fetchChat} from './store/chatOperations'
//end redux import

const store = initStore();
//store.dispatch(initChats());
store.dispatch(fetchChat());
export const App = () => 
    <Provider store={store}>
        {/* <BrowserRouter> */}
        <ConnectedRouter history={history}>    
            <Header/>
            <Switch>
                <Route path = '/' exact><Redirect to="/chats" /></Route>
                <Route path = '/chats' >
                    <ChatListContainer history={history}/>
                    <Switch>
                        <Route path = '/chats' exact><span className = "chat-not-found">Выбери чат</span></Route>
                        <Route path = '/chats/:id' exact component={ChatContainer}/>
                    </Switch>
                </Route>
                <Route path = '/about' component={About}/>    
                <Route path = '/contacts'>contacts page</Route>
                <Route path = '/' component={NotFound}/>
            </Switch>
        </ConnectedRouter>
        {/* </BrowserRouter> */}
    </Provider>

    {/* <>
    <Header/>
    <ChatList />
    <ChatContainer/>
</> */}