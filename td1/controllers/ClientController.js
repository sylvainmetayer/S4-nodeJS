module.exports.Client = function(request, response){
 response.title ="Client"
 response.render('client', response);
};

module.exports.AjouterPersonne = 	function(request, response){
 response.title = 'Ajouter des personnes';
 response.render('saisieClient', response);
} ;

module.exports.AffichePersonne = function(request, response){
  response.title = 'Nouvelles personnes';
     var nom = request.body.nom;
     var prenom = request.body.prenom;
     if (typeof(request.session.personne) == 'undefined') {
            request.session.personne = [];
        }
     request.session.personne.push({"nom":nom, "prenom":prenom});
     console.log(request.session.personne);
     response.noms=request.session.personne;
     response.render('afficheClient', response);
} ;
