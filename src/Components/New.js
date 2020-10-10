import React, { Component } from 'react';
import { connect } from 'react-redux';

class New extends Component {
    render() {
        return (
            <div>
                <h2>Day la Component News</h2>
                <button onClick={() => { this.props.userEditStatusInStore() }}>CLICK DI</button>
            </div>
        );
    }
}

//---------------------------------------------------- Cách 1:
//Function call reducer of Store
// userEditStatusInStore  = () => {
//     var {dispatch} = this.props;
//     dispatch({ type: "CHANGE_EDIT_STATUS" })
// }
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

//---------------------------------------------------- Cách 2:
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userEditStatusInStore: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(New)