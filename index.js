// Load Node modules
var express = require('express');
const path = require('path');
const app = express();
const os = require('os');
const Server = require('node-git-server');
var admin = require("firebase-admin");
const fs = require('fs');
var serviceAccount = require("./krios.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://krios-studio-default-rtdb.firebaseio.com/"
});
const db = admin.database();

const repos = new Server(path.resolve(__dirname, 'tmp'), {
  autoCreate: true
});
var app = express();
repos.on('push', (push) => {
push.accept();
var branch = push.branch;
var commit = push.commit;
var user = push.repo.split("/")[0];
var repo = push.repo.split("/")[1];


console.log(`${user} pushed ${branch} in ${repo}. Logged as ${commit}`);
  db.ref("user").child(user).update({
   [repo]:commit
  });

});

repos.on('fetch', (fetch)=>{
  fetch.accept();
});

app.use('/g', function(req, res) {
repos.handle(req, res)
});
app.use('/repository', express.static('repository'));
app.use('/', express.static('dashboard-2'));
app.listen(8080);

