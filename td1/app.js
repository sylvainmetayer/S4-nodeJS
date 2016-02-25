var express       = require('express'),
   http           = require('http'),
   path           = require('path'),
   bodyParser     = require('body-parser'), //pour récupérer les résultats des post
   handlebars  	  = require('express-handlebars'), hbs,
   session = require('express-session');

var app = express();
app.set('port', 6800);
//pour body-parser (les POST..)
app.use(bodyParser.urlencoded({extended: true}));

// handlebars
hbs = handlebars.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//session
app.use(session({
    secret: 'nC0@#1pM/-0qA1+é',
    name: 'TD1',
    resave: true,
    saveUninitialized: true
}));

//importation des routes
require('./router/router')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server en attente sur le port : ' + app.get('port'));
});
