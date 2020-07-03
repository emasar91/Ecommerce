const server = require('express').Router();
const { User } = require('../models');
const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

server.post('/', function(req, res) {
    User.create({
<<<<<<< HEAD
            nombreUser: req.body.nombreUser,
            contraUser: req.body.contraUser,
            emailUser: req.body.emailUser,
        })
        .then(() => {
            return res.send('Se ha agregado un nuevo usuario')
        })
        .catch(() => {
            return res.status(400).send('No se agrego el producto')
        })
=======
        nombreUser: req.body.nombreUser,
        contraUser: req.body.contraUser,
        emailUser: req.body.emailUser,   
    })
    .then(()=>{
        return res.send('Se ha agregado un nuevo usuario')
    })
    .catch(() => {
        return res.status(400).send('No se agrego el usuario')
    })
>>>>>>> eeac9096bf64c09fb6c4886541bf3ce0ec3edeb0
});

server.get('/', function(req, res) {
    User.findAll()
        .then((users) => {
            res.send(users);
        });

});

server.delete('/:id', function(req, res) {
    User.destroy({
        where: {
            idUser: req.params.id,
        }
    }).then(() => {
        return res.send('Se ha eliminado el usuario');
    });
});

server.put('/:id', function(req, res) {
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

server.get('/login/:nombreUser/:contraUser', function(req, res) {
    User.findOne({
            where: {
                nombreUser: req.params.nombreUser,
                contraUser: req.params.contraUser,
            }
        })
        .then((user) => {

            return res.send(user);
        });

});


module.exports = server;