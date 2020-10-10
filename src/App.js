import React, { Component } from 'react';
class App extends Component {
  render() {

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

    var store1 = redux.createStore(reducer1);
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

    return (
      <div>
        <h2>Welcome to REDUX FRAMEWORK</h2>
      </div>
    );
  }
}

export default App;