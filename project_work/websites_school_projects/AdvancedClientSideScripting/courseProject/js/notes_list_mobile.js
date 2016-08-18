notes.prototype.toHTML = function() {
    return '<section class="' + this.note_class + '" id="item' + this.id + '">' + '<p>' + this.name + '</p>' + this.edit + this.remove + this.complete + '</section>';
}

note_list.prototype.ready = function() {
    this_note.draw();

    $(this_note.list).on('click', 'a.complete_item', function(e) {
        e.preventDefault();
        $(this).closest('section').find('p').addClass("complete");
    });

    $(this_note.list).on('click', this_note.item + '> a.edit_item', function(e) {
        e.preventDefault();
        var task = $(this).closest('section').find('p');
        var task_text = task.text();
        console.log(task_text);
        task.html('<input type="text" name="edit_todo" class="textEdit" value="' + task_text + '">');

    });

    $(this_note.list).on('blur', 'input[name="edit_todo"]', function(e) {
        e.preventDefault();
        var newTaskText = ($('input[name="edit_todo"]').val());
        var NewTask = $('input[name="edit_todo"]');
        NewTask.replaceWith('<section>' + '<p>' + newTaskText + '</p>' + '</section>');
    });

    $(this_note.list).on('click', this_note.item + '> a.remove_item', function(e) {
        e.preventDefault();

        var note = $(this).parent();

        if (note) {
            var id = parseInt(note.attr('id').replace('item', ''));

            if (id) {
                this_note.deleteNote(id);
            }
        }
    });

    $('#add_note').on('click', '#add_to_list', function(e) {
        e.preventDefault();
        $(this).closest('form').submit();
    })
            .on('submit', this_note.handleAddSubmit);
}

note_list.prototype.handleAddSubmit = function(e) {
    e.preventDefault();
    var input = $(this).find('textarea[name="' + this_note.inputName + '"]');
    var note_name = input.val();

    if (note_name) {
        this_note.addNote({name: note_name});
    }

    input.val('');
}
