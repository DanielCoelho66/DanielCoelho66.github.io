function note_list(options) {
    this.options = (options === undefined) ? {} : options;

    this.setAttributes();

    $(this.ready);
}

note_list.prototype.setAttributes = function() {
    this.list = (this.options.list) ? this.options.list : 'section#notes';
    this.item = (this.options.item) ? this.options.item : 'section.note';
    this.inputName = (this.options.inputName) ? this.options.inputName : 'note';
    this.loginSection = (this.options.loginSection) ? this.options.loginSection : '#login';
    this.logoutSection = (this.options.logoutSection) ? this.options.logoutSection : '#logout';

    that = this;
    this.noteList = {};
    this.html = '';
    this_note = this;
}

note_list.prototype.draw = function() {
    this.empty();
    for (var id in this.noteList) {
        var item = this.noteList[id];
        this.drawItem(item);
    }
    $(this.list).append(this.html);
}

note_list.prototype.drawItem = function(note) {
    if (note === undefined) {
        return;
    }

    this.html += note.toHTML();
}

note_list.prototype.addNote = function(note) {
    if (note === undefined) {
        return false;
    }

    var item = new notes(note);

    this.noteList[item.id] = item;

    this.draw();
}

note_list.prototype.saveChanges = function(note) {
    if (note === undefined) {
        return false;
    }

    var item = new notes(note);

    this.noteList[item.id] = item;

    this.draw();
}

note_list.prototype.completeTask = function(note) {
    if (note === undefined) {
        return false;
    }

    this.noteList[note_id];

    this.draw();
}

note_list.prototype.deleteNote = function(note_id) {
    if (note_id === undefined) {
        return false;
    }
    delete this.noteList[note_id];

    this.draw();
}

note_list.prototype.empty = function() {

    $(this.list + ' > ' + this.item).remove();

    this.html = '';
}

note_list.prototype.ready = function() {
    if (jQuery.fn.validate) {
        rules = {};
        rules[this_note.inputName] = 'required';
        messages = {};
        messages[this_note.inputName] = "You can't enter a blank to do item!";

        $(this_note.form).validate({
            rules: rules,
            messages: messages,
            errorPlacement: function(error, element) {
                error.appendTo(element.parent())
            },
            //add task
            submitHandler: function() {
                var input = $(this.currentForm).find('textarea[name="' + this_note.inputName + '"]');
                var note_name = input.val();

                if (note_name) {
                    this_note.addNote({name: note_name});
                }

                input.val('');
                $(this.currentForm).validate().reset();
            }
        });
    }

    // remove task 
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

    // edit - finding what the user has entered and putting it into an input field
    $(this_note.list).on('click', this_note.item + '> a.edit_item', function(e) {
        e.preventDefault();
        var task = $(this).closest('section').find('p');
        var task_text = task.text();
        console.log(task_text);
        task.html('<input type="text" name="edit_todo" class="textEdit" value="' + task_text + '">');

    });

    // save changes - finding the input field and saving what was entered		
    $(this_note.list).on('blur', 'input[name="edit_todo"]', function(e) {
        e.preventDefault();
        var newTaskText = ($('input[name="edit_todo"]').val());
        var NewTask = $('input[name="edit_todo"]');
        NewTask.replaceWith('<section>' + '<p>' + newTaskText + '</p>' + '</section>');
    });

    //complete task
    $(this_note.list).on('click', 'a.complete_item', function(e) {
        e.preventDefault();
        $(this).closest('section').find('p').addClass("complete");
    });


    this_note.draw();
}

// Log in/out functions  -- start
note_list.prototype.loginForm = function(action) {
    if (!action) {
        action = 'show';
    }

    if (action == 'show') {
        that.addLoginForm();
    }

    var login_form = $(that.loginSection);
    if (login_form) {
        login_form.find('.error').remove();

        if (action == 'hide') {
            login_form.hide();
        } else {
            login_form.show();
        }
    }
};

note_list.prototype.addLoginForm = function() {
    if ($(that.loginSection).length > 0) {
        return;
    }

    var loginId = that.loginSection.replace('#', '');
    var loginFormHTML = '<section id="' + loginId + '">' +
            '<form action="login.php" method="post">' +
            '<label for="loginUser">Username: </label>' +
            '<input type="text" id="loginUser" name="loginUser" value="" placeholder="Enter your username" />' +
            '<label for="loginPass">Password: </label>' +
            '<input type="password" id="loginPass" name="loginPass" value="" placeholder="Enter your password" />' +
            '<input type="submit" name="login" value="Login" />' +
            '</form>' +
            '</section>';

    $(loginFormHTML).prependTo('body > div#page > nav')
            .find('form:first').on('submit', that.Login);

};

note_list.prototype.Login = function(e) {
    e.preventDefault();

    var params = $(this).serialize();

    $.ajax({
        url: 'login.php',
        type: 'post',
        dataType: 'json',
        data: params,
        success: that.LoginSuccess,
        error: that.LoginFailure
    })
};

note_list.prototype.LoginSuccess = function(result) {
    var login_form = $(that.loginSection);
    if (login_form) {
        login_form.find('.error').remove();
        login_form.find('[name="loginUser"]').val('');
        login_form.find('[name="loginPass"]').val('');
    }
    that.showLoginLogout();
};

note_list.prototype.LoginFailure = function(x, status, code) {
    var response = JSON.parse(x.responseText);

    if (response && response.errors) {
        var login_form = $(that.loginForm);

        if (login_form) {

            login_form.find('.error').remove();

            if (response.errors.login_user) {
                login_form.find('[name="loginUser"]').after('<span class="error">' + response.errors.login_user + '</span>');
            }
            if (response.errors.login_pass) {
                login_form.find('[name="loginPass"]').after('<span class="error">' + response.errors.login_pass + '</span>');
            }
        }
    }
}

note_list.prototype.logoutLink = function(action) {
    if (!action) {
        action = 'show';
    }

    if (action == 'show') {
        that.addLogoutLink();
    }

    var logout_section = $(that.logoutSection);

    if (logout_section) {
        if (action == 'hide') {
            logout_section.hide();
        } else {
            logout_section.show();
        }
    }
}

note_list.prototype.addLogoutLink = function() {
    if ($(that.logoutSection).length > 0) {
        return;
    }

    var logoutId = that.logoutSection.replace('#', '');
    var logoutHTML = '<section id="' + logoutId + '">' +
            '<a href="#">Log Out</a>' +
            '</section>';

    $(logoutHTML).prependTo('body > div#page > nav')
            .find('a:first').on('click', that.Logout);
}

note_list.prototype.Logout = function(e) {
    e.preventDefault(); 
    $.ajax({
        url: 'login.php',
        type: 'delete',
        dataType: 'json',
        success: function(result) {
            that.showLoginLogout();
        }
    })
}
// Log in/out functions  -- end


function notes(options) {
    this.options = (options === undefined) ? {} : options;

    this.setAttributes();
}

notes.prototype.setAttributes = function() {
    this.id = (this.options.id) ? this.options.id : +new Date;
    this.name = (this.options.name) ? this.options.name : 'New Note';
    this.note_class = (this.options.note_class) ? this.options.note_class : 'note';
    this.remove = '<a href="#" title="Delete this item from your list" class="remove_item">X</a>';
    this.edit = '<a href="#" title="Edit this item in your list" class="edit_item">EDIT</a>';
    this.complete = '<a href="#" title="Check this item off as complete"class="complete_item">&#x2713;</a>';
}

notes.prototype.toHTML = function() {
    return '<section class="' + this.note_class + '" id="item' + this.id + '">' + '<p>' + this.name + '</p>' + this.edit + this.remove + this.complete + '</section>';
}




