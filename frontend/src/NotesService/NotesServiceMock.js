import NotesService from "./NotesService";

class NotesServiceMock extends NotesService {
    constructor() {
        this.notes = [
            {id:1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non justo eu nisi fringilla varius. Cras sit amet est massa. Vestibulum blandit et diam a fermentum."},
            {id: 2, text: "Duis bibendum a dolor ac elementum. In eleifend interdum nisl luctus varius. Donec feugiat ultricies iaculis. Morbi sodales ultrices mauris eget volutpat."},
            {id: 3, text: "Proin malesuada dui nec odio consectetur, in accumsan augue commodo. Integer vitae gravida velit. In lorem nibh, auctor eu odio sit amet, efficitur feugiat libero."},
            {id: 4, text: "Mauris vestibulum sapien justo, a finibus nisi fringilla quis. Ut ultricies ante vel leo fringilla finibus. In in velit vulputate, tincidunt odio sed, porta lacus. Etiam orci lorem, efficitur at venenatis quis, tincidunt et tellus."}
        ]
    }
    list(cb) {
        var notes = this.notes.slice();
        setTimeout(function() {
            cb(notes);
        }, 2000);
    }

    save(newNote) {
        var that = this;
        setTimeout(function() {
            that.notes.push({id: that.notes.length + 1, text: newNote.text});
        }, 200);
    }

}

var  notesService = new NotesServiceMock();

export default notesService;