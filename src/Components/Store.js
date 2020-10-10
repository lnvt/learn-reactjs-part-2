import editStatusReducer from './reducers/editStatusReducer';
import numReducer from './reducers/numReducer';
var redux = require('redux');
var oldState = {
  num: ["JS", "REACT", "REDUX"],
  editStatus: true
}
var reducer1 = (state = oldState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS": // name action
      return { ...state, editStatus: !state.editStatus } // reducer
      break;

    case "ADD_NEW": // name action
      return {...state,num:[...state.num,action.newItem]} // reducer, add auto value in reducer can change name
      break;
     
    case "DELETE_ITEM": // name action
      return {...state,num:state.num.filter((value,i) => i !== action.number)} // reducer, add auto value in reducer can change name
      break;  

    default:
      return state;
      break;
  }
  
}




//combineReducers: Kết hợp giữa editStatusReducer & numReducer
const allReducers = redux.combineReducers({
  num:numReducer,
  editStatus:editStatusReducer
})

var store1 = redux.createStore(allReducers);
console.log(JSON.stringify(store1.getState()));
store1.subscribe(() => {
  console.log(JSON.stringify(store1.getState()));
})
store1.dispatch({ type: "CHANGE_EDIT_STATUS" }) // Execute codeline


store1.dispatch({
  type:"ADD_NEW",
  newItem:"HTML"
})


store1.dispatch({
  type:"DELETE_ITEM",
  number:2
})

  // data.once('value').then(function(snapshot){
  //     console.log(snapshot.value());
  // })
export default store1;