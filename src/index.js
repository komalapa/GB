import React, {createElement} from 'react';
import ReactDom from 'react-dom';

//components import
    import MessagesList from './components/MessageList/MessageList';
    import {App} from './App'
    // import Counter from './components/counter/counter'
//end components import

// const messages= [
//     {name: 'Ivan', content: 'hello', likes:5, id:0},
//     {name: 'Oleg', content: 'hi', likes:5, id:1},
//     {name: 'Lena', content: 'hello',likes:5, id:2},
// ];




const mountPoint = document.getElementById('root')

ReactDom.render(
    <App />,
    mountPoint
)
//ДЗ Удаление и редактирование сообщения, Удаление чата, Подсветка чата в который пришло сообщение

