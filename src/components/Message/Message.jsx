import React from 'react';
import PropTypes from 'prop-types';
//components import
import {Counter} from '../counter/counter'
//end components import

export const Message = ({name, content, likes, id,countLikes, isShowLikes}) => <li ><strong>{name}</strong> : {content}  {isShowLikes&& <Counter countLikes = {countLikes} likes = {likes}/> }  </li>

Message.propTypes ={
    name : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    likes : PropTypes.number.isRequired,
    isShowLikes : PropTypes.bool.isRequired,
    countLikes : PropTypes.func.isRequired,
}

