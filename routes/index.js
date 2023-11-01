var express = require('express');
var router = express.Router();
const Data=require('../model/movieModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/rg', function(req, res, next) {
  res.render('rg', { title: 'Express' });
});

router.post('/rg', async function(req, res, next) {
  try {
    const movie=new Data(req.body);
    await movie.save();
    res.redirect('/show');
  } catch (error) {
    res.send(error)
  }
  
});

router.get('/show', async function(req, res, next) {
  try {
    const b=await Data.find();
    res.render('show',{b:b});
  } catch (error) {
    res.send(error);
    
  }
});


router.get('/details/:id', async function(req, res, next) {
  try {
    const s=await Data.findById(req.params.id);
    res.render('ex',{s:s});
  } catch (error) {
    res.send(error);
    
  }
});

router.get('/delete/:id', async function(req, res, next) {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.redirect('/show',);
  } catch (error) {
    res.send(error);
    
  }
});



module.exports = router;
