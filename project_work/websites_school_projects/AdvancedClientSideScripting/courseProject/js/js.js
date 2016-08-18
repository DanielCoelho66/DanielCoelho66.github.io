function ModernizrLoad() {
    // if modernizr and jquery are loaded load in these files.
    Modernizr.load(['js/jquery.validate.min.js', 'js/notes_list.js']);

    if (Modernizr.localstorage) {
        // if local storage is available load the local storage file
        Modernizr.load('js/notes_ls.js');
    }
    Modernizr.load('js/notes.js');

    if (screen.width <= 568) {
        //  load mobile version
        window.location.href = 'mobile.html';
    }

}

if (Modernizr) {
    Modernizr.load([
        {
            // if modernizr is loaded get the jquery library
            load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
            complete: function() {
                if (window.jQuery) {
                    // if jquery is loaded do the ModernizrLoad function
                    // Load the js file for when the app goes offline
                    Modernizr.load('js/offline.js');
                    ModernizrLoad();
                }
            }
        }
    ]);
}
