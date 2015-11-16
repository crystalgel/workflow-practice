var
  express = require('express')
  app = express()
  ejs = require('ejs')
  ejsLayouts = require('express-ejs-layouts')

// app configurations
app.set('view engine', 'ejs')
//view engine is the engine in which we render views; option for express

// middleware-anything that runs before our request gets processed
app.use(ejsLayouts)
app.use('/assets', express.static(__dirname + '/assets'))
app.use(function(req, res, next){
  console.log("A requesteth hath been madeth!");
  next();
})


//basic routes
app.get('/', function(req,res){
  var collection = [
    {name: "Lilly", email: "notjuan@gmail.com"},
    {name: "Ken", email: "dnotjuan@gmail.com"},
    {name: "Kate", email: "knotjuan@gmail.com"}
  ]
  var data = {
    title: "The Home Page",
    message: "Boom",
    users: collection
    //no surefire naming conventions
    //creating a schema of data that you can send down
  }
  // response
  res.render('index', data)
  // res.json({message: "It works!"})
})

app.get('/faq', function(req,res){
  res.render('faq', {title: "Frequently Asked Questions"})
})

app.listen(3000, function(){
  console.log('Server runningon 3000')
})
