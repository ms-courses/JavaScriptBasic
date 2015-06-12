var global = 10;

(function() {
  var local = 10;
  console.log('BOM script');
  console.log('Window', window);
  console.log('Navigator', window.navigator);
  console.log('Location', window.location);
  console.log('Location', window.history);
  console.log('Location', window.screen);
  function fcall(str) {
    console.log('fcall', str);
  }
  var id1=setTimeout(fcall,3000,'setTimeout');
  //clearTimeout(id1);
  setInterval(fcall,3000,'setInterval');
})();


