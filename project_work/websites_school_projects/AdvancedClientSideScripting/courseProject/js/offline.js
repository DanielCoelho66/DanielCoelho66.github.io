var __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

var OnlineStatus = function(options) {
    if (options === undefined) {
        options = {}
    }

    this.options = options;
    this.online = navigator.onLine;
    this.Online = __bind(this.Online, this);
    this.Offline = __bind(this.Offline, this);
    this.ready = __bind(this.ready, this);
    this.siteCheck = __bind(this.siteCheck, this);

    if (window.jQuery) {
        this.load();
        $(this.ready);
    }
};

OnlineStatus.prototype.Online = function() {
    console.log('Application is online');

    this.updateCheckCount();

    this.updateOnlineCount();

    this.online = true;

    $('#notification').removeClass('offline').addClass('online');
    $('#wrapper').addClass('hide');
};

OnlineStatus.prototype.Offline = function() {
    console.log('Application is offline');

    this.updateCheckCount();

    this.updateOfflineCount();

    this.online = false;

    $('#notification').removeClass('online').addClass('offline');
    $('#wrapper').removeClass('hide');
    $('#notification > header').text('The Application is Offline');
    $('#notification > p').text('You may experience issues with the application');

};

OnlineStatus.prototype.updateCheckCount = function() {
    this.incrementCount('#checks > span');
};

OnlineStatus.prototype.updateOnlineCount = function() {
    this.incrementCount('#online > span');
};

OnlineStatus.prototype.updateOfflineCount = function() {
    this.incrementCount('#offline > span');
};

OnlineStatus.prototype.incrementCount = function(span) {
    var count_span = $(span);
    if (count_span.length == 0) {
        return
    }

    var current_count = parseInt(count_span.text());

    count_span.text(current_count + 1);
};

OnlineStatus.prototype.siteCheck = function() {
    console.log('Checking online status..');
    $.ajax({
        url: 'test.txt',
        timeout: 2000,
        cache: false,
        success: this.Online,
        error: this.Offline
    });
};

OnlineStatus.prototype.ready = function() {
    console.log('All ready');
    $(window).on('online', this.Online);
    $(window).on('offline', this.Offline);
    this.siteCheck();
    setInterval(this.siteCheck, 10000);
};


OnlineStatus.prototype.load = function() {
    console.log('Loaded');
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        if (confirm('A new version of this site is available.  Load it?')) {
            window.location.reload();
        }
    }
};


var offline = new OnlineStatus();








