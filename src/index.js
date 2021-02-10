import React, {createElement} from 'react';
import ReactDom from 'react-dom';

//components import
    import MessagesList from './components/MessagesList/MessagesList';
    // import Counter from './components/counter/counter'
//end components import






const mountPoint = document.getElementById('root')

ReactDom.render(
    <MessagesList />,
    mountPoint
)
//ДЗ переписать счетчик на функцию
//сделать ответ робота
//прописать propTypes