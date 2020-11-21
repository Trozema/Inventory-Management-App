var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var mongoose = require('mongoose');
const jwt = require ( 'jsonwebtoken' );
var app = express();

//This is the code for the authorization//
const port = 8000

app.use(bodyParser.json())


app.post( '/login' , (req, res) => {
const usr = req.body.username
const pwd = req.body.password

if (usr=== 'John' && pwd=== '5678'){
  payload = {
    'name' : usr,
    'admin' : false
    }
    const token = jwt.sign( JSON .stringify(payload), 'jwt-secret' ,
    {algorithm: 'HS256' })
    res.send({ token })
    

  } else if (usr=== 'Thomas' && pwd=== '1234') {
    payload = {
      'name' : usr,
      'admin' : true
      }
      const token = jwt.sign( JSON .stringify(payload), 'jwt-secret' ,
      {algorithm: 'HS256' })
      res.send({ token })
      
  
  }
  else {
  res.status( 403 ).send({ 'err' : 'Incorrect login!' })
  }
  

})

app.listen(port, () => console .log(
`Now listening at http://localhost:${port}` ))

app.get( '/resource' , (req, res) => {
  const auth = req.headers[ 'authorization' ]
  const token = auth.split( ' ' )[ 1 ]
  try {
  const decoded = jwt.verify(token, 'jwt-secret' )

  res.send({ 'msg' :
  `Hello, ${decoded.name}! Your JSON Web Token has been verified.` })
  } catch (err) {
  res.status( 401 ).send({ 'err' : 'Bad JWT!' })
  }
  }) 

  


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes//

require('./routes/new.js')(app);
require('./routes/home.js')(app);
require('./routes/delete.js')(app);
require('./routes/update.js')(app); 
require('./routes/replace.js')(app); 
require('./routes/filter.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




//DB Connection//

const uri = 'mongodb+srv://Thomas:Trian1123@cluster0.jqibo.mongodb.net/InventoryDB?retryWrites=true&w=majority';


mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.on('error', function() {
	console.log('Connection to Mongo established.');
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})




module.exports = app;