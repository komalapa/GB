import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components import
import {ChatList} from '../components/chatList/chatList'

//end components import
import {sendMessage,likeMessage,addChat} from '../store/chatActions'



const mapStateToProps = (store,props) =>{
    // const chats=[]
    // for (let item in store.chats){
    //     //console.log(item)
    //     chats.push({id: item, name:store.chats[item].name})
    // }
    const chats = Object.entries(store.chats).map(([id,{name}])=>({id, name}));
    return {
        chats  
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({sendMessage, likeMessage, addChat},dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
    const onCreateChat=(id, name) =>{
        
        dispatchProps.addChat(id, name)
        
    }

    return{
        ...stateProps,
        // ...dispatchProps,
        // ...ownProps,
        onCreateChat,
    }
}

export default connect (mapStateToProps,mapDispatchToProps, mergeProps)(ChatList)