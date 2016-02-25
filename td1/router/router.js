var HomeController = require('../controllers/HomeController');
var ClientController = require('../controllers/ClientController');
var ArticleController = require('../controllers/ArticleController');

module.exports = function(app){

    app.get('/', HomeController.Index);
    app.get('/client', ClientController.Client);
    app.get('/ajoutClient', ClientController.AjouterPersonne);
    app.post('/afficheClient', ClientController.AffichePersonne);
    app.get('/article', ArticleController.Article);

};
