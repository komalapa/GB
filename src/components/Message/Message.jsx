import React from 'react';
import PropTypes from 'prop-types';
//components import
import {Counter} from '../counter/counter';
//import {CONST_ROBOT_NAME} from '../../containers/chatContainer/chatContainer';
//end components import
import './message.css'

const CONST_ROBOT_NAME="Hercule"
//console.log(CONST_ROBOT_NAME)
export const Message = ({name, content, likes, id,countLikes, isShowLikes}) => <li className={(name==CONST_ROBOT_NAME)?"message robot-message":"message"}><strong>{name}</strong> : {content}  {isShowLikes&& <Counter countLikes = {countLikes} likes = {likes}/> }  </li>

Message.propTypes ={
    name : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    likes : PropTypes.number.isRequired,
    isShowLikes : PropTypes.bool.isRequired,
    countLikes : PropTypes.func.isRequired,
    id: PropTypes.number
}

