(function() {
    console.log('Nav', window.navigator);
    console.log('Location', window.location);
    console.log('History', window.history);
    console.log('History', window.screen);
    //alert('Hello');

    function f(title) {
      console.log('called ', title);
    }
    var timeoutID = setTimeout(f,10,'setTimeout');
    var intervalId = setInterval(f,1000,'setInterval after 1000ms');
})()