

const numInitialState = ["JS", "REACT", "REDUX"];
const numReducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW": // name action
      return [...state,action.newItem] // reducer, add auto value in reducer can change name
     
    case "DELETE_ITEM": // name action
      return [state.filter((value,i) => i !== action.number)] // reducer, add auto value in reducer can change name

    default:
      return state
  }
}
export default numReducer;