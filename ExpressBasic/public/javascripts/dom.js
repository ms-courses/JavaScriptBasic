(function() {
  document.getElementById('pid')
    .addEventListener('click',function(event) {
      console.log('p clicked', event);
      event.stopPropagation();

    }, false);

  document.getElementById('divid1')
    .addEventListener('click',function(event) {
      console.log('div clicked', event);
    }, false);

  document.addEventListener('click', function(event) {
    console.log('document clicked', event);
  }, false);





})();