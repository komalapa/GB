import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//components import
import {ChatContainer} from './containers/chatContainer/chatContainer'
import {Header} from './components/header/header'
import {ChatList} from './components/chatList/chatList'
import { About } from './components/about/about';
import { NotFound } from './components/notFound/notFound';
//end components import

//let chats=[{id:1,name:"Chat1"},{id:2,name:"Chat2"},{id:3,name:"Chat3"},{id:4,name:"Chat4"}]
// const handleAddChat = (chatid, name) => {
//     //if (!id) {id = +(new Date())}
    
//     chats = [...chats, {id:chatid, name}]
//     console.log(chats)
// };

export const App = () => {
    const [chats, setChats] = React.useState([{id:1,name:"Chat1"},{id:2,name:"Chat2"},{id:3,name:"Chat3"},{id:4,name:"Chat4"}])
    const handleAddChat = (chatid, name) => {
        setChats( [...chats, {id:chatid, name}])
        console.log(chats)
    };
    return(
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path = '/' exact>main page</Route>
            <Route path = '/chats'>
                <ChatList chats={chats} addChatToList={handleAddChat}/>
                <Switch>
                    <Route path = '/chats' exact component={ChatContainer}/>
                    <Route path = '/chats/:id' exact component={ChatContainer}/>
                </Switch>
            </Route>
            <Route path = '/about' component={About}/>    
            <Route path = '/contacts'>contacts page</Route>
            <Route path = '/' component={NotFound}/>
        </Switch>
    </BrowserRouter>
    )
}
    {/* <>
    <Header/>
    <ChatList />
    <ChatContainer/>
</> */}