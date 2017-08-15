import React from 'react'

class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    handleKeyDown(event) {
        if(event.keyCode == 13)
            this.props.onSave(this.props.data.text);
    }
    handleOnChange(event) {
        this.props.onChange({text: event.target.value});
    }

    render() {
        return <input type="text" placeholder="...type a new note" value={this.props.data.text} onChange={this.handleOnChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} />
    }
}

NoteEditor.defaultProps = {
    data: {text: ""}
};

export default NoteEditor;
