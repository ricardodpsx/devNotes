import React from 'react'


class Notes extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <section>
            {this.props.notes.map( (note)=>
                <article key={note.key} >{note.text} ({note.id ? "Saved" : "Unsaved"})</article>
            )}
        </section>

    }
}
Notes.defaultProps = {
    notes: []
};

export default Notes;
