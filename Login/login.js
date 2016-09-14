var config = {
        apiKey: "AIzaSyCAO-swiIcxLFJR5m3zQ8Bepik07xUc4sI",
        authDomain: "paulsanchez.firebaseapp.com",
        databaseURL: "https://paulsanchez.firebaseio.com",
        storageBucket: "firebase-paulsanchez.appspot.com",
      };
firebase.initializeApp(config);

var uiConfig = {
        'signInSuccessUrl': '/widget',
        'callbacks': {
          'signInSuccess': function(user, credential, redirectUrl) {
            if (window.opener) {
              window.close();
              return false;
            } else {
              return true;
            }
          }
        },
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        'tosUrl': 'https://www.google.com'
      };
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);