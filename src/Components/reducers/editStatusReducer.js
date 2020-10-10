const editStatus = true;
const editStatusReducer = (state = editStatus, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
      return !state;
    default:
      return state;
  }
}

export default editStatusReducer;