import axios from 'axios'
import NotesService from "./NotesService";

const NOTES_URL = 'http://localhost:8080/api/note';

class NotesServiceRest extends NotesService {
    list(cb = () => {}) {
        axios.get(NOTES_URL).then(function(response){
            console.info(response);
            cb(response.data);
        });
    }
    save(newNote, cb = () => {}) {
        axios.post(NOTES_URL, newNote).then(function(response) {
            cb(response.data);
        });
    }
}


var  notesService = new NotesServiceRest();

export default notesService;
