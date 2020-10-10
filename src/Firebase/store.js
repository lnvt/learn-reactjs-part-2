import { noteData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false,
    alertShow:false,
    AlertContent:'',
    AlertType:'',
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            //console.log('Ket noi thanh cong voi AddData, bien nhan vao la: '+action.getItem);
            noteData.push(action.getItem);
            console.log("Add data: "+JSON.stringify(action.getItem)+" successed!")
            return state

        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit} 
            
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}    

        case "EDIT":
            //update len firebase
            //noteData.child()
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log('Da cap nhat du lieu '+JSON.stringify(action.getItem)+" thanh cong!");
            return {...state,editItem:{}}    
        
        case "DELETE":
            console.log(action.deletedID);
            noteData.child(action.deletedID).remove();
            //alert("Đã xoá phần tử có id là: "+action.deletedID);
            return state 

        case "CHANGE_TITLE_STATUS":
                return {...state,isAdd:!state.isAdd} 

        case "ALERT_ON":
                return {...state,alertShow:true,AlertContent:action.alertContent,AlertType: action.AlertType}  

        case "ALERT_OFF":
                return {...state,alertShow:false}  

        default:
            return state
    }
}
var store = redux.createStore(allReducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})
export default store;