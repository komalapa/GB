import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components import
import {ChatList} from '../components/chatList/chatList'

//end components import
import {addChat, deleteChat} from '../store/chatActions'



const mapStateToProps = (store,props) =>{
    const path = props.history.location.pathname.split('/') 
    const selectedChatId = +path[path.length-1]//Подсветка активного чата пока нерешаемо. Компонент не знает свой адрес. Вытаскивать из window не хорошо
    //console.log (store.chats.error)   
    // if (!(store.chats.isLoadingChats||store.chats.error)){
    //     console.log(store.chats.isLoading,store.chats.error)
    // }
    const chats =!(store.chats.isLoadingChats||store.chats.error)? Object.entries(store.chats.chats).map(([id,{name, isHighlighted}])=>({id, name, isHighlighted})):[]
    //console.log(chats)
    return {
        chats,
        selectedChatId, 
        isLoading : store.chats.isLoadingChats,
        error : store.chats.error, 
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ addChat, deleteChat},dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    
    const onCreateChat=(id, name) =>{
        
        dispatchProps.addChat(id, name)
        
    }
    const onDeleteChat=(id) =>{
        
        dispatchProps.deleteChat(id)
        
    }

    return{
        ...stateProps,
        // ...dispatchProps,
        // ...ownProps,
        onCreateChat,
        onDeleteChat,
    }
}

export default connect (mapStateToProps,mapDispatchToProps, mergeProps)(ChatList)