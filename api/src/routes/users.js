const server = require('express').Router();
const { User } = require('../models');
const passport = require('passport');


function loggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect("http://localhost:3000/");
}

server.post('/', function(req, res) {
    User.create({
            nombreUser: req.body.nombreUser,
            contraUser: req.body.contraUser,
            emailUser: req.body.emailUser,
        })
        .then(() => {
            return res.send('Se ha agregado un nuevo usuario')
        })
        .catch(() => {
            return res.status(400).send('No se agrego el usuario')
        })
});

server.get('/', loggedIn, function(req, res) {
    User.findAll()
        .then((users) => {
            res.send(users);
        });

});

server.delete('/:id', loggedIn, function(req, res) {
    User.destroy({
        where: {
            idUser: req.params.id,
        }
    }).then(() => {
        return res.send('Se ha eliminado el usuario');
    });
});

server.put('/:id', loggedIn, function(req, res) {
    if (req.body.nombreUser === "" || req.body.contraUser === "" || req.body.emailUser === "") {
        return res.status(400).send("faltan parametros")
    }
    User.findOne({
            where: {
                idUser: req.params.id,
            },
        })
        .then((user) => {
            user.update({
                nombreUser: req.body.nombreUser,
                contraUser: req.body.contraUser,
                emailUser: req.body.emailUser,
            })
        })
        .then(() => {
            return res.send('Se ha modificado el usuario');
        })
        .catch(() => {
            return res.send('No se ha podido modificar el usuario');
        })

});

server.post('/login',
    passport.authenticate('local'),
    function(req, res) {

        res.send(req.user)
    });


module.exports = server;