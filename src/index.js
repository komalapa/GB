import React, {createElement} from 'react';
import ReactDom from 'react-dom';

// const messages = [
//     {name: 'Ivan', content: 'hello', id:0},
//     {name: 'Oleg', content: 'hi', id:1},
//     {name: 'Lena', content: 'hello', id:2},
// ]

const SendMessage = ({name, content,id, send}) => {
  
    return(
    <input type="button" onClick={send} value="send" />
    )
}
const Message=({name, content, id}) => <li ><strong>{name}</strong> : {content}</li>
const MessageList = () =>{ 
    const [messages, setMessages] = React.useState( [
        {name: 'Ivan', content: 'hello', id:0},
        {name: 'Oleg', content: 'hi', id:1},
        {name: 'Lena', content: 'hello', id:2},
    ]);
    const handleSend = () => {
        let newMessages=messages;
        newMessages.push({name: 'Hercule', content: 'use your grey cells', id: (messages.length+1)});
        setMessages([...newMessages])

        console.log(messages)
    }  
    console.log(messages)
    return (
    <>
        <ul>
            {messages.map( item => {console.log(item); return(<Message {...item} key={item.id} />)})}
        </ul>
        <SendMessage name="Hercule" content = "Use your gray cells" id = {messages.length +1} send = {handleSend}/>
    </>
)
}


const mountPoint = document.getElementById('root')

ReactDom.render(
    <MessageList />,
    mountPoint
)
//Задачи: Добавить отправку сообщения