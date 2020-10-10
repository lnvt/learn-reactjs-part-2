import React, { Component } from 'react';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';
//import { noteData } from './firebaseConnect';
class AppFirebase extends Component {

    showForm  = () => {
        if(this.props.isEditForm)
        {
            return <NoteForm />
        }
    }

    //--------------------------REACT----------------------
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    // addData  = (item) => {
    //     noteData.push(item);
    // }

    render() {
        //--------------------------REACT----------------------
        //In ra du lieu xem da ket noi thanh cong voi firebase chua?
        // noteData.once('value').then(function(snapshot){
        //     console.log(snapshot.val());
        // });
        return (
            <div>
                <Nav />
                <AlertInfo/>
                <div className="container">
                    <div className="row">
                        <NoteList />
                        {/* <NoteForm getData ={(item) => {this.addData(item)}}/>  REACT*/}
                        {
                            this.showForm()
                        }
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
export default connect(mapStateToProps)(AppFirebase)