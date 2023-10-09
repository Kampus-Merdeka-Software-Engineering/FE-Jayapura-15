// import
var express = require('express');
var path = require('path');
var connection = require('./app/model/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('index');
});

app.get('/index', function(req,res) {
    res.render('index');
  });

app.get('/profiles', function(req,res) {
  res.render('pages/profiles');
});

app.listen(3000, function() {
    console.log("Server is running succesfully on port 3000");
    connection.authenticate()
    .then(function() {
        console.log("Database terhubung");
    })
    .catch(function(error) {
        console.log("Error terhubung ke Database", error);
        process.exit();
    })
});