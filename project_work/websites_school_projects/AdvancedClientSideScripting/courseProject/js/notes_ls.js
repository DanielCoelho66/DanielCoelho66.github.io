note_list.prototype.setAttributes = function() {
    this.list = (this.options.list) ? this.options.list : 'section#notes';
    this.item = (this.options.item) ? this.options.item : 'section.note';
    this.form = (this.options.form) ? this.options.form : this.list + '> form';
    this.inputName = (this.options.inputName) ? this.options.inputName : 'note';
    this.storageName = (this.options.storageName) ? this.options.storageName : 'notes';

    this.noteList = {};
    this.html = '';
    this_note = this;
}

note_list.prototype.getList = function() {
    var storedNote = (localStorage[this.storageName]) ? JSON.parse(localStorage[this.storageName]) : undefined;

    if (storedNote) {
        this.noteList = {};
        for (var id in storedNote) {

            var item = storedNote[id];

            this.noteList[id] = new notes(item);
        }
    }
}

note_list.prototype.saveList = function() {
    localStorage[this.storageName] = JSON.stringify(this.noteList);
}

//local storage for adding a new note/task
note_list.prototype.addNote = function(note) {
    if (note === undefined) {
        return false;
    }

    var item = new notes(note);

    this.noteList[item.id] = item;

    this.saveList();

    this.draw();
}

// local storage for saving the changes of an edit
/*note_list.prototype.saveChanges = function(note) {
 if (note === undefined) {
 return false;
 }
 
 this.saveList();
 
 this.draw();
 }
 // local storage for saving a completed task
 note_list.prototype.completeTask = function(note) {
 if (note === undefined) {
 return false;
 }
 this.noteList[note_id];
 
 this.saveList();
 
 this.draw();
 }*/

//local storage for saving a deleted note/task
note_list.prototype.deleteNote = function(note_id) {
    if (note_id === undefined) {
        return false;
    }

    delete this.noteList[note_id];

    this.saveList();

    this.draw();
}

note_list.prototype.draw = function() {
    this.empty();

    this.getList();

    for (var id in this.noteList) {

        var item = this.noteList[id];

        this.drawItem(item);
    }
    $(this.list).append(this.html);
}




















