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
                   : animal == 'cat' ? 'I hate you hooman!'
                   : animal == 'goldfish' ? '...'
                   : '';
  res.send(`The ${animal} says '${animalSounds}'`);

  // OR like Colt's solution
  // var sounds = {
  //     pig: 'Oink',
  //     cow: 'Moo',
  //     dog: 'Woof Woof!',
  //     cat: 'I hate you hooman',
  //     goldfish: '...'
  // }
  // var animal = req.params.animal.toLowerCase();
  // var sound = sounds[animal];
  // res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:anyString/:numberOfTimes', function(req, res){
  var anyString = req.params.anyString.concat(" ");
  var numberOfTimes = req.params.numberOfTimes;
  res.send(`${anyString.repeat(numberOfTimes)}`);

  // OR like Colt's solution
  // var anyString = req.params.anyString;
  // var numberOfTimes = Number(req.params.numberOfTimes);
  // var result = '';
  //
  // for(var i = 0; i < numberOfTimes; i++){
  //   result += anyString + ' ';
  // }
  // res.send(result);
});

app.get('*', function(req, res){
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function(){
  console.log('Server has started');
});
