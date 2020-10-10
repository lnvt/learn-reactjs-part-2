import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteItem extends Component {

    twoActionButton  = () => {
        this.props.changeEditStatus(); //action 1
        //Hàm lấy nội dung truyền vào trong store để upload dữ liệu -- action 2
        //console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }
    deleteData  = () => {
        //console.log(this.props.note.id);
        this.props.getDeleteData(this.props.note.id);
        this.props.alertOn('Xoá ghi chú "'+ this.props.note.noteTitle +'" thành công',"danger")
    }

    render() {
        //console.log(this.props.isEditForm)
        return (
            <div>
                <div className="card">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.id} aria-expanded="true" aria-controls="section1ContentId">
                                {this.props.noteTitle}
                            </a>
                        <div className="btn-group float-right">
                            <button type="button" className="btn btn-outline-warning" 
                                    onClick={() => this.twoActionButton()}>Edit</button>
                            <button type="button" className="btn btn-outline-danger"
                                    onClick={() => this.deleteData()}>Delete</button>
                        </div>
                        </h5>
                    </div>
                    <div id={"number" + this.props.id}  className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                            {this.props.noteContent}
              </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEditForm: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type:"GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deletedID) => {
            dispatch({
                type:"DELETE",
                deletedID
            })
        },
        alertOn: (alertContent,AlertType) => {
            dispatch({
                type:"ALERT_ON",alertContent,AlertType
            })
        },
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}
//conn
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)