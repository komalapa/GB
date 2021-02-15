import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//components import
import {ChatContainer} from './containers/chatContainer/chatContainer'
import {Header} from './components/header/header'
import {ChatList} from './components/chatList/chatList'
//end components import

const chats=[{id:1,name:"Chat1"},{id:2,name:"Chat2"},{id:3,name:"Chat3"}]

export const App = () => 
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path = '/' exact>main page</Route>
            <Route path = '/chats'>
                <ChatList chats={chats}/>
                <Switch>
                    <Route path = '/chats' exact component={ChatContainer}/>
                    <Route path = '/chats/:id' exact component={ChatContainer}/>
                </Switch>
            </Route>
            <Route path = '/about'>about page</Route>    
            <Route path = '/contacts'>contacts page</Route>
            <Route path = '/'>404</Route>
        </Switch>
    </BrowserRouter>

    {/* <>
    <Header/>
    <ChatList />
    <ChatContainer/>
</> */}