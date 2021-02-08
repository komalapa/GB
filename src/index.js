import React, {createElement} from 'react';
import ReactDom from 'react-dom';

const messages = [
    {name: 'Ivan', content: 'hello', id:0},
    {name: 'Oleg', content: 'hi', id:1},
    {name: 'Lena', content: 'hello', id:2},
]

const Message=({name, content, id}) => <li ><strong>{name}</strong> : {content}</li>
const MessageList = ({messages}) => (
    <ul>
        {messages.map( item => <Message {...item} key={item.id} />)}
    </ul>
)

const mountPoint = document.getElementById('root')

ReactDom.render(
    <MessageList messages={messages}/>,
    mountPoint
)
//Задачи: Добавить отправку сообщения