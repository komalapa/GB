import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import './header.css'

export const Header = (props) =>{
    const location = window.document.location.pathname
    return(   
        <header>
            <Link className="chats-link" to = "/chats">Чатик</Link>
            <Link className="about-link" to = '/about'>О чатике</Link>
        </header>
    )

}