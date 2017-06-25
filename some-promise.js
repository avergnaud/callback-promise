/*
ES6 donc npm start ?
Besoin de Babel ? http://node.green/
*/

function getUser(login, onSuccess, onError) {
    console.log('getUser method call - login=' + login);
    var everythingOk = true; /* MOCK */
    return new Promise(function(onSuccess, onError) {
        if (everythingOk) {
            onSuccess('[User Adrien Vergnaud]'); /* MOCK */
        } else {
            onError('getUser');
        }
    });
}

function getRights(user, onSuccess, onError) {
    console.log('getRights method call - user=' + user);
    var everythingOk = true; /* MOCK */
    return new Promise(function(onSuccess, onError) {
        if (everythingOk) {
            onSuccess('[Administrator]'); /* MOCK */
        } else {
            onError('getRights');
        }
    });
}

function canPerformAction(rights, onSuccess, onError) {
    console.log('canPerformAction method call - rights=' + rights);
    var everythingOk = true; /* MOCK */
    return new Promise(function(onSuccess, onError) {
        if (everythingOk) {
            onSuccess(true); /* MOCK */
        } else {
            onError('canPerformAction');
        }
    });
}

/*
lisibilité
ajout d'une quatrième methode...
si on veut une gestion d'erreur par méthode, ajout d'un deuxième argument...
*/

getUser('avergnaud')
    .then(function(user) {
        return getRights(user);
    })
    .then(function(rights) {
        return canPerformAction(rights);
    })
    .then(function(status) {
      console.log('status ' + status);
    })
    .catch(rejected => console.log(rejected + ' call failure'));
