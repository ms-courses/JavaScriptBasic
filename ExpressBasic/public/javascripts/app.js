(function() {

  window.addEventListener('load', function() {
    console.log('doc loaded');
    document.getElementById('save')
      .addEventListener('click', function() {
        var fn=document.getElementById('inFn');
        var ln=document.getElementById('inLn');
        console.log(fn.value);
        var data = {fn : fn.value, ln: ln.value};
        var xhr = new XMLHttpRequest();
        //xhr.onreadystatechange = reqProc;
        xhr.open('POST','api/add', true);
        xhr.setRequestHeader('Content-type',
          'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));


      });

    document.getElementById('load')
      .addEventListener('click',function() {

        var xhr = new XMLHttpRequest();

        function reqProc() {
          if (xhr.readyState==4) {
            var data = JSON.parse(xhr.responseText);
            var table=document.getElementById('tableData');
            table.innerHTML='';

            for (var i in data) {
              var tr=document.createElement('tr');
              var tdfn = document.createElement('td');
              var tdln = document.createElement('td');
              tdfn.innerHTML = data[i].fn;
              tdln.innerHTML = data[i].ln;

              tr.appendChild(tdfn);
              tr.appendChild(tdln);
              table.appendChild(tr);
              console.log('AJAX', data[i]);
            }

          }
        };
        xhr.onreadystatechange = reqProc;
        xhr.open('GET','api/list', true);
        xhr.send('');
      })
  });

})();