import React from 'react';

//components import
import {ChatContainer} from './containers/chatContainer/chatContainer'
import {Header} from './components/header/header'
import {ChatList} from './components/chatList/chatList'
//end components import

const chats=[{id:1,name:"Chat1"},{id:2,name:"Chat2"},{id:3,name:"Chat3"}]

export const App = () => 
<>
    <Header/>
    <ChatList chats={chats}/>
    <ChatContainer/>
</>