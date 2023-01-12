const firebase = require('firebase');
const config = require('./config');
console.log('firebase:' + firebase);

const auth = firebase.initializeApp(config.firebaseConfig).auth();
const db = firebase.database();
console.log('firebase:' + firebase);


module.exports = { auth , db};