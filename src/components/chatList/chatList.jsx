import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//components import

//end components import
import './chatList.css'



export  const ChatList = ({chats, onCreateChat})=> { 
    const handleClick = (event) => {
        //alert("Выбран "+ event.target.innerText)
    }
    const handleAddChat = () =>{
        let id = +chats[chats.length -1].id +1;
        if (!id) {id = +(new Date())}
        //console.log('id',id)
        onCreateChat(id, "Chat"+id)
    }

    
    return (
    <>
        <ul className="chat-list">
            {chats.map( item => (<li className="chat-list-item" key={item.id} >
                <Link to = {'/chats/'+item.id}>
                    {item.name}
                </Link>
                </li>))}
        </ul>
        <span className="add-chat" onClick={handleAddChat}>+</span>
        
    </>
)
}
ChatList.propTypes ={
   chats: PropTypes.arrayOf(PropTypes.object).isRequired,
   onCreateChat:PropTypes.func.isRequired
}