import React from 'react';

import   './counter.css';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.props.countLikes(+event.target.value)
    }
    
    render(){
        return(<div className="likes">
            <> 
                <button className="plus-btn" value={10} onClick={this.handleClick}>+10</button>
                <button className="plus-btn" value={1} onClick={this.handleClick}>+1</button>
                <strong className="likes">{this.props.likes}</strong>
                <button value={-1} onClick={this.handleClick}>-1</button>
                <button value={-10} onClick={this.handleClick}>-10</button>
            </>
            
         </div>)
    }
}