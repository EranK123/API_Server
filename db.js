const firebase = require('firebase');
const config = require('./config');
const auth = firebase.initializeApp(config.firebaseConfig).auth();

module.exports = { auth };