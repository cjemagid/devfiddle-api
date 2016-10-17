const express = require('express');
var router = express.Router();


const package = require('../../package.json');
const code_svc = require('../services/codeService');


/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).send({
    env : process.env.NODE_ENV, 
    version : package.version,
    timestamp: new Date(),
    
  });
});


router.get('/:app/:id', function(req, res, next) {
  code_svc.get(req.params).then(app => {
    res.status(200).json(app);
  }).catch(err => {
    res.status(500).json(err);
  })
});



router.put('/:app', (req,res,next) => {
  req.body.app = req.params.app; 
  
  code_svc.save(req.body).then(app => {
    res.status(200).json(app);
  }).catch(err => {
    res.status(500).json(err);
  })
})

module.exports = router;
