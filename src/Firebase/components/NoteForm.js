import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id:''
        }
    }

    printTitle  = () => {
        if(this.props.changeStatusTitle)
        {
            return <h4>THÊM MỚI</h4>
        }
        else{
            return <h4>SỬA NỘI DUNG</h4>
        }
    }

    componentWillMount() {
        if(this.props.editItem){ //edit case
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id:this.props.editItem.id
            });
        }
    }
    

    addData  = (title,content) => {
        if(this.state.id){ //edit case
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            
            this.props.editDataStore(editObject);
            this.props.changeEditStatus(); //tat Form
            this.props.alertOn("Sửa thành công","warning");
        }
        else
        {
        var item  = {};
        item.noteTitle = title;
        item.noteContent = content;
        // console.log(item)
        // //gui item len tren app, de ma app xu li
        // this.props.getData(item);
        // alert("Add data: "+JSON.stringify(item)+" successed!")

        //Sử dụng reducer được truyền vào để sử dụng STORE: dispatch ADD_DATA và cách truyền tham số vào store
        //item = JSON.stringify(item);
        this.props.addDataInStore(item)// mapDispatchToProps

        this.props.alertOn("Thêm mới thành công","success");
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        this.setState({
            [name]: value
        });
    }
    render() {
        //console.log(this.props.editItem)
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="notetitle">Tiêu đề NOTE</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => { this.isChange(event) }} name="noteTitle" type="text" className="form-control" placeholder="Tiêu đề NOTE" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notetitle">Nội dung CONTENT</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => { this.isChange(event) }} name="noteContent" type="text" className="form-control" placeholder="Nội dung NOTE"/>
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick = { () => {this.addData(this.state.noteTitle, this.state.noteContent)} } className="btn btn-success btn-block">SAVE</button>
                </form>
            </div>

        );
    }
}

//Buoc 1: ket noi voi Store. Nhan duoc: this.state.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem:state.editItem,
        changeStatusTitle:state.isAdd
    }
}

//Buoc 2: ket noi voi Store. Nhan duoc: this.props.addDataInStore()
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataInStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        alertOn: (alertContent,AlertType) => {
            dispatch({
                type:"ALERT_ON",alertContent, AlertType
            })
        },
        alertOff: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        }
    }
}

//Buoc 3: Connect vao export
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

