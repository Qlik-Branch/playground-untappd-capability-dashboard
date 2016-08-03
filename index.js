var express = require('express'),
    app = express();

app.use('/resources', express.static(__dirname + '/resources'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use("/dashboard", function(req, res){
  console.log('loading dashboard');
  res.sendFile(__dirname+"/main.html");
});

app.use("/", function(req, res){
  console.log('loading index');
  res.sendFile(__dirname+"/index.html");
});

app.listen(8000, function(){
  console.log('listening on port 8000');
});
