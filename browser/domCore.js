(function() {
  console.log('Document', window.document);

  console.log('Document', window.document.documentElement);
  console.log('Node name', window.document.documentElement.nodeName);
  console.log('Node type', window.document.documentElement.nodeType);
  console.log('Node value', window.document.documentElement.nodeValue);
  console.log('Node childNode', window.document.documentElement.childNodes);
  console.log('Node hasChildNodes', window.document.documentElement.hasChildNodes());
  console.log('Tag name', window.document.documentElement.tagName);
  //Attributes
  var h1= window.document.documentElement.children[1].children[0];
  console.log('h1', h1.atributes);
  h1.setAttribute('style','color: red');

  var p=root.getElementsByTagName('p');

  var el = document.getElementById('divid1');
  console.log(el.nextSibling);
  console.log(el.previousSibling);
  el.innerHTML="dsaa";
  el.style.border="1px solid red";
  console.log(el.id);

  var elp=document.createElement('p');
  var textNode=document.createTextNode('New element');
  elp.appendChild(textNode);
  el.appendChild(elp);

  el.appendChild(p[0].cloneNode(true));

  var p1 = p[0].cloneNode(true);
  el.insertBefore(p1);
  var span=document.createElement('span');
  span.innerHTML="New";
  el.insertBefore(span,p1);

  document.body.removeChild(p);

  /*  var el = document.getElementById('divid1');
   document.body.removeChild(p);
   */

})()