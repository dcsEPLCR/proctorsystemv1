var express = require('express');
var bodyParser = require('body-parser'); //FROM FORM LOGIC
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //FROM FORM LOGIC
var app = express();

app.use(express.static('public'));

const urlHook = "https://hooks.zapier.com/hooks/catch/5099370/o367az5/"

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(request, response){
  response.sendFile(__dirname + '/views/index.html');
});
 //test


app.post('/Form1', urlencodedParser, function(request,response){
  console.log(request.body);
  var answers = JSON.stringify(request.body);
  var HttpCheckClient = new XMLHttpRequest();
  HttpCheckClient.open("POST", urlHook, true);
  HttpCheckClient.setRequestHeader('Content-Type', 'application/json');

  HttpCheckClient.send(answers);

  response.send("Thank you for taking the exam");
});

var listener = app.listen(process.env.PORT || '3000', function(){
  console.log('Your app is listening on port ' + listener.address().port);
});
