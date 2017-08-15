import React from 'react'
import ReactDOM from 'react-dom'
import NotesService from './NotesService/NotesServiceRest'
import NotesApp from './NotesApp'


ReactDOM.render(
    <NotesApp notesService={NotesService} />,
    document.getElementById('root')
);