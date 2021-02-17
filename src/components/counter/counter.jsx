import React from 'react';
import PropTypes from 'prop-types';

import   './counter.css';

// export default class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(event){
//         this.props.countLikes(+event.target.value)
//     }
    
//     render(){
//         return(<div className="likes">
//             <> 
//                 <button className="plus-btn" value={10} onClick={this.handleClick}>+10</button>
//                 <button className="plus-btn" value={1} onClick={this.handleClick}>+1</button>
//                 <strong className="likes">{this.props.likes}</strong>
//                 <button value={-1} onClick={this.handleClick}>-1</button>
//                 <button value={-10} onClick={this.handleClick}>-10</button>
//             </>
            
//          </div>)
//     }
// }
export  const Counter = ({likes,countLikes}) => {

        const handleClick = (event) =>{
            countLikes(+event.target.value)
        }
        
        return(<div className="likes">
                <> 
                    <div className="likes-controls-wrp">
                        <button className="plus-btn" value={10} onClick={handleClick}>+10</button>
                        <button className="plus-btn" value={1} onClick={handleClick}>+1</button>
                    </div>
                    <strong className="likes">{likes}</strong>
                    <div className="likes-controls-wrp">
                        <button value={-1} onClick={handleClick}>-1</button>
                        <button value={-10} onClick={handleClick}>-10</button>
                    </div>
                </>
                
             </div>)
        
    }

Counter.propTypes ={
    likes : PropTypes.number.isRequired,
    countLikes : PropTypes.func.isRequired,
}