import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';

//components import
//end components import
import './chatForm.css'

function useInput(initialState) {
    const [state, setState] = React.useState(initialState);

    const setInput = (event) => setState(event.target.value);
    return [state, setInput, setState] 
}

export const ChatForm = ({onSendMessage}) => {
    const [name, setName]=useInput('');
    //const [name, setName]=React.useState('');
    const [content, setContent, setInitialContent]=useInput('');
    //const [content, setContent]=React.useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        let newMessage={name, content, likes:5, id: null};
        onSendMessage(newMessage)
        setInitialContent('');
    };
    const handleKeyUp = (event) =>{
        if (event.keyCode === 13) { // Enter
            event.preventDefault();
            handleSubmit(event);
        }
     
    }
    return(
    <form onSubmit = {handleSubmit}  className="chat-form">
        <input
            name = "name"
            placeholder="Имя"
            value = {name}
            onChange ={setName}
            // onChange ={(e) => setName(e.target.value)}
            className="chat-form-name"
        >
        </input>
        <textarea 
            name="content" 
            id="chat-form-content" 
            cols="30" 
            rows="10"
            placeholder="Сообщение"
            value = {content}
            onChange ={setContent}
            // onChange ={(e) => setContent(e.target.value)}
            className="chat-form-content"
            onKeyUp={handleKeyUp}//заменяем перевод строки на submit
        >

        </textarea>
        <input type="submit" value="Отправить" className="chat-form-submit" />
    </form>
    )
}

ChatForm.propTypes ={
    onSendMessage: PropTypes.func.isRequired,
}