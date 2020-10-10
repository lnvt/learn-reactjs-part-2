import React, { Component } from 'react';
import { noteData } from '../firebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase:[]
        }
    }
    
    // cwm: duoc thuc hien truoc khi render
    componentWillMount() {
        noteData.on('value', (notes) => {
            var arrData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                //console.log(key);
                arrData.push({
                    id:key,
                    noteTitle: noteTitle,
                    noteContent:noteContent
                })
            });
            this.setState({
                dataFirebase: arrData
            });
            //console.log(notes.val());
        })
    }
    
    //Lay du lieu tu firebase
    //Du lieu firebase tra ve la mot doi tuong nen convert sang mang
    getData  = () => {
        if(this.state.dataFirebase)
        {
            return this.state.dataFirebase.map((value,key) => {
                //console.log(value.id)
                return <NoteItem 
                        key = {key} 
                        id = {key}
                        note = {value} // Lấy luôn nguyên giá trị
                        noteTitle = {value.noteTitle}
                        noteContent = {value.noteContent}/>
            })
        }
       
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;