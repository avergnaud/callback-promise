/*
"the callback pyramid of doom" ?

node some-callback.js
  ou
npm start
*/

function getUser(login, onSuccess, onError) {
    console.log('getUser method call - login=' + login);
    var everythingOk = true;/* MOCK */
    if (everythingOk) {
        onSuccess('[User Adrien Vergnaud]');/* MOCK */
    } else {
        onError();
    }
}

function getRights(user, onSuccess, onError) {
    console.log('getRights method call - user=' + user);
    var everythingOk = true;/* MOCK */
    if (everythingOk) {
        onSuccess('[Administrator]');/* MOCK */
    } else {
        onError();
    }
}

function canPerformAction(rights, onSuccess, onError) {
    console.log('canPerformAction method call - rights=' + rights);
    var everythingOk = true;/* MOCK */
    if (everythingOk) {
        onSuccess(true);/* MOCK */
    } else {
        onError();
    }
}

/*
lisibilité
ajout d'une qutrième methode...
*/

getUser('avergnaud', function(user) {
        getRights(user, function(rights) {
                canPerformAction(rights, function(status) {
                        console.log('status ' + status);
                    },
                    function() {
                        console.log('canPerformAction call failure ');
                    });
            },
            function() {
                console.log('getRights call failure');
            });
    },
    function() {
        console.log('getUser call failure');
    });
