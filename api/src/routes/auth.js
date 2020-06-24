const server = require('express').Router();

server.post('/changepassword');

server.post('/login');

server.get('/logout', function(req, res){
    res.send ('22');
});

server.post('/register');

server.get('/me');

server.put('/promote');

module.exports = server;
