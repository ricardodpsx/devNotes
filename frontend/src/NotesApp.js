import React from 'react'
import NoteEditor from './NoteEditor'
import Notes from './Notes'


class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.notesService = this.props.notesService;
        this.state = {
            newNote: NoteEditor.defaultProps.data,
            notes: Notes.defaultProps.notes
        }
    }

    componentDidMount() {
        this.updateNotes();
    }

    updateNotes(that) {
        var that = this;
        this.notesService.list(function (notes) {
            that.setState(function (prevState) {
                let copyOfNotes = prevState.notes.slice();
                notes.forEach(function (note) {
                    copyOfNotes.push({key: note.id, text: note.text, id: note.id});
                });
                return {notes: copyOfNotes};
            });
        });
    }

    handleNewNoteChange(newNote) {
        this.setState({newNote});
    }

    handleOnSave(text) {

        var that = this;

        this.setState(function(prevState) {
            let copyOfNotes = prevState.notes.slice();

            var index = prevState.notes.length;
            var newNote = {key: "__NEW___" +  new Date().getTime(), text:text};
            copyOfNotes.push(newNote);


            that.notesService.save({text: newNote.text}, function(createdNote){
                that.setState(function(prevState) {
                    let copyOfNotes = prevState.notes.slice();
                    newNote.id = createdNote.id;
                    copyOfNotes[index] = newNote;
                    return {notes: copyOfNotes};
                });
            });


            return {notes: copyOfNotes};
        });

        this.setState({newNote: NoteEditor.defaultProps.data})
    }


    render() {
        return <div>
            <NoteEditor data={this.state.newNote} onChange={this.handleNewNoteChange.bind(this)} onSave={this.handleOnSave.bind(this)}/>
            <Notes notes={this.state.notes} />
        </div>

    }

}

export default NotesApp;