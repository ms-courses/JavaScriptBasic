(function() {
  var el=document.getElementById('divid1');
  el.addEventListener('click',function(event) {
    console.log('div clicked', event);
  }, false);
  document.addEventListener('click', function() {
    console.log('document clicked', event);
  });

  document.getElementById('save')
    .addEventListener('click', function(event) {
      console.log('Element clicked', event);

    });

  document.getElementById('fn')
    .addEventListener('keypress', function(event) {
      console.log('Keypress', event);

    })



})();