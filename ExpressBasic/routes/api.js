var express = require('express');
var router = express.Router();
var people = [{fn:'Mire', ln: 'Mirek'}];
/* /api/list */
router.get('/list', function(req, res, next) {
  //res.send('respond /api/list ok');
  res.json(people);
});

///api/add
router.post('/add', function(req, res, next) {
  console.log(req.body);
  people.push(req.body);
  //res.send('respond /api/list ok');
  res.status(200);
});


module.exports = router;

