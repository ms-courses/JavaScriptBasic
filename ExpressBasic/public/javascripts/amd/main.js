requirejs.config({
    baseUrl: 'javascripts/amd/lib',
    paths: {
      modules: '../modules'
    }
  }
);
//methoda main
requirejs(['modules/addperson',
  'modules/listperson', 'jquery'],
  function(addPerson, listPerson, jq){
  console.log('Main js', addPerson, listPerson, jq);
});
