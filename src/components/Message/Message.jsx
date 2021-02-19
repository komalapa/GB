import React from 'react';
import PropTypes from 'prop-types';
//components import
import {Counter} from '../counter/counter';
import {ROBOT_NAME, ANFISA_NAME} from '../../store/botMiddleware';
//end components import
import './message.css'


//const CONST_ROBOT_NAME="Hercule"
//console.log(CONST_ROBOT_NAME)
export const Message = ({name, content, likes, id,countLikes, isShowLikes, onDeleteMessage, onEdit}) => {

    const handleDeleteMessage=()=>{
        onDeleteMessage(id)
    }


    return (<li className={(name==ANFISA_NAME)?"message anfisa-message":((name==ROBOT_NAME)?"message robot-message":"message")}>
        <strong>{name}</strong> : {content}  
        <hr/>
        <div className="message-controls-wrp"> 
            <div>
                <button className="message-controls" onClick={handleDeleteMessage}>&#x1F5D1;</button>
                <button className="message-controls" onClick={onEdit}>&#x1F58A;</button>
            </div>
            {isShowLikes&& <Counter countLikes = {countLikes} likes = {likes}/>  }
        </div> 
    </li>)
    }

Message.propTypes ={
    name : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    likes : PropTypes.number.isRequired,
    isShowLikes : PropTypes.bool.isRequired,
    countLikes : PropTypes.func.isRequired,
    id: PropTypes.number,
    onDeleteMessage : PropTypes.func.isRequired,
    onEdit:PropTypes.func.isRequired,
}

