(function() {

  window.addEventListener('load', function() {
    console.log('doc loaded');
    var table=document.getElementById('tbodyId');
    console.log(table.children);

    function list() {
      var xhr=new XMLHttpRequest();
      function processRequest(xrr) {
        if (xhr.readyState==4) {
          var data = JSON.parse(xhr.responseText);
          for (var i in data) {
            console.log(data[i]);dele

            var tr=document.createElement('tr');
            var tdfn=document.createElement('td');
            var tdln=document.createElement('td');
            tdfn.innerHTML="a";
            tdln.innerHTML="b";
            tr.appendChild(tdfn);
            tr.appendChild(tdln);
            tdfn.innerHTML=data[i].fn;
            tdln.innerHTML=data[i].ln;
            table.appendChild(tr);

          }

        } else {
          console.log(xhr.readyState);
        }
      }
      xhr.onreadystatechange = processRequest;
      xhr.open('GET', 'api/list', true);
      xhr.send('');

    }

    function add(person) {
      var xhr=new XMLHttpRequest();
      function processRequest(xrr) {
        if (xhr.readyState==4) {
          console.log(xhr.status);
        } else {
          console.log(xhr.readyState);
        }
      }
      xhr.onreadystatechange = processRequest;
      xhr.open('POST', 'api/add', true);
      xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

      var o = {'ala': 'ala'};
      xhr.send(JSON.stringify(person));

    }

    document.getElementById('save').addEventListener('click', function() {
      var fn=document.getElementById('inFn').value;  //HTMLInputElement
      var ln=document.getElementById('inLn').value;
      var person = {'fn': fn, 'ln': ln};
      //send it to server
      console.log("save",fn,ln);
      add(person);
    }, false);
    list();

  });

})();