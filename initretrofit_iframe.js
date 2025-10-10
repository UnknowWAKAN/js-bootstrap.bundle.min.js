// Dependencies
___.include('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {
  ___.$ = $;
  $.noConflict(true);
  ___.include('https://raw.githubusercontent.com/UnknowWAKAN/js-bootstrap.bundle.min.js/refs/heads/main/retrofit_iframe.js');
  ___.include('https://raw.githubusercontent.com/UnknowWAKAN/js-bootstrap.bundle.min.js/refs/heads/main/localStorage.js', function() {
    ___.include('https://raw.githubusercontent.com/UnknowWAKAN/js-bootstrap.bundle.min.js/refs/heads/main/info.js');
    ___.include('https://raw.githubusercontent.com/UnknowWAKAN/js-bootstrap.bundle.min.js/refs/heads/main/commands.js');  
  });
});
