var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bom', function(req, res, next) {
  res.render('bom', { title: 'BOM' });
});

router.get('/dom', function(req, res, next) {
  res.render('dom', { title: 'DOM' });
});

router.get('/app', function(req, res, next) {
  res.render('app', { title: 'DOM' });
});

router.get('/jq', function(req, res, next) {
  res.render('jq', { title: 'DOM' });
});

router.get('/amd', function(req, res, next) {
  res.render('amd', { title: 'DOM' });
});

router.get('/brow', function(req, res, next) {
  res.render('brow', { title: 'DOM' });
});

module.exports = router;
