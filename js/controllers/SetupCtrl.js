app.controller('SetupCtrl', function($scope, $stateParams) {
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
});

var dataRef = new Firebase('https://eiit-56995.firebaseio.com');

facebookConnectPlugin.login(['public_info'], function(status) {
  facebookConnectPlugin.getAccessToken(function(token) {
    // Authenticate with Facebook using an existing OAuth 2.0 access token
    dataRef.authWithOAuthToken("facebook", token, function(error, authData) {
      if (error) {
        console.log('Firebase login failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });
  }, function(error) {
    console.log('Could not get access token', error);
  });
}, function(error) {
  console.log('An error occurred logging the user in', error);
});