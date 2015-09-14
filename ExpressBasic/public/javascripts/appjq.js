$(document).ready(function(){
  //console.clear();
  $('#erFn').hide();
  $('#erLn').hide();
  var table = $('#tableData');
  function addPerson(person) {
    $('<tr><td>' +person.fn +'</td>' +
    '<td>' + person.ln+'</td></tr>')
      .appendTo('#tableData');

  }
  $('#load').click(function() {
    $('#divLoad').load('api/list');
    table.children().remove();
    //$('tbody').empty('tr');

    $.getJSON('api/list', function(data) {
      for (var i in data) {
        addPerson(data[i])
      }
    })
  });

  $('#save').click(function(){
    var fn=$('#inFn').val();
    var ln=$('#inLn').val();
    var error = false;
    if (!fn) {
      error = true;
      $('#erFn').show();
    } else {
      $('#erFn').hide();
    }
    if (!ln) {
      error = true;
      $('#erLn').show();
    } else {
      $('#erLn').hide();
    }
    if (error) {
      return;
    }

    var person = {fn:fn,ln:ln};
    $.post('api/add',person, function() {
      console.log('dads');
    });
    addPerson(person);

  });
})
