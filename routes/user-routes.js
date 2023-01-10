const express = require('express');
const {
    authUser
} = require('../controllers/userController');

const router = express.Router();

router.get('/user/auth/:email/:pass', authUser);


module.exports = {
    routes: router
}