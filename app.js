var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res){
  var animal = req.params.animal.toLowerCase();
  var animalSounds = animal == 'pig' ? 'Oink'
                   : animal == 'cow' ? 'Moo'
                   : animal == 'dog' ? 'Woof Woof!'
                   : 'leave me alone!';
  res.send(`The ${animal} says ${animalSounds}`);
});

app.get('/repeat/:anyString/:numberOfTimes', function(req, res){
  var anyString = req.params.anyString.concat(" ");
  var numberOfTimes = req.params.numberOfTimes;
  res.send(`${anyString.repeat(numberOfTimes)}`);
});

app.get('*', function(req, res){
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function(){
  console.log('Server has started');
});
