var express = require('express');
var app = express();


app.get('/', function (req, res){
    res.send('Hello from my lirary App');
})

app.listen(5000, function(){
    console.log('listening on port 5000');
})