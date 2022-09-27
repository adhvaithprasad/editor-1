function add_repo(user,reponame,commitid){
var template = `
        <div class="repo" onclick="window.open('https://console.krios.studio/repository/#${user}/${reponame}','_self')">
      <div class="repo-inner">
        <div class="repo-header">
        <div class="repo-author"><p>${user}</p></div>
        <div class="repo-name"><p>${reponame}</p></div>
      </div>
      <div class="commitid">${commitid}</div>
      </div>
    </div>
`
  document.getElementById("repositories").innerHTML += template
}
const config = {
  apiKey: "AIzaSyA17yiXJ1BO3yvPd0JIfUgSj4WfRNTGTWw",
  authDomain: "krios-studio.firebaseapp.com",
  databaseURL: "https://krios-studio-default-rtdb.firebaseio.com",
  projectId: "krios-studio",
  storageBucket: "krios-studio.appspot.com",
  messagingSenderId: "106933948741",
  appId: "1:106933948741:web:ee544b08056d72d538ae2c",
  measurementId: "G-7QGMC09M01"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // document.getElementById("user-img").src = profile.photoURL;
        // document.cookie = "user=" + profile.displayName;
        console.log(profile);
        const user = "firescrypt";
        const provider = "git.krios.studio";
        const dbRef = firebase.database().ref();
        dbRef
          .child("user")
          .child(user)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              Object.keys(snapshot.val()).forEach(function (n,m,l) {
               console.log(n,snapshot.val());
              add_repo(user,n,snapshot.val()[n].slice(0,10))
              });
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  } else {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
});